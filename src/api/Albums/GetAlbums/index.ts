import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { GetAlbumsResponse } from './types'
import { PaginationParams } from '../../types/Pagination'

import { apiBaseUrl } from '@/lib/apiBaseUrl'

export const HOME_ALBUMS_PARAMS: PaginationParams = {
  pageParam: 1,
  per_page: 30,
  order_by: 'date',
  order: 'DESC'
}

export const toAlbumsInfiniteData = (
  page: GetAlbumsResponse
): InfiniteData<GetAlbumsResponse, number> => ({
  pages: [page],
  pageParams: [1]
})

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
    order: String(order)
  })
  if (taxonomy?.category && taxonomy?.slug) {
    params.set('category', taxonomy.category)
    params.set('slug', taxonomy.slug)
  }
  const res = await fetch(`${apiBaseUrl}/api/albums?${params.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch albums')
  }

  return res.json() as Promise<GetAlbumsResponse>
}

export const albumsListQueryKey = (params: PaginationParams) =>
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

type UseGetAlbumsOptions = {
  initialData?: InfiniteData<GetAlbumsResponse, number>
}

export const useGetAlbums = (
  params: PaginationParams,
  options?: UseGetAlbumsOptions
) => {
  return useInfiniteQuery({
    queryKey: albumsListQueryKey(params),
    queryFn: ({ pageParam = 1 }) => getAlbums({ ...params, pageParam }),
    getNextPageParam: (lastPage) => {
      const pagination = lastPage.meta?.pagination
      if (!pagination) return undefined

      const { page, total_pages } = pagination

      if (page < total_pages) {
        return page + 1
      }

      return undefined
    },
    initialPageParam: 1,
    initialData: options?.initialData,
    initialDataUpdatedAt: options?.initialData ? Date.now() : undefined,
    staleTime: options?.initialData ? 60 * 60 * 1000 : 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })
}
