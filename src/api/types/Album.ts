export type AlbumGenre = {
  id: number
  title: string
  slug: string
}

export type AlbumCountry = {
  title: string
  slug: string
}

export type AlbumLinks = {
  amazon: string
  deezer: string
  lastfm: string
  spotify: string
  youtube: string
  wikipedia: string
  download: string
}

export type AlbumTrack = {
  name: string
  duration: string
}

export type Album = {
  id?: number
  author?: string
  slug: string
  title: string
  description?: string
  content?: string
  cover: string
  artist?: string
  genres?: AlbumGenre[]
  released?: string
  country?: AlbumCountry
  label?: string
  links?: AlbumLinks
  tracklist?: AlbumTrack[]
}
