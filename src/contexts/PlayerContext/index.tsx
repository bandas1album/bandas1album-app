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
import * as S from './styles'

const PLAYER_ELEMENT_ID = 'bandas1album-yt-player'

const PlayerContext = createContext<PlayerState | undefined>(undefined)

function buildQueue(album: Album): PlayerQueueTrack[] {
  return (album.tracklist ?? [])
    .map((track, index) => ({
      youtubeId: track.youtube_id?.trim() || '',
      name: track.name,
      duration: track.duration,
      index
    }))
    .filter((track) => track.youtubeId !== '')
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

  const playerRef = useRef<YTPlayer | null>(null)
  const queueRef = useRef<PlayerQueueTrack[]>([])
  const currentIndexRef = useRef<number | null>(null)
  const progressTimerRef = useRef<number | null>(null)
  const pendingPlayRef = useRef<{ album: Album; trackIndex: number } | null>(
    null
  )
  const isReadyRef = useRef(false)
  const playAlbumTrackRef = useRef<
    ((album: Album, trackIndex: number) => void) | null
  >(null)

  const playNextRef = useRef<() => void>(() => undefined)
  const startProgressTimerRef = useRef<() => void>(() => undefined)
  const clearProgressTimerRef = useRef<() => void>(() => undefined)

  useEffect(() => {
    queueRef.current = queue
  }, [queue])

  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

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
      setProgress(Math.min(100, Math.max(0, (current / duration) * 100)))
    }, 250)
  }, [clearProgressTimer])

  const playQueueIndex = useCallback(
    (queueIndex: number) => {
      const next = queueRef.current[queueIndex]
      const player = playerRef.current
      if (!next || !player) return

      setCurrentIndex(queueIndex)
      setProgress(0)
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

  useEffect(() => {
    let cancelled = false

    loadYouTubeApi().then(() => {
      if (cancelled || !window.YT?.Player || playerRef.current) return

      playerRef.current = new window.YT.Player(PLAYER_ELEMENT_ID, {
        height: '120',
        width: '214',
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1
        },
        events: {
          onReady: () => {
            if (cancelled) return
            isReadyRef.current = true
            const pending = pendingPlayRef.current
            if (pending) {
              pendingPlayRef.current = null
              window.setTimeout(() => {
                playAlbumTrackRef.current?.(pending.album, pending.trackIndex)
              }, 0)
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

    return () => {
      cancelled = true
      clearProgressTimerRef.current()
      playerRef.current?.destroy()
      playerRef.current = null
      isReadyRef.current = false
    }
  }, [])

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

  const getTrackProgress = useCallback(
    (albumSlug: string, trackIndex: number) => {
      if (!isTrackActive(albumSlug, trackIndex)) return 0
      return progress
    },
    [isTrackActive, progress]
  )

  const value = useMemo<PlayerState>(
    () => ({
      album,
      queue,
      currentIndex,
      isPlaying,
      progress,
      playAlbumTrack,
      toggle,
      pause,
      playNext,
      playPrev,
      seekToPercent,
      isTrackActive,
      getTrackProgress
    }),
    [
      album,
      queue,
      currentIndex,
      isPlaying,
      progress,
      playAlbumTrack,
      toggle,
      pause,
      playNext,
      playPrev,
      seekToPercent,
      isTrackActive,
      getTrackProgress
    ]
  )

  const currentTrack = currentIndex != null ? queue[currentIndex] ?? null : null
  const hasSession = Boolean(album && currentTrack)

  return (
    <PlayerContext.Provider value={value}>
      {children}
      <S.PlayerHost $visible={hasSession} aria-hidden={!hasSession}>
        <div id={PLAYER_ELEMENT_ID} />
      </S.PlayerHost>
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
