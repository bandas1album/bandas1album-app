import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { Pause, Play } from '@styled-icons/ionicons-solid'
import { Open } from '@styled-icons/ionicons-outline'
import type { Album } from '@/api/types/Album'
import type { PlayerAlbumMeta, PlayerQueueTrack, PlayerState } from './types'
import { resolveTrackYouTubeId } from '@/utils/youtube'
import type Plyr from 'plyr'
import 'plyr/dist/plyr.css'
import * as S from './styles'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

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

function readPlayerMediaElement(player: Plyr): HTMLElement | null {
  const withMedia = player as Plyr & { media?: HTMLElement | null }
  return withMedia.media ?? null
}

function isPlayerAttachedToHost(
  player: Plyr,
  host: HTMLElement | null
): boolean {
  if (!host?.isConnected) return false
  const media = readPlayerMediaElement(player)
  if (media && (!media.isConnected || !host.contains(media))) return false
  const iframe = host.querySelector('iframe')
  if (!iframe?.isConnected) return false
  return true
}

type CoverRect = { top: number; left: number; width: number; height: number }

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [album, setAlbum] = useState<PlayerAlbumMeta | null>(null)
  const [queue, setQueue] = useState<PlayerQueueTrack[]>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null)
  const [coverRect, setCoverRect] = useState<CoverRect | null>(null)
  const [coverSlug, setCoverSlug] = useState<string | null>(null)

  const playerRef = useRef<Plyr | null>(null)
  const playerHostRef = useRef<HTMLDivElement | null>(null)
  const coverHostRef = useRef<HTMLElement | null>(null)
  const coverSlugRef = useRef<string | null>(null)
  const albumRef = useRef<PlayerAlbumMeta | null>(null)
  const queueRef = useRef<PlayerQueueTrack[]>([])
  const currentIndexRef = useRef<number | null>(null)
  const isPlayingRef = useRef(false)
  const progressTimerRef = useRef<number | null>(null)
  const pendingPlayRef = useRef<{ album: Album; trackIndex: number } | null>(
    null
  )
  const loadedVideoIdRef = useRef<string | null>(null)
  const savedPlaybackTimeRef = useRef(0)
  const creatingRef = useRef<Promise<Plyr | null> | null>(null)
  const layoutTransitionRef = useRef(false)
  const playAlbumTrackRef = useRef<
    ((album: Album, trackIndex: number) => void) | null
  >(null)
  const playNextRef = useRef<() => void>(() => undefined)
  const startProgressTimerRef = useRef<() => void>(() => undefined)
  const clearProgressTimerRef = useRef<() => void>(() => undefined)

  const persistYouTubeId = useCallback((youtubeId: string | null) => {
    loadedVideoIdRef.current = youtubeId
    const host = playerHostRef.current
    if (!host) return
    if (youtubeId) {
      host.dataset.youtubeId = youtubeId
    } else {
      delete host.dataset.youtubeId
    }
  }, [])

  const rememberPlaybackTime = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    const time = player.currentTime
    if (Number.isFinite(time) && time >= 0) {
      savedPlaybackTimeRef.current = time
    }
  }, [])

  const destroyPlayerInstance = useCallback(() => {
    rememberPlaybackTime()
    try {
      playerRef.current?.destroy()
    } catch {
      // Plyr pode falhar se o media já saiu do DOM
    }
    playerRef.current = null
    playerHostRef.current?.replaceChildren()
  }, [rememberPlaybackTime])

  useEffect(() => {
    albumRef.current = album
  }, [album])

  useEffect(() => {
    queueRef.current = queue
  }, [queue])

  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  const hasSession = currentIndex != null
  const isCoverMode = Boolean(
    hasSession && album?.slug && coverSlug === album.slug && coverRect
  )
  const isPipMode = hasSession && !isCoverMode
  const playerMode: 'pip' | 'cover' = isCoverMode ? 'cover' : 'pip'

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
    if (Number.isFinite(current) && current >= 0) {
      savedPlaybackTimeRef.current = current
    }
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

  const updateCoverRect = useCallback(() => {
    const host = coverHostRef.current
    const playingSlug = albumRef.current?.slug
    if (
      !host ||
      !playingSlug ||
      coverSlugRef.current !== playingSlug ||
      currentIndexRef.current == null
    ) {
      setCoverRect(null)
      return
    }

    const rect = host.getBoundingClientRect()
    setCoverRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    })
  }, [])

  useIsomorphicLayoutEffect(() => {
    updateCoverRect()

    const host = coverHostRef.current
    if (!host) return

    const onScrollOrResize = () => updateCoverRect()
    window.addEventListener('resize', onScrollOrResize)
    window.addEventListener('scroll', onScrollOrResize, true)

    const ro = new ResizeObserver(onScrollOrResize)
    ro.observe(host)

    return () => {
      window.removeEventListener('resize', onScrollOrResize)
      window.removeEventListener('scroll', onScrollOrResize, true)
      ro.disconnect()
    }
  }, [album?.slug, currentIndex, updateCoverRect, coverSlug])

  const bindPlayerEvents = useCallback(
    (player: Plyr) => {
      player.on('play', () => {
        setIsPlaying(true)
        startProgressTimerRef.current()
      })
      player.on('pause', () => {
        // Redimensionar iframe (capa ↔ PiP) dispara pause — ignora nessa janela.
        if (layoutTransitionRef.current) return
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
   * Player único e persistente no host fixo.
   * Se o media sair do DOM, reconstrói a partir do youtubeId salvo.
   */
  const ensurePlayer = useCallback(
    async (youtubeId: string): Promise<Plyr | null> => {
      if (!isValidYouTubeId(youtubeId)) return null
      const host = playerHostRef.current
      if (!host) return null

      persistYouTubeId(youtubeId)

      if (playerRef.current && loadedVideoIdRef.current === youtubeId) {
        if (isPlayerAttachedToHost(playerRef.current, host)) {
          return playerRef.current
        }
        destroyPlayerInstance()
        persistYouTubeId(youtubeId)
      }

      if (creatingRef.current) {
        await creatingRef.current
        if (
          playerRef.current &&
          loadedVideoIdRef.current === youtubeId &&
          isPlayerAttachedToHost(playerRef.current, host)
        ) {
          return playerRef.current
        }
      }

      if (
        playerRef.current &&
        loadedVideoIdRef.current !== youtubeId &&
        isPlayerAttachedToHost(playerRef.current, host)
      ) {
        const player = playerRef.current
        persistYouTubeId(youtubeId)
        savedPlaybackTimeRef.current = 0
        const createPromise = new Promise<Plyr | null>((resolve) => {
          const onReady = () => {
            player.off('ready', onReady)
            resolve(player)
          }
          player.on('ready', onReady)
          try {
            player.source = {
              type: 'video',
              sources: [{ src: youtubeId, provider: 'youtube' }]
            }
          } catch {
            destroyPlayerInstance()
            persistYouTubeId(youtubeId)
            resolve(null)
          }
        })
        creatingRef.current = createPromise
        const result = await createPromise
        creatingRef.current = null
        if (result) return result
      } else if (playerRef.current) {
        destroyPlayerInstance()
        persistYouTubeId(youtubeId)
      }

      const createPromise = (async () => {
        const { default: PlyrCtor } = await import('plyr')
        if (!playerHostRef.current) return null

        const target = document.createElement('div')
        target.dataset.plyrProvider = 'youtube'
        target.dataset.plyrEmbedId = youtubeId
        playerHostRef.current.replaceChildren()
        playerHostRef.current.appendChild(target)
        persistYouTubeId(youtubeId)

        const player = new PlyrCtor(target, PLYR_OPTIONS)
        playerRef.current = player
        bindPlayerEvents(player)

        await new Promise<void>((resolve) => {
          player.once('ready', () => resolve())
        })

        return player
      })()

      creatingRef.current = createPromise
      const player = await createPromise
      creatingRef.current = null
      return player
    },
    [bindPlayerEvents, destroyPlayerInstance, persistYouTubeId]
  )

  const recoverPlayerIfDetached = useCallback(
    async (opts?: { resume?: boolean }): Promise<Plyr | null> => {
      const host = playerHostRef.current
      const youtubeId =
        loadedVideoIdRef.current || host?.dataset.youtubeId || null
      if (!youtubeId || !isValidYouTubeId(youtubeId)) return null

      const existing = playerRef.current
      if (existing && isPlayerAttachedToHost(existing, host)) {
        return existing
      }

      rememberPlaybackTime()
      const seekTo = savedPlaybackTimeRef.current
      const shouldResume = opts?.resume ?? isPlayingRef.current

      destroyPlayerInstance()
      persistYouTubeId(youtubeId)

      const player = await ensurePlayer(youtubeId)
      if (!player) return null

      if (seekTo > 0) {
        try {
          player.currentTime = seekTo
        } catch {
          // ignore until ready enough
        }
      }

      if (shouldResume) {
        try {
          await player.play()
          setIsPlaying(true)
          startProgressTimerRef.current()
        } catch {
          // autoplay pode falhar; UI ainda pode retomar no próximo clique
        }
      }

      return player
    },
    [
      destroyPlayerInstance,
      ensurePlayer,
      persistYouTubeId,
      rememberPlaybackTime
    ]
  )

  const playQueueIndex = useCallback(
    async (queueIndex: number) => {
      const next = queueRef.current[queueIndex]
      if (!next || !isValidYouTubeId(next.youtubeId)) return

      setCurrentIndex(queueIndex)
      setProgress(0)
      setRemainingSeconds(null)
      savedPlaybackTimeRef.current = 0

      let player = await ensurePlayer(next.youtubeId)
      if (!player || !isPlayerAttachedToHost(player, playerHostRef.current)) {
        player = await recoverPlayerIfDetached({ resume: true })
      }
      if (!player) return

      try {
        await player.play()
        setIsPlaying(true)
        startProgressTimer()
        updateCoverRect()
      } catch {
        const recovered = await recoverPlayerIfDetached({ resume: true })
        if (!recovered) return
        updateCoverRect()
      }
    },
    [ensurePlayer, recoverPlayerIfDetached, startProgressTimer, updateCoverRect]
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
    (element: HTMLElement | null, albumSlug?: string) => {
      if (element) {
        coverHostRef.current = element
        coverSlugRef.current = albumSlug ?? null
        setCoverSlug(albumSlug ?? null)
      } else if (!albumSlug || coverSlugRef.current === albumSlug) {
        coverHostRef.current = null
        coverSlugRef.current = null
        setCoverSlug(null)
        setCoverRect(null)
      }

      requestAnimationFrame(() => updateCoverRect())

      const pending = pendingPlayRef.current
      if (pending && playerHostRef.current) {
        pendingPlayRef.current = null
        window.setTimeout(() => {
          playAlbumTrackRef.current?.(pending.album, pending.trackIndex)
        }, 0)
      }
    },
    [updateCoverRect]
  )

  const playAlbumTrack = useCallback(
    (nextAlbum: Album, trackIndex: number) => {
      const nextQueue = buildQueue(nextAlbum)
      const queueIndex = nextQueue.findIndex(
        (track) => track.index === trackIndex
      )
      if (queueIndex < 0) return

      if (!playerHostRef.current) {
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
        if (!isPlayerAttachedToHost(playerRef.current, playerHostRef.current)) {
          void recoverPlayerIfDetached({ resume: !isPlaying })
          return
        }
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
      recoverPlayerIfDetached,
      startProgressTimer
    ]
  )

  useEffect(() => {
    playAlbumTrackRef.current = playAlbumTrack
  }, [playAlbumTrack])

  // YouTube pausa ao redimensionar o iframe (capa ↔ PiP); retoma se ainda deveria tocar.
  useEffect(() => {
    if (!hasSession) return

    const wasPlaying = isPlayingRef.current
    layoutTransitionRef.current = true

    const timer = window.setTimeout(() => {
      layoutTransitionRef.current = false
      void (async () => {
        let player = playerRef.current
        if (!player || !isPlayerAttachedToHost(player, playerHostRef.current)) {
          player = await recoverPlayerIfDetached({ resume: wasPlaying })
          return
        }
        if (wasPlaying && player.paused) {
          try {
            await player.play()
            setIsPlaying(true)
            startProgressTimerRef.current()
          } catch {
            await recoverPlayerIfDetached({ resume: true })
          }
        }
      })()
    }, 180)

    return () => {
      window.clearTimeout(timer)
      layoutTransitionRef.current = false
    }
  }, [playerMode, hasSession, recoverPlayerIfDetached])

  const playAlbum = useCallback(
    (nextAlbum: Album) => {
      const trackIndex = firstPlayableTrackIndex(nextAlbum)
      if (trackIndex < 0) return
      playAlbumTrack(nextAlbum, trackIndex)
    },
    [playAlbumTrack]
  )

  const toggle = useCallback(() => {
    void (async () => {
      const player = playerRef.current
      if (currentIndexRef.current == null) return

      if (!player || !isPlayerAttachedToHost(player, playerHostRef.current)) {
        await recoverPlayerIfDetached({ resume: !isPlayingRef.current })
        return
      }

      if (isPlaying) {
        rememberPlaybackTime()
        player.pause()
        setIsPlaying(false)
        clearProgressTimer()
        return
      }

      try {
        await player.play()
        setIsPlaying(true)
        startProgressTimer()
      } catch {
        await recoverPlayerIfDetached({ resume: true })
      }
    })()
  }, [
    clearProgressTimer,
    isPlaying,
    recoverPlayerIfDetached,
    rememberPlaybackTime,
    startProgressTimer
  ])

  const pause = useCallback(() => {
    rememberPlaybackTime()
    try {
      playerRef.current?.pause()
    } catch {
      // ignore detached media
    }
    setIsPlaying(false)
    clearProgressTimer()
  }, [clearProgressTimer, rememberPlaybackTime])

  const seekToPercent = useCallback(
    (percent: number) => {
      void (async () => {
        let player = playerRef.current
        if (!player || !isPlayerAttachedToHost(player, playerHostRef.current)) {
          player = await recoverPlayerIfDetached({
            resume: isPlayingRef.current
          })
        }
        if (!player) return
        const duration = player.duration
        if (!duration) return
        const next = Math.min(100, Math.max(0, percent))
        player.currentTime = (next / 100) * duration
        savedPlaybackTimeRef.current = player.currentTime
        setProgress(next)
      })()
    },
    [recoverPlayerIfDetached]
  )

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
      isPipMode,
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
      isPipMode,
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

  const currentTrack = currentIndex != null ? queue[currentIndex] ?? null : null

  return (
    <PlayerContext.Provider value={value}>
      <S.PlayerChromeReset />
      {children}
      <S.PlayerShell
        $visible={hasSession}
        $mode={playerMode}
        $top={coverRect?.top ?? 0}
        $left={coverRect?.left ?? 0}
        $width={coverRect?.width ?? 0}
        $height={coverRect?.height ?? 0}
        aria-hidden={!hasSession}
      >
        {isPipMode && album?.slug ? (
          <S.PipBack href={`/album/${album.slug}`}>
            Voltar ao álbum <Open size={16} />
          </S.PipBack>
        ) : null}
        <S.PlayerVideo $mode={playerMode} className="album-persistent-player">
          <div
            ref={(node) => {
              playerHostRef.current = node
              if (node && loadedVideoIdRef.current) {
                node.dataset.youtubeId = loadedVideoIdRef.current
              }
            }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          />
        </S.PlayerVideo>
        {isPipMode ? (
          <S.PipMeta>
            <S.PipText>
              <strong>{currentTrack?.name || album?.title || 'Tocando'}</strong>
              <span>{album?.artist || album?.title || ''}</span>
            </S.PipText>
            <S.PipToggle
              type="button"
              aria-label={isPlaying ? 'Pausar' : 'Tocar'}
              onClick={toggle}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </S.PipToggle>
          </S.PipMeta>
        ) : null}
      </S.PlayerShell>
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider')
  }
  return context
}
