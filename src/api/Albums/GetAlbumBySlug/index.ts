import { Album } from '@/api/types/Album'
import { useQuery } from '@tanstack/react-query'

import { apiBaseUrl } from '@/lib/apiBaseUrl'

export const getAlbumBySlug = async (slug: string) => {
  const res = await fetch(`${apiBaseUrl}/api/album/${slug}`)

  if (res.status === 404) {
    const err = new Error('Album not found') as Error & { status: number }
    err.status = 404
    throw err
  }

  if (!res.ok) {
    throw new Error('Failed to fetch album')
  }

  return res.json() as Promise<Album>
}

export const useGetAlbumBySlug = (
  slug: string,
  initialFromServer?: Album | null
) => {
  const initialMatches =
    initialFromServer != null && initialFromServer.slug === slug

  return useQuery({
    queryKey: ['album-by-slug', slug],
    queryFn: () => getAlbumBySlug(slug),
    enabled: Boolean(slug),
    initialData: initialMatches ? initialFromServer : undefined,
    initialDataUpdatedAt: initialMatches ? Date.now() : undefined
  })
}
