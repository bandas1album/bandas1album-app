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
  const loadedVideoIdRef = useRef<string | null>(null)
  const creatingRef = useRef<Promise<Plyr | null> | null>(null)
  const coverRectRafRef = useRef<number | null>(null)
  const playNextRef = useRef<() => void>(() => undefined)

  const hasSession = currentIndex != null
  const isCoverMode = Boolean(
    hasSession && album?.slug && coverSlug === album.slug && coverRect
  )
  const isPipMode = hasSession && !isCoverMode
  const playerMode: 'pip' | 'cover' = isCoverMode ? 'cover' : 'pip'

  const setPlayingState = useCallback((next: boolean) => {
    isPlayingRef.current = next
    setIsPlaying(next)
  }, [])

  const syncProgress = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    const duration = player.duration
    if (!duration || Number.isNaN(duration)) return
    const current = player.currentTime
    setProgress(Math.min(100, Math.max(0, (current / duration) * 100)))
    setRemainingSeconds(Math.max(0, duration - current))
  }, [])

  const updateCoverRect = useCallback(() => {
    if (coverRectRafRef.current != null) return

    coverRectRafRef.current = window.requestAnimationFrame(() => {
      coverRectRafRef.current = null

      const host = coverHostRef.current
      const playingSlug = albumRef.current?.slug
      if (
        !host ||
        !playingSlug ||
        coverSlugRef.current !== playingSlug ||
        currentIndexRef.current == null
      ) {
        setCoverRect((prev) => (prev == null ? prev : null))
        return
      }

      const rect = host.getBoundingClientRect()
      const next = {
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      }

      setCoverRect((prev) => {
        if (
          prev &&
          prev.top === next.top &&
          prev.left === next.left &&
          prev.width === next.width &&
          prev.height === next.height
        ) {
          return prev
        }
        return next
      })
    })
  }, [])

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
    void import('plyr')
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
  }, [album?.slug, currentIndex, coverSlug, updateCoverRect])

  /** Cria o Plyr uma vez; só troca source quando o vídeo muda. */
  const ensurePlayer = useCallback(
    async (youtubeId: string): Promise<Plyr | null> => {
      if (!isValidYouTubeId(youtubeId)) return null
      const host = playerHostRef.current
      if (!host) return null

      if (creatingRef.current) {
        await creatingRef.current
      }

      // Mesmo vídeo: reutiliza a instância (pause/play sem remontar).
      if (playerRef.current && loadedVideoIdRef.current === youtubeId) {
        return playerRef.current
      }

      // Vídeo diferente: só troca o source.
      if (playerRef.current) {
        const player = playerRef.current
        loadedVideoIdRef.current = youtubeId
        host.dataset.youtubeId = youtubeId

        const ready = new Promise<Plyr>((resolve) => {
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

        creatingRef.current = ready
        const result = await ready
        creatingRef.current = null
        return result
      }

      // Primeira criação.
      const createPromise = (async () => {
        const { default: PlyrCtor } = await import('plyr')
        if (!playerHostRef.current) return null

        const target = document.createElement('div')
        target.dataset.plyrProvider = 'youtube'
        target.dataset.plyrEmbedId = youtubeId
        playerHostRef.current.replaceChildren(target)

        const player = new PlyrCtor(target, PLYR_OPTIONS)
        playerRef.current = player
        loadedVideoIdRef.current = youtubeId
        playerHostRef.current.dataset.youtubeId = youtubeId

        player.on('play', () => {
          setPlayingState(true)
        })
        player.on('pause', () => {
          setPlayingState(false)
          syncProgress()
        })
        player.on('ended', () => {
          playNextRef.current()
        })
        player.on('timeupdate', () => {
          syncProgress()
        })

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
    [setPlayingState, syncProgress]
  )

  const playQueueIndex = useCallback(
    async (queueIndex: number) => {
      const next = queueRef.current[queueIndex]
      if (!next || !isValidYouTubeId(next.youtubeId)) return

      currentIndexRef.current = queueIndex
      setCurrentIndex(queueIndex)
      setProgress(0)
      setRemainingSeconds(null)

      const player = await ensurePlayer(next.youtubeId)
      if (!player) {
        setPlayingState(false)
        return
      }

      try {
        await player.play()
        setPlayingState(true)
        updateCoverRect()
      } catch {
        setPlayingState(false)
      }
    },
    [ensurePlayer, setPlayingState, updateCoverRect]
  )

  const pause = useCallback(() => {
    playerRef.current?.pause()
    setPlayingState(false)
  }, [setPlayingState])

  const toggle = useCallback(() => {
    const player = playerRef.current
    if (!player || currentIndexRef.current == null) return

    if (isPlayingRef.current) {
      player.pause()
      setPlayingState(false)
      return
    }

    void player.play()?.then(
      () => setPlayingState(true),
      () => setPlayingState(false)
    )
  }, [setPlayingState])

  const playAlbumTrack = useCallback(
    (nextAlbum: Album, trackIndex: number) => {
      const nextQueue = buildQueue(nextAlbum)
      const queueIndex = nextQueue.findIndex(
        (track) => track.index === trackIndex
      )
      if (queueIndex < 0) return

      const sameAlbum = albumRef.current?.slug === nextAlbum.slug
      if (!sameAlbum) {
        const meta = {
          slug: nextAlbum.slug,
          title: nextAlbum.title,
          artist: nextAlbum.artist,
          cover: nextAlbum.cover
        }
        albumRef.current = meta
        setAlbum(meta)
        queueRef.current = nextQueue
        setQueue(nextQueue)
      } else if (queueRef.current.length !== nextQueue.length) {
        queueRef.current = nextQueue
        setQueue(nextQueue)
      }

      const next = nextQueue[queueIndex]
      if (!next) return

      // Mesma faixa carregada: só pause / play.
      if (
        sameAlbum &&
        currentIndexRef.current === queueIndex &&
        loadedVideoIdRef.current === next.youtubeId &&
        playerRef.current
      ) {
        toggle()
        return
      }

      void playQueueIndex(queueIndex)
    },
    [playQueueIndex, toggle]
  )

  const playAlbum = useCallback(
    (nextAlbum: Album) => {
      if (
        albumRef.current?.slug === nextAlbum.slug &&
        currentIndexRef.current != null
      ) {
        toggle()
        return
      }

      const trackIndex = firstPlayableTrackIndex(nextAlbum)
      if (trackIndex < 0) return
      playAlbumTrack(nextAlbum, trackIndex)
    },
    [playAlbumTrack, toggle]
  )

  const playNext = useCallback(() => {
    const index = currentIndexRef.current
    if (index == null) return
    if (index >= queueRef.current.length - 1) {
      setPlayingState(false)
      setProgress(100)
      return
    }
    void playQueueIndex(index + 1)
  }, [playQueueIndex, setPlayingState])

  const playPrev = useCallback(() => {
    const index = currentIndexRef.current
    if (index == null) return
    if (index <= 0) {
      if (playerRef.current) playerRef.current.currentTime = 0
      setProgress(0)
      return
    }
    void playQueueIndex(index - 1)
  }, [playQueueIndex])

  useEffect(() => {
    playNextRef.current = playNext
  }, [playNext])

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
      updateCoverRect()
    },
    [updateCoverRect]
  )

  const seekToPercent = useCallback((percent: number) => {
    const player = playerRef.current
    if (!player?.duration) return
    const next = Math.min(100, Math.max(0, percent))
    player.currentTime = (next / 100) * player.duration
    setProgress(next)
  }, [])

  const isTrackActive = useCallback(
    (albumSlug: string, trackIndex: number) => {
      if (!album || currentIndex == null) return false
      return (
        album.slug === albumSlug && queue[currentIndex]?.index === trackIndex
      )
    },
    [album, currentIndex, queue]
  )

  const isAlbumActive = useCallback(
    (albumSlug: string) =>
      Boolean(album?.slug === albumSlug && currentIndex != null),
    [album?.slug, currentIndex]
  )

  const getTrackProgress = useCallback(
    (albumSlug: string, trackIndex: number) =>
      isTrackActive(albumSlug, trackIndex) ? progress : 0,
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
