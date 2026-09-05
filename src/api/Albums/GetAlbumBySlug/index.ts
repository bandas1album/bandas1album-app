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

  const album = (await res.json()) as Album
  return { ...album, slug }
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
    initialDataUpdatedAt: initialMatches ? Date.now() : undefined,
    // ISR + save no WP revalidam a página; no client, refetch periódico evita
    // ficar preso em dados do getStaticProps com staleTime infinito.
    staleTime: 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false
  })
}
