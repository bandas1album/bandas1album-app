import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { GetMenuParams, GetMenuResponse } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const getMenu = async ({ pageParam = 1, type }: GetMenuParams) => {
  const params = new URLSearchParams({
    type,
    page: String(pageParam)
  })
  const res = await fetch(`${API_URL}/api/menu?${params.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch albums')
  }

  return res.json() as Promise<GetMenuResponse>
}

export const useGetMenu = (type: string) => {
  return useInfiniteQuery({
    queryKey: ['menu', type],
    queryFn: ({ pageParam = 1 }) => getMenu({ pageParam, type }),

    getNextPageParam: (lastPage) => {
      const { page, total_pages } = lastPage.meta.pagination

      if (page < total_pages) {
        return page + 1
      }

      return undefined
    },

    initialPageParam: 1
  })
}
