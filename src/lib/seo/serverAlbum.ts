import type { Album } from '@/api/types/Album'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import type { GetMenuResponse } from '@/api/Menu/GetMenu/types'
import { apiBaseUrl } from '@/lib/apiBaseUrl'

/** Server-only: 404 → null, other errors → throw */
export async function fetchAlbumBySlug(slug: string): Promise<Album | null> {
  const res = await fetch(`${apiBaseUrl}/api/album/${encodeURIComponent(slug)}`)

  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Album fetch failed: ${res.status}`)

  const album = (await res.json()) as Album
  return { ...album, slug }
}

async function fetchAlbumsPage(page: number): Promise<GetAlbumsResponse> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: '100',
    order_by: 'date',
    order: 'DESC'
  })
  const res = await fetch(`${apiBaseUrl}/api/albums?${params}`)
  if (!res.ok) throw new Error(`Albums list failed: ${res.status}`)
  return res.json() as Promise<GetAlbumsResponse>
}

async function fetchMenuPage(
  type: string,
  page: number
): Promise<GetMenuResponse> {
  const params = new URLSearchParams({
    type,
    page: String(page)
  })
  const res = await fetch(`${apiBaseUrl}/api/menu?${params}`)
  if (!res.ok) throw new Error(`Menu fetch failed: ${res.status}`)
  return res.json() as Promise<GetMenuResponse>
}

/** First page of the home album listing (matches client list params). */
export async function fetchAlbumsFirstPage(): Promise<GetAlbumsResponse> {
  const params = new URLSearchParams({
    page: '1',
    per_page: '99',
    order_by: 'date',
    order: 'DESC'
  })
  const res = await fetch(`${apiBaseUrl}/api/albums?${params}`)
  if (!res.ok) throw new Error(`Albums list failed: ${res.status}`)
  return res.json() as Promise<GetAlbumsResponse>
}

/** First page of taxonomy listing (genre / country / year). */
export async function fetchCategoryFirstPage(
  category: string,
  slug: string
): Promise<GetAlbumsResponse | null> {
  const params = new URLSearchParams({
    page: '1',
    per_page: '99',
    order_by: 'date',
    order: 'DESC',
    category,
    slug
  })
  const res = await fetch(`${apiBaseUrl}/api/albums?${params}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Category fetch failed: ${res.status}`)
  return res.json() as Promise<GetAlbumsResponse>
}

export type SitemapUrl = {
  url: string
  changefreq?: 'daily' | 'weekly' | 'monthly'
  priority?: number
  lastmod?: string
}

async function fetchAllAlbumPages(): Promise<GetAlbumsResponse[]> {
  const first = await fetchAlbumsPage(1)
  const totalPages = first.meta?.pagination?.total_pages ?? 1
  if (totalPages <= 1) return [first]

  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) => fetchAlbumsPage(i + 2))
  )
  return [first, ...rest]
}

async function fetchAllMenuPages(type: string): Promise<GetMenuResponse[]> {
  const first = await fetchMenuPage(type, 1)
  const totalPages = first.meta?.pagination?.total_pages ?? 1
  if (totalPages <= 1) return [first]

  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) => fetchMenuPage(type, i + 2))
  )
  return [first, ...rest]
}

function albumPagesToSitemapUrls(pages: GetAlbumsResponse[]): SitemapUrl[] {
  const out: SitemapUrl[] = []
  for (const body of pages) {
    for (const album of body.data ?? []) {
      if (album?.slug) {
        out.push({
          url: `/album/${album.slug}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: album.released
        })
      }
    }
  }
  return out
}

function menuPagesToSitemapUrls(
  pages: GetMenuResponse[],
  urlSegment: string
): SitemapUrl[] {
  const out: SitemapUrl[] = []
  for (const body of pages) {
    for (const item of body.data ?? []) {
      if (item?.slug) {
        out.push({
          url: `/${urlSegment}/${item.slug}`,
          changefreq: 'weekly',
          priority: 0.6
        })
      }
    }
  }
  return out
}

/** Collect album slugs for ISR paths. */
export async function fetchAllAlbumSlugs(): Promise<string[]> {
  const pages = await fetchAllAlbumPages()
  const slugs: string[] = []
  for (const body of pages) {
    for (const album of body.data ?? []) {
      if (album?.slug) slugs.push(album.slug)
    }
  }
  return slugs
}

/** Collect category ISR paths (genre / country / year). */
export async function fetchAllCategoryPaths(): Promise<
  Array<{ category: string; slug: string }>
> {
  const [genrePages, countryPages, yearPages] = await Promise.all([
    fetchAllMenuPages('genre'),
    fetchAllMenuPages('country'),
    fetchAllMenuPages('released')
  ])

  const paths: Array<{ category: string; slug: string }> = []
  for (const body of genrePages) {
    for (const item of body.data ?? []) {
      if (item?.slug) paths.push({ category: 'genre', slug: item.slug })
    }
  }
  for (const body of countryPages) {
    for (const item of body.data ?? []) {
      if (item?.slug) paths.push({ category: 'country', slug: item.slug })
    }
  }
  for (const body of yearPages) {
    for (const item of body.data ?? []) {
      if (item?.slug) paths.push({ category: 'year', slug: item.slug })
    }
  }
  return paths
}

/** Collect indexable paths for sitemap (paths only, leading slash). */
export async function collectSitemapPaths(): Promise<SitemapUrl[]> {
  const [albumPages, genrePages, countryPages, yearPages] = await Promise.all([
    fetchAllAlbumPages(),
    fetchAllMenuPages('genre'),
    fetchAllMenuPages('country'),
    fetchAllMenuPages('released')
  ])

  return [
    { url: '/', changefreq: 'daily', priority: 1 },
    ...albumPagesToSitemapUrls(albumPages),
    ...menuPagesToSitemapUrls(genrePages, 'genre'),
    ...menuPagesToSitemapUrls(countryPages, 'country'),
    ...menuPagesToSitemapUrls(yearPages, 'year')
  ]
}
