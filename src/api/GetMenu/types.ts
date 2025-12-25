export type GetMenuResponse = {
  data?: {
    title: string
    slug: string
    count?: number
    cover?: string
    artist?: string
  }[]
  meta: {
    pagination: {
      page: number
      per_page: number
      total_pages: number
      total_items: number
    }
  }
}

export type GetMenuParams = {
  pageParam?: number
  type: string
}
