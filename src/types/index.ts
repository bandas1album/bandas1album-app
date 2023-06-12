export type AlbumEntityResponseCollection = {
  albums: AlbumProps[]
}

export type AlbumProps = {
  id: string
  title: string
  content?: string
  artist: string
  released?: Date
  label?: string
  cover: {
    url: string
  }
  social?: JSON
  tracklist?: JSON
  genres?: {
    albums: AlbumProps[]
    title: string
    id: string
    slug: string
    content: string
  }
  country?: {
    albums: AlbumProps[]
    title: string
    id: string
    slug: string
    content: string
  }
  slug: string
}
