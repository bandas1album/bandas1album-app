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
import type {
  PlayerAlbumMeta,
  PlayerQueueTrack,
  PlayerState,
  YTPlayer
} from './types'

const PlayerContext = createContext<PlayerState | undefined>(undefined)

export function buildQueue(album: Album): PlayerQueueTrack[] {
  return (album.tracklist ?? [])
    .map((track, index) => ({
      youtubeId: track.youtube_id?.trim() || '',
      name: track.name,
      duration: track.duration,
      index
    }))
    .filter((track) => track.youtubeId !== '')
}

export function firstPlayableTrackIndex(album: Album): number {
  return (album.tracklist ?? []).findIndex((track) =>
    Boolean(track.youtube_id?.trim())
  )
}

export function formatPlayerClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds))
  const minutes = Math.floor(safe / 60)
  const seconds = safe % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function loadYouTubeApi(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.YT?.Player) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      resolve()
    }

    if (!document.getElementById('youtube-iframe-api')) {
      const script = document.createElement('script')
      script.id = 'youtube-iframe-api'
      script.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(script)
    }
  })
}

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [album, setAlbum] = useState<PlayerAlbumMeta | null>(null)
  const [queue, setQueue] = useState<PlayerQueueTrack[]>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null)

  const playerRef = useRef<YTPlayer | null>(null)
  const hostRef = useRef<HTMLElement | null>(null)
  const queueRef = useRef<PlayerQueueTrack[]>([])
  const currentIndexRef = useRef<number | null>(null)
  const isPlayingRef = useRef(false)
  const progressTimerRef = useRef<number | null>(null)
  const pendingPlayRef = useRef<{ album: Album; trackIndex: number } | null>(
    null
  )
  const isReadyRef = useRef(false)
  const playAlbumTrackRef = useRef<
    ((album: Album, trackIndex: number) => void) | null
  >(null)
  const createPlayerGenerationRef = useRef(0)

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

  const startProgressTimer = useCallback(() => {
    clearProgressTimer()
    progressTimerRef.current = window.setInterval(() => {
      const player = playerRef.current
      if (!player) return
      const duration = player.getDuration()
      if (!duration || Number.isNaN(duration)) return
      const current = player.getCurrentTime()
      const remaining = Math.max(0, duration - current)
      setProgress(Math.min(100, Math.max(0, (current / duration) * 100)))
      setRemainingSeconds(remaining)
    }, 250)
  }, [clearProgressTimer])

  const playQueueIndex = useCallback(
    (queueIndex: number) => {
      const next = queueRef.current[queueIndex]
      const player = playerRef.current
      if (!next || !player || !isReadyRef.current) return

      setCurrentIndex(queueIndex)
      setProgress(0)
      setRemainingSeconds(null)
      player.loadVideoById(next.youtubeId)
      player.playVideo()
      setIsPlaying(true)
      startProgressTimer()
    },
    [startProgressTimer]
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
    playQueueIndex(index + 1)
  }, [clearProgressTimer, playQueueIndex])

  const playPrev = useCallback(() => {
    const index = currentIndexRef.current
    if (index == null) return
    if (index <= 0) {
      playerRef.current?.seekTo(0, true)
      setProgress(0)
      return
    }
    playQueueIndex(index - 1)
  }, [playQueueIndex])

  useEffect(() => {
    playNextRef.current = playNext
    startProgressTimerRef.current = startProgressTimer
    clearProgressTimerRef.current = clearProgressTimer
  }, [playNext, startProgressTimer, clearProgressTimer])

  const destroyPlayer = useCallback(() => {
    clearProgressTimer()
    try {
      playerRef.current?.destroy()
    } catch {
      // iframe já removido
    }
    playerRef.current = null
    isReadyRef.current = false
  }, [clearProgressTimer])

  const mountPlayerOnHost = useCallback(
    (host: HTMLElement) => {
      const generation = ++createPlayerGenerationRef.current

      destroyPlayer()
      host.replaceChildren()

      loadYouTubeApi().then(() => {
        if (
          cancelledGeneration(generation) ||
          hostRef.current !== host ||
          !window.YT?.Player
        ) {
          return
        }

        const current =
          currentIndexRef.current != null
            ? queueRef.current[currentIndexRef.current]
            : null

        playerRef.current = new window.YT.Player(host, {
          height: '100%',
          width: '100%',
          videoId: current?.youtubeId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1
          },
          events: {
            onReady: (event) => {
              if (cancelledGeneration(generation) || hostRef.current !== host) {
                return
              }
              isReadyRef.current = true

              const pending = pendingPlayRef.current
              if (pending) {
                pendingPlayRef.current = null
                window.setTimeout(() => {
                  playAlbumTrackRef.current?.(pending.album, pending.trackIndex)
                }, 0)
                return
              }

              if (current?.youtubeId && isPlayingRef.current) {
                event.target.playVideo()
              }
            },
            onStateChange: (event) => {
              const YT = window.YT
              if (!YT) return

              if (event.data === YT.PlayerState.ENDED) {
                playNextRef.current()
                return
              }

              if (event.data === YT.PlayerState.PLAYING) {
                setIsPlaying(true)
                startProgressTimerRef.current()
                return
              }

              if (event.data === YT.PlayerState.PAUSED) {
                setIsPlaying(false)
                clearProgressTimerRef.current()
              }
            }
          }
        })
      })

      function cancelledGeneration(gen: number) {
        return gen !== createPlayerGenerationRef.current
      }
    },
    [destroyPlayer]
  )

  const registerPlayerHost = useCallback(
    (element: HTMLElement | null) => {
      if (hostRef.current === element) return

      hostRef.current = element

      if (!element) {
        destroyPlayer()
        return
      }

      mountPlayerOnHost(element)
    },
    [destroyPlayer, mountPlayerOnHost]
  )

  const playAlbumTrack = useCallback(
    (nextAlbum: Album, trackIndex: number) => {
      const nextQueue = buildQueue(nextAlbum)
      const queueIndex = nextQueue.findIndex(
        (track) => track.index === trackIndex
      )
      if (queueIndex < 0) return

      if (!playerRef.current || !isReadyRef.current) {
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

      if (sameAlbum && currentIndexRef.current === queueIndex && isPlaying) {
        playerRef.current.pauseVideo()
        setIsPlaying(false)
        clearProgressTimer()
        return
      }

      if (sameAlbum && currentIndexRef.current === queueIndex && !isPlaying) {
        playerRef.current.playVideo()
        setIsPlaying(true)
        startProgressTimer()
        return
      }

      playQueueIndex(queueIndex)
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
      player.pauseVideo()
      setIsPlaying(false)
      clearProgressTimer()
      return
    }
    player.playVideo()
    setIsPlaying(true)
    startProgressTimer()
  }, [clearProgressTimer, isPlaying, startProgressTimer])

  const pause = useCallback(() => {
    playerRef.current?.pauseVideo()
    setIsPlaying(false)
    clearProgressTimer()
  }, [clearProgressTimer])

  const seekToPercent = useCallback((percent: number) => {
    const player = playerRef.current
    if (!player) return
    const duration = player.getDuration()
    if (!duration) return
    const next = Math.min(100, Math.max(0, percent))
    player.seekTo((next / 100) * duration, true)
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
