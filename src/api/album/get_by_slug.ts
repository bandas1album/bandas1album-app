import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export type AlbumResponse = {
  title: string
  slug: string
  cover: string
}

export const getAlbumBySlug = async (slug: string) => {
  const res = await fetch(`${API_URL}/api/album/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch album');
  }

  return res.json() as Promise<AlbumResponse>;
};

export const useGetAlbumBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['albums'],
    queryFn: () => getAlbumBySlug(slug),
    enabled: true,
  });
};