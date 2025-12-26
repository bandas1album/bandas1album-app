import { useRouter } from 'next/router'
import AlbumTemplate from '@/templates/Album'
import { useGetAlbumBySlug } from '@/api/GetAlbumBySlug'

export default function PageAlbum() {
  const { query } = useRouter()
  const slug = query.slug as string

  const { data } = useGetAlbumBySlug(slug)

  return <AlbumTemplate {...data} />
}
