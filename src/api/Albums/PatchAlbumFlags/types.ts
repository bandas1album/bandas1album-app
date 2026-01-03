export type TPatchAlbumFlagsParams = {
  type: 'favorited' | 'listened'
  id: number
  token: string | null
}

export type TPatchAlbumFlagsResponse = {
  status: 'added' | 'removed'
  count: number
}
