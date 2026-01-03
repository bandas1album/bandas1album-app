import { useQuery } from '@tanstack/react-query'
import { GetAlbumsSearchResponse } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const getAlbumsSearch = async (q: string) => {
  const params = new URLSearchParams({
    q: String(q)
  })
  const res = await fetch(`${API_URL}/api/albums/search?${params.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch albums')
  }

  return res.json() as Promise<GetAlbumsSearchResponse>
}

export const useGetAlbumsSearch = (q: string) => {
  return useQuery({
    queryKey: ['albums-search'],
    queryFn: () => getAlbumsSearch(q),
    enabled: false
  })
}
