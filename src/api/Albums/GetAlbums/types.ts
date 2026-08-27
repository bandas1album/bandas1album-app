import { Album } from '@/api/types/Album'

/** Taxonomy context returned by `/api/albums` when filtering by genre/country/year. */
export type ListingPagePlaylists = {
  youtube?: string | null
  spotify?: string | null
}

export type ListingPageContext = {
  type: string
  page: string
  title: string
  slug: string
  /** Generated meta description — SEO + intro on category pages. */
  description?: string
  /** Playlist links for genre/country taxonomy pages. */
  playlists?: ListingPagePlaylists
}

export type GetAlbumsResponse = {
  data?: Album[] | undefined
  meta: {
    context?: ListingPageContext
    /** WP editor content — rendered on the home page. */
    content?: string
    /** Optional home SEO description (frontend has a fallback). */
    description?: string
    pagination: {
      page: number
      per_page: number
      total_pages: number
      total_items: number
    }
  }
}
