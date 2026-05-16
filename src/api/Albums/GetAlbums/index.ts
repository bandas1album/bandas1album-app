import { useInfiniteQuery } from '@tanstack/react-query'
import { GetAlbumsResponse } from './types'
import { PaginationParams } from '../../types/Pagination'

import { apiBaseUrl } from '@/lib/apiBaseUrl'

const getAlbums = async ({
  pageParam,
  per_page,
  order,
  order_by,
  taxonomy
}: PaginationParams) => {
  const params = new URLSearchParams({
    page: String(pageParam),
    per_page: String(per_page),
    order_by: String(order_by),
    order: String(order),
    category: String(taxonomy?.category),
    slug: String(taxonomy?.slug)
  })
  const res = await fetch(`${apiBaseUrl}/api/albums?${params.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch albums')
  }

  return res.json() as Promise<GetAlbumsResponse>
}

const albumsListQueryKey = (params: PaginationParams) =>
  [
    'albums',
    {
      per_page: params.per_page,
      order: params.order,
      order_by: params.order_by,
      taxonomy: params.taxonomy
        ? {
            category: params.taxonomy.category,
            slug: params.taxonomy.slug
          }
        : null
    }
  ] as const

export const useGetAlbums = (params: PaginationParams) => {
  return useInfiniteQuery({
    queryKey: albumsListQueryKey(params),
    queryFn: ({ pageParam = 1 }) => getAlbums({ ...params, pageParam }),
    getNextPageParam: (lastPage) => {
      const { page, total_pages } = lastPage.meta.pagination

      if (page < total_pages) {
        return page + 1
      }

      return undefined
    },

    initialPageParam: 1,
    enabled: true
  })
}
