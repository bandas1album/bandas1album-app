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
  /** Segundos restantes da faixa ativa. */
  remainingSeconds: number | null
  /** Host no lugar da capa (album page). null = desmonta o player. */
  registerPlayerHost: (element: HTMLElement | null) => void
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
