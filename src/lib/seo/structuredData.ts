import type { InfiniteData } from '@tanstack/react-query'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import type { Album } from '@/api/types/Album'
import { absoluteUrl } from './site'

type BreadcrumbItem = {
  name: string
  url?: string
}

export function flattenAlbumPages(
  data: InfiniteData<GetAlbumsResponse, number> | GetAlbumsResponse | undefined
): Album[] {
  if (!data) return []
  if ('pages' in data) {
    return data.pages.flatMap((page) => page.data ?? [])
  }
  return data.data ?? []
}

export function albumListItemName(album: {
  artist?: string
  title?: string
}): string {
  if (album.title === album.artist) return album.title || ''
  return `${album.artist || ''} - ${album.title || ''}`.trim()
}

export function buildBreadcrumbListJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: absoluteUrl(item.url) } : {})
    }))
  }
}

export function buildAlbumBreadcrumbItems(
  album: Album,
  pageTitle: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: 'Bandas de 1 Álbum', url: '/' }]

  const primaryGenre = album.genres?.[0]
  if (primaryGenre?.slug) {
    items.push({
      name: primaryGenre.title,
      url: `/genre/${primaryGenre.slug}`
    })
  }

  items.push({
    name: pageTitle,
    url: `/album/${album.slug}`
  })

  return items
}

export function buildCategoryBreadcrumbItems(
  meta: GetAlbumsResponse['meta'],
  path: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: 'Bandas de 1 Álbum', url: '/' }]

  if (meta?.context?.page) {
    items.push({ name: meta.context.page })
  }

  if (meta?.context?.title) {
    items.push({ name: meta.context.title, url: path })
  }

  return items
}

export function buildAlbumItemListJsonLd(albums: Album[], listName?: string) {
  const itemListElement = albums
    .filter((album) => album.slug)
    .map((album, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      url: absoluteUrl(`/album/${album.slug}`),
      name: albumListItemName(album)
    }))

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(listName ? { name: listName } : {}),
    numberOfItems: itemListElement.length,
    itemListElement
  }
}
