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
  remainingSeconds: number | null
  /** true quando o vídeo está no PiP (fora da página do álbum) */
  isPipMode: boolean
  /** Host da capa do álbum. null = sai da página (vai para PiP se estiver tocando). */
  registerPlayerHost: (element: HTMLElement | null, albumSlug?: string) => void
  playAlbum: (album: Album) => void
  playAlbumTrack: (album: Album, trackIndex: number) => void
  toggle: () => void
  pause: () => void
  playNext: () => void
  playPrev: () => void
  seekToPercent: (percent: number) => void
  isTrackActive: (albumSlug: string, trackIndex: number) => boolean
  isAlbumActive: (albumSlug: string) => boolean
  getTrackProgress: (albumSlug: string, trackIndex: number) => number
  getTrackRemainingLabel: (
    albumSlug: string,
    trackIndex: number
  ) => string | null
  firstPlayableTrackIndex: (album: Album) => number
}

export type PlayableTrack = AlbumTrack & { youtube_id: string }
