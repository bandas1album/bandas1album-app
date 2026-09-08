import type { InfiniteData } from '@tanstack/react-query'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import type { Album, AlbumCredit } from '@/api/types/Album'
import { decodeBrokenUnicode } from '@/utils/decodeUnicode'
import { absoluteUrl, SITE_URL } from './site'

export { safeJsonLdStringify } from './jsonLd'

type BreadcrumbItem = {
  name: string
  url?: string
}

const CREDIT_ROLE_LABELS: Record<string, string> = {
  musician: 'Músico',
  producer: 'Produtor',
  engineer: 'Engenheiro',
  mixer: 'Mixagem',
  mastering: 'Masterização',
  composer: 'Compositor',
  other: 'Outro'
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

function oneOrMany<T>(items: T[]): T | T[] | undefined {
  if (!items.length) return undefined
  return items.length === 1 ? items[0] : items
}

/** Schema.org Person from an album credit. */
export function buildPersonJsonLdFromCredit(credit: AlbumCredit) {
  const roleLabel = CREDIT_ROLE_LABELS[credit.role] || credit.role
  const detail = credit.detail?.trim()
  const jobTitle = detail ? `${roleLabel} — ${detail}` : roleLabel

  return {
    '@type': 'Person' as const,
    name: credit.name,
    url: absoluteUrl(`/person/${credit.slug}`),
    ...(credit.image ? { image: absoluteUrl(credit.image) } : {}),
    jobTitle
  }
}

/**
 * MusicAlbum JSON-LD, including credited people mapped to schema roles.
 */
export function buildMusicAlbumJsonLd(album: Album) {
  const credits = album.credits ?? []
  const producers = credits
    .filter((c) => c.role === 'producer')
    .map(buildPersonJsonLdFromCredit)
  const composers = credits
    .filter((c) => c.role === 'composer')
    .map(buildPersonJsonLdFromCredit)
  const performers = credits
    .filter((c) => c.role === 'musician')
    .map(buildPersonJsonLdFromCredit)
  const contributors = credits
    .filter(
      (c) => !['producer', 'composer', 'musician'].includes(String(c.role))
    )
    .map(buildPersonJsonLdFromCredit)

  const producer = oneOrMany(producers)
  const composer = oneOrMany(composers)
  const performer = oneOrMany(performers)
  const contributor = oneOrMany(contributors)

  return {
    '@context': 'https://schema.org',
    '@type': 'MusicAlbum',
    name: album.title || '',
    url: `${SITE_URL}/album/${album.slug}`,
    image: album.cover ? absoluteUrl(album.cover) : absoluteUrl('/cover.png'),
    byArtist: {
      '@type': 'MusicGroup',
      name: album.artist || ''
    },
    ...(album.genres?.[0]?.title ? { genre: album.genres[0].title } : {}),
    ...(album.tracklist?.length ? { numTracks: album.tracklist.length } : {}),
    ...(album.tracklist?.length
      ? {
          track: album.tracklist.map((track) => ({
            '@type': 'MusicRecording' as const,
            name: decodeBrokenUnicode(track.name) || '',
            ...(track.duration ? { duration: track.duration } : {})
          }))
        }
      : {}),
    ...(producer ? { producer } : {}),
    ...(composer ? { composer } : {}),
    ...(performer ? { performer } : {}),
    ...(contributor ? { contributor } : {})
  }
}

/** Person / ProfilePage JSON-LD for `/person/[slug]` listings. */
export function buildPersonPageJsonLd(
  context: NonNullable<GetAlbumsResponse['meta']['context']>
) {
  if (context.type !== 'person') return null

  const person = {
    '@type': 'Person' as const,
    name: context.title,
    url: absoluteUrl(`/person/${context.slug}`),
    ...(context.image ? { image: absoluteUrl(context.image) } : {}),
    ...(context.description ? { description: context.description } : {})
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(`/person/${context.slug}`),
    name: context.title,
    mainEntity: person
  }
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
  const items: BreadcrumbItem[] = [{ name: 'Bandas 1 Álbum', url: '/' }]

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
  const items: BreadcrumbItem[] = [{ name: 'Bandas 1 Álbum', url: '/' }]

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
