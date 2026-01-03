export type TGetAlbumFlagsParams = {
  type: 'favorited' | 'listened'
  id: number
  token: string | null
}

export type TGetAlbumFlagsResponse = {
  active: boolean
}
