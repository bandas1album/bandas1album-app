export type PaginationParams = {
  page: number
  per_page: number
  order: 'ASC' | 'DESC'
  order_by: 'none' | 'ID' | 'author' | 'title' | 'name' | 
  'type' | 'date' | 'modified' | 'parent' | 'rand' | 'comment_count' | 'relevance'
  taxonomy?: {
    category: string
    slug: string
  } 
}