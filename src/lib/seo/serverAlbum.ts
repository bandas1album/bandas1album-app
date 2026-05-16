import type { Album } from '@/api/types/Album'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import type { GetMenuResponse } from '@/api/Menu/GetMenu/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

/** Server-only: 404 → null, other errors → throw */
export async function fetchAlbumBySlug(slug: string): Promise<Album | null> {
  const res = await fetch(`${API_URL}/api/album/${encodeURIComponent(slug)}`)

  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Album fetch failed: ${res.status}`)

  return res.json() as Promise<Album>
}

async function fetchAlbumsPage(page: number): Promise<GetAlbumsResponse> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: '100',
    order_by: 'date',
    order: 'DESC',
    category: 'undefined',
    slug: 'undefined'
  })
  const res = await fetch(`${API_URL}/api/albums?${params}`)
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
  const res = await fetch(`${API_URL}/api/menu?${params}`)
  if (!res.ok) throw new Error(`Menu fetch failed: ${res.status}`)
  return res.json() as Promise<GetMenuResponse>
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
  const res = await fetch(`${API_URL}/api/albums?${params}`)
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

/** Collect indexable paths for sitemap (paths only, leading slash). */
export async function collectSitemapPaths(): Promise<SitemapUrl[]> {
  const out: SitemapUrl[] = [{ url: '/', changefreq: 'daily', priority: 1 }]

  let page = 1
  let totalPages = 1
  while (page <= totalPages) {
    const body = await fetchAlbumsPage(page)
    totalPages = body.meta?.pagination?.total_pages ?? 1
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
    page += 1
  }

  async function addMenuPaths(
    menuType: string,
    urlSegment: string
  ): Promise<void> {
    let p = 1
    let total = 1
    while (p <= total) {
      const body = await fetchMenuPage(menuType, p)
      total = body.meta?.pagination?.total_pages ?? 1
      for (const item of body.data ?? []) {
        if (item?.slug) {
          out.push({
            url: `/${urlSegment}/${item.slug}`,
            changefreq: 'weekly',
            priority: 0.6
          })
        }
      }
      p += 1
    }
  }

  await Promise.all([
    addMenuPaths('genre', 'genre'),
    addMenuPaths('country', 'country'),
    addMenuPaths('released', 'year')
  ])

  return out
}
