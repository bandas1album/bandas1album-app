import { useMutation } from '@tanstack/react-query'
import { TPatchAlbumFlagsParams, TPatchAlbumFlagsResponse } from './types'

import { apiBaseUrl } from '@/lib/apiBaseUrl'

export const patchAlbumFlags = async ({
  type,
  id,
  token
}: TPatchAlbumFlagsParams) => {
  const res = await fetch(`${apiBaseUrl}/api/album/${id}/${type}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    throw new Error('Token inválido')
  }

  return res.json() as Promise<TPatchAlbumFlagsResponse>
}

export const usePatchAlbumFlags = () => {
  return useMutation<TPatchAlbumFlagsResponse, Error, TPatchAlbumFlagsParams>({
    mutationKey: ['album-flags'],
    mutationFn: patchAlbumFlags
  })
}
