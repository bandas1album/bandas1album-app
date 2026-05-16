import { useQuery } from '@tanstack/react-query'
import { TGetAlbumFlagsParams, TGetAlbumFlagsResponse } from './types'

import { apiBaseUrl } from '@/lib/apiBaseUrl'

export const getAlbumFlags = async ({
  type,
  id,
  token
}: TGetAlbumFlagsParams) => {
  const res = await fetch(`${apiBaseUrl}/api/album/${id}/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    throw new Error('Token inválido')
  }

  return res.json() as Promise<TGetAlbumFlagsResponse>
}

export const useGetAlbumFlags = ({ type, id, token }: TGetAlbumFlagsParams) => {
  return useQuery({
    queryKey: ['album-flags', type, id],
    queryFn: () =>
      getAlbumFlags({
        type,
        id,
        token
      }),
    enabled: !!token
  })
}
