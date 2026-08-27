import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'

const HOME_SEO_FALLBACK =
  'O projeto Bandas de 1 Álbum eterniza bandas e artistas que lançaram apenas um álbum na carreira.'

export function getHomeContent(
  meta?: GetAlbumsResponse['meta']
): string | undefined {
  const content = meta?.content?.trim()
  return content || undefined
}

export function getHomeSeoDescription(
  meta?: GetAlbumsResponse['meta']
): string {
  return meta?.description?.trim() || HOME_SEO_FALLBACK
}

export function getCategoryIntro(
  meta?: GetAlbumsResponse['meta']
): string | undefined {
  const description = meta?.context?.description?.trim()
  return description || undefined
}

export function getCategorySeoDescription(
  meta?: GetAlbumsResponse['meta']
): string | undefined {
  return getCategoryIntro(meta)
}
