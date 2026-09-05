import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import type { Album } from '@/api/types/Album'
import type { PlayerAlbumMeta, PlayerQueueTrack, PlayerState } from './types'
import { resolveTrackYouTubeId } from '@/utils/youtube'
import type Plyr from 'plyr'
import 'plyr/dist/plyr.css'

const PlayerContext = createContext<PlayerState | undefined>(undefined)

const PLYR_OPTIONS = {
  controls: [] as string[],
  clickToPlay: false,
  hideControls: true,
  keyboard: { focused: false, global: false },
  tooltips: { controls: false, seek: false },
  youtube: {
    noCookie: false,
    rel: 0,
    showinfo: 0,
    iv_load_policy: 3,
    modestbranding: 1,
    controls: 0,
    fs: 0,
    disablekb: 1,
    playsinline: 1,
    customControls: true
  }
}

export function buildQueue(album: Album): PlayerQueueTrack[] {
  return (album.tracklist ?? [])
    .map((track, index) => ({
      youtubeId: resolveTrackYouTubeId(track),
      name: track.name,
      duration: track.duration,
      index
    }))
    .filter((track) => track.youtubeId !== '')
}

export function firstPlayableTrackIndex(album: Album): number {
  return (album.tracklist ?? []).findIndex(
    (track) => resolveTrackYouTubeId(track) !== ''
  )
}

export function formatPlayerClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds))
  const minutes = Math.floor(safe / 60)
  const seconds = safe % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function isValidYouTubeId(id: string): boolean {
  return /^[a-zA-Z0-9_-]{11}$/.test(id)
}

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [album, setAlbum] = useState<PlayerAlbumMeta | null>(null)
  const [queue, setQueue] = useState<PlayerQueueTrack[]>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null)

  const playerRef = useRef<Plyr | null>(null)
  const hostRef = useRef<HTMLElement | null>(null)
  const queueRef = useRef<PlayerQueueTrack[]>([])
  const currentIndexRef = useRef<number | null>(null)
  const isPlayingRef = useRef(false)
  const progressTimerRef = useRef<number | null>(null)
  const pendingPlayRef = useRef<{ album: Album; trackIndex: number } | null>(
    null
  )
  const loadedVideoIdRef = useRef<string | null>(null)
  const creatingRef = useRef<Promise<Plyr | null> | null>(null)
  const playAlbumTrackRef = useRef<
    ((album: Album, trackIndex: number) => void) | null
  >(null)
  const mountGenerationRef = useRef(0)

  const playNextRef = useRef<() => void>(() => undefined)
  const startProgressTimerRef = useRef<() => void>(() => undefined)
  const clearProgressTimerRef = useRef<() => void>(() => undefined)

  useEffect(() => {
    queueRef.current = queue
  }, [queue])

  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  const clearProgressTimer = useCallback(() => {
    if (progressTimerRef.current != null) {
      window.clearInterval(progressTimerRef.current)
      progressTimerRef.current = null
    }
  }, [])

  const syncProgressFromPlayer = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    const duration = player.duration
    if (!duration || Number.isNaN(duration)) return
    const current = player.currentTime
    const remaining = Math.max(0, duration - current)
    setProgress(Math.min(100, Math.max(0, (current / duration) * 100)))
    setRemainingSeconds(remaining)
  }, [])

  const startProgressTimer = useCallback(() => {
    clearProgressTimer()
    progressTimerRef.current = window.setInterval(() => {
      syncProgressFromPlayer()
    }, 250)
  }, [clearProgressTimer, syncProgressFromPlayer])

  const destroyPlayer = useCallback(() => {
    clearProgressTimer()
    try {
      playerRef.current?.destroy()
    } catch {
      // já destruído
    }
    playerRef.current = null
    loadedVideoIdRef.current = null
    creatingRef.current = null
    if (hostRef.current) {
      hostRef.current.replaceChildren()
    }
  }, [clearProgressTimer])

  const bindPlayerEvents = useCallback(
    (player: Plyr) => {
      player.on('play', () => {
        setIsPlaying(true)
        startProgressTimerRef.current()
      })
      player.on('pause', () => {
        setIsPlaying(false)
        clearProgressTimerRef.current()
        syncProgressFromPlayer()
      })
      player.on('ended', () => {
        playNextRef.current()
      })
      player.on('timeupdate', () => {
        syncProgressFromPlayer()
      })
    },
    [syncProgressFromPlayer]
  )

  /**
   * Cria o Plyr apenas com um YouTube ID válido.
   * Nunca monta provider=youtube sem embed-id (causa "Invalid video id").
   */
  const ensurePlayer = useCallback(
    async (youtubeId: string): Promise<Plyr | null> => {
      if (!isValidYouTubeId(youtubeId)) return null
      const host = hostRef.current
      if (!host) return null

      if (playerRef.current && loadedVideoIdRef.current === youtubeId) {
        return playerRef.current
      }

      if (
        playerRef.current &&
        loadedVideoIdRef.current &&
        loadedVideoIdRef.current !== youtubeId
      ) {
        const player = playerRef.current
        loadedVideoIdRef.current = youtubeId
        return new Promise((resolve) => {
          const onReady = () => {
            player.off('ready', onReady)
            resolve(player)
          }
          player.on('ready', onReady)
          player.source = {
            type: 'video',
            sources: [{ src: youtubeId, provider: 'youtube' }]
          }
        })
      }

      if (creatingRef.current) {
        await creatingRef.current
        if (playerRef.current && loadedVideoIdRef.current === youtubeId) {
          return playerRef.current
        }
      }

      const generation = ++mountGenerationRef.current

      const createPromise = (async () => {
        destroyPlayer()

        const { default: PlyrCtor } = await import('plyr')
        if (
          generation !== mountGenerationRef.current ||
          hostRef.current !== host
        ) {
          return null
        }

        const target = document.createElement('div')
        target.dataset.plyrProvider = 'youtube'
        target.dataset.plyrEmbedId = youtubeId
        host.appendChild(target)

        const player = new PlyrCtor(target, PLYR_OPTIONS)
        playerRef.current = player
        loadedVideoIdRef.current = youtubeId
        bindPlayerEvents(player)

        await new Promise<void>((resolve) => {
          player.once('ready', () => resolve())
        })

        if (
          generation !== mountGenerationRef.current ||
          hostRef.current !== host
        ) {
          try {
            player.destroy()
          } catch {
            // ignore
          }
          return null
        }

        return player
      })()

      creatingRef.current = createPromise
      const player = await createPromise
      if (creatingRef.current === createPromise) {
        creatingRef.current = null
      }
      return player
    },
    [bindPlayerEvents, destroyPlayer]
  )

  const playQueueIndex = useCallback(
    async (queueIndex: number) => {
      const next = queueRef.current[queueIndex]
      if (!next || !isValidYouTubeId(next.youtubeId)) return

      setCurrentIndex(queueIndex)
      setProgress(0)
      setRemainingSeconds(null)

      const player = await ensurePlayer(next.youtubeId)
      if (!player) return

      void player.play()
      setIsPlaying(true)
      startProgressTimer()
    },
    [ensurePlayer, startProgressTimer]
  )

  const playNext = useCallback(() => {
    const index = currentIndexRef.current
    if (index == null) return
    if (index >= queueRef.current.length - 1) {
      setIsPlaying(false)
      clearProgressTimer()
      setProgress(100)
      return
    }
    void playQueueIndex(index + 1)
  }, [clearProgressTimer, playQueueIndex])

  const playPrev = useCallback(() => {
    const index = currentIndexRef.current
    if (index == null) return
    if (index <= 0) {
      const player = playerRef.current
      if (player) player.currentTime = 0
      setProgress(0)
      return
    }
    void playQueueIndex(index - 1)
  }, [playQueueIndex])

  useEffect(() => {
    playNextRef.current = playNext
    startProgressTimerRef.current = startProgressTimer
    clearProgressTimerRef.current = clearProgressTimer
  }, [playNext, startProgressTimer, clearProgressTimer])

  const registerPlayerHost = useCallback(
    (element: HTMLElement | null) => {
      if (hostRef.current === element) return

      const previousVideoId = loadedVideoIdRef.current
      const wasPlaying = isPlayingRef.current

      if (hostRef.current && hostRef.current !== element) {
        destroyPlayer()
      }

      hostRef.current = element

      if (!element) {
        destroyPlayer()
        return
      }

      // Reanexa o host (ex.: voltou à página do álbum) com o vídeo atual
      if (previousVideoId && isValidYouTubeId(previousVideoId)) {
        void (async () => {
          const player = await ensurePlayer(previousVideoId)
          if (player && wasPlaying) {
            void player.play()
          }
        })()
        return
      }

      const pending = pendingPlayRef.current
      if (pending) {
        pendingPlayRef.current = null
        window.setTimeout(() => {
          playAlbumTrackRef.current?.(pending.album, pending.trackIndex)
        }, 0)
      }
    },
    [destroyPlayer, ensurePlayer]
  )

  const playAlbumTrack = useCallback(
    (nextAlbum: Album, trackIndex: number) => {
      const nextQueue = buildQueue(nextAlbum)
      const queueIndex = nextQueue.findIndex(
        (track) => track.index === trackIndex
      )
      if (queueIndex < 0) return

      if (!hostRef.current) {
        pendingPlayRef.current = { album: nextAlbum, trackIndex }
        return
      }

      const sameAlbum = album?.slug === nextAlbum.slug
      if (!sameAlbum) {
        setAlbum({
          slug: nextAlbum.slug,
          title: nextAlbum.title,
          artist: nextAlbum.artist,
          cover: nextAlbum.cover
        })
        setQueue(nextQueue)
        queueRef.current = nextQueue
      } else if (queue.length !== nextQueue.length) {
        setQueue(nextQueue)
        queueRef.current = nextQueue
      }

      const next = nextQueue[queueIndex]
      if (!next) return

      if (
        sameAlbum &&
        currentIndexRef.current === queueIndex &&
        loadedVideoIdRef.current === next.youtubeId &&
        playerRef.current
      ) {
        if (isPlaying) {
          playerRef.current.pause()
          setIsPlaying(false)
          clearProgressTimer()
          return
        }
        void playerRef.current.play()
        setIsPlaying(true)
        startProgressTimer()
        return
      }

      void playQueueIndex(queueIndex)
    },
    [
      album?.slug,
      clearProgressTimer,
      isPlaying,
      playQueueIndex,
      queue.length,
      startProgressTimer
    ]
  )

  useEffect(() => {
    playAlbumTrackRef.current = playAlbumTrack
  }, [playAlbumTrack])

  const playAlbum = useCallback(
    (nextAlbum: Album) => {
      const trackIndex = firstPlayableTrackIndex(nextAlbum)
      if (trackIndex < 0) return
      playAlbumTrack(nextAlbum, trackIndex)
    },
    [playAlbumTrack]
  )

  const toggle = useCallback(() => {
    const player = playerRef.current
    if (!player || currentIndexRef.current == null) return
    if (isPlaying) {
      player.pause()
      setIsPlaying(false)
      clearProgressTimer()
      return
    }
    void player.play()
    setIsPlaying(true)
    startProgressTimer()
  }, [clearProgressTimer, isPlaying, startProgressTimer])

  const pause = useCallback(() => {
    playerRef.current?.pause()
    setIsPlaying(false)
    clearProgressTimer()
  }, [clearProgressTimer])

  const seekToPercent = useCallback((percent: number) => {
    const player = playerRef.current
    if (!player) return
    const duration = player.duration
    if (!duration) return
    const next = Math.min(100, Math.max(0, percent))
    player.currentTime = (next / 100) * duration
    setProgress(next)
  }, [])

  const isTrackActive = useCallback(
    (albumSlug: string, trackIndex: number) => {
      if (!album || currentIndex == null) return false
      const current = queue[currentIndex]
      return album.slug === albumSlug && current?.index === trackIndex
    },
    [album, currentIndex, queue]
  )

  const isAlbumActive = useCallback(
    (albumSlug: string) => {
      return Boolean(album?.slug === albumSlug && currentIndex != null)
    },
    [album?.slug, currentIndex]
  )

  const getTrackProgress = useCallback(
    (albumSlug: string, trackIndex: number) => {
      if (!isTrackActive(albumSlug, trackIndex)) return 0
      return progress
    },
    [isTrackActive, progress]
  )

  const getTrackRemainingLabel = useCallback(
    (albumSlug: string, trackIndex: number) => {
      if (!isTrackActive(albumSlug, trackIndex) || remainingSeconds == null) {
        return null
      }
      return formatPlayerClock(remainingSeconds)
    },
    [isTrackActive, remainingSeconds]
  )

  const value = useMemo<PlayerState>(
    () => ({
      album,
      queue,
      currentIndex,
      isPlaying,
      progress,
      remainingSeconds,
      registerPlayerHost,
      playAlbum,
      playAlbumTrack,
      toggle,
      pause,
      playNext,
      playPrev,
      seekToPercent,
      isTrackActive,
      isAlbumActive,
      getTrackProgress,
      getTrackRemainingLabel,
      firstPlayableTrackIndex
    }),
    [
      album,
      queue,
      currentIndex,
      isPlaying,
      progress,
      remainingSeconds,
      registerPlayerHost,
      playAlbum,
      playAlbumTrack,
      toggle,
      pause,
      playNext,
      playPrev,
      seekToPercent,
      isTrackActive,
      isAlbumActive,
      getTrackProgress,
      getTrackRemainingLabel
    ]
  )

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider')
  }
  return context
}
