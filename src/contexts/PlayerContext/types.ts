import type { Album, AlbumTrack } from '@/api/types/Album'

export type PlayerQueueTrack = {
  youtubeId: string
  name: string
  duration: string
  index: number
}

export type PlayerAlbumMeta = {
  slug: string
  title: string
  artist?: string
  cover: string
}

export type PlayerState = {
  album: PlayerAlbumMeta | null
  queue: PlayerQueueTrack[]
  currentIndex: number | null
  isPlaying: boolean
  progress: number
  playAlbumTrack: (album: Album, trackIndex: number) => void
  toggle: () => void
  pause: () => void
  playNext: () => void
  playPrev: () => void
  seekToPercent: (percent: number) => void
  isTrackActive: (albumSlug: string, trackIndex: number) => boolean
  getTrackProgress: (albumSlug: string, trackIndex: number) => number
}

export type PlayableTrack = AlbumTrack & { youtube_id: string }

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        config: {
          height?: string | number
          width?: string | number
          videoId?: string
          playerVars?: Record<string, string | number>
          events?: {
            onReady?: (event: { target: YTPlayer }) => void
            onStateChange?: (event: { data: number; target: YTPlayer }) => void
          }
        }
      ) => YTPlayer
      PlayerState: {
        ENDED: number
        PLAYING: number
        PAUSED: number
        BUFFERING: number
        CUED: number
      }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

export type YTPlayer = {
  destroy: () => void
  loadVideoById: (videoId: string) => void
  playVideo: () => void
  pauseVideo: () => void
  getCurrentTime: () => number
  getDuration: () => number
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
  getPlayerState: () => number
}
