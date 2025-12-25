import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import AlbumTemplate from '@/templates/Album'
import { useGetAlbumBySlug } from '@/api/GetAlbumBySlug'

type TPageAlbum = {
  album: any
}

export default function PageAlbum({ album }: TPageAlbum) {
  const { query } = useRouter()
  const slug = query.slug as string

  const { data } = useGetAlbumBySlug(slug)

  return <AlbumTemplate {...data} />
}
