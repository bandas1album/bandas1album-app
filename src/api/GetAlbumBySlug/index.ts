import { Album } from '@/api/types/Album'
import { useQuery } from '@tanstack/react-query'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const getAlbumBySlug = async (slug: string) => {
  const res = await fetch(`${API_URL}/api/album/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch album')
  }

  return res.json() as Promise<Album>
}

export const useGetAlbumBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['album-by-slug', slug],
    queryFn: () => getAlbumBySlug(slug),
    enabled: true
  })
}
