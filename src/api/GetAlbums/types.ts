import { Album } from '@/api/types/Album'

export type GetAlbumsResponse = {
  data?: Album[] | undefined
  meta?: {
    context: {
      type: string
      page: string
      title: string
      slug: string
    }
    pagination: {
      page: number
      per_page: number
      total_pages: number
      total_items: number
    }
  }
}
