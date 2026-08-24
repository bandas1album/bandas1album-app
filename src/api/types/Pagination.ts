export type PaginationParams = {
  pageParam: number
  per_page: number
  order: string
  order_by: string
  taxonomy?: {
    category: string
    slug: string
  }
}
