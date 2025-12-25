import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { GetAlbumsResponse } from './types'
import { PaginationParams } from '../types/Pagination'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const getAlbums = async ({
  page,
  per_page,
  order,
  order_by,
  taxonomy
}: PaginationParams) => {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(per_page),
    order_by: String(order_by),
    order: String(order),
    category: String(taxonomy?.category),
    slug: String(taxonomy?.slug)
  })
  const res = await fetch(`${API_URL}/api/albums?${params.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch albums')
  }

  return res.json() as Promise<GetAlbumsResponse>
}

export const useGetAlbums = (params: PaginationParams, enabled?: boolean) => {
  return useQuery({
    queryKey: ['albums', params.taxonomy?.slug],
    queryFn: () => getAlbums(params),
    enabled: enabled
  })
}
