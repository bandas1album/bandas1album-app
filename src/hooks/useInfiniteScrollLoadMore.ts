import { RefObject, useEffect } from 'react'

type UseInfiniteScrollLoadMoreOptions = {
  hasNextPage: boolean
  isFetchingNextPage: boolean
  fetchNextPage: () => void
  rootMargin?: string
}

export function useInfiniteScrollLoadMore(
  sentinelRef: RefObject<Element | null>,
  {
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    rootMargin = '200px'
  }: UseInfiniteScrollLoadMoreOptions
) {
  useEffect(() => {
    if (!sentinelRef.current) return

    const root = sentinelRef.current.closest('main')
    if (!root) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      {
        root,
        rootMargin,
        threshold: 0
      }
    )

    observer.observe(sentinelRef.current)

    return () => observer.disconnect()
  }, [sentinelRef, fetchNextPage, hasNextPage, isFetchingNextPage, rootMargin])
}
