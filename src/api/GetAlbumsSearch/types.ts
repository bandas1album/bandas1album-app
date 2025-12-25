export type GetAlbumsSearchResponse = {
  data?: {
    albums?: {
      title: string
      artist: string
      slug: string
    }[]
    genres?: {
      title: string
      slug: string
    }[]
    countries?: {
      title: string
      slug: string
    }[]
  }
}
