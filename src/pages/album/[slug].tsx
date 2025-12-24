import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import AlbumTemplate from '@/templates/Album'
import { getAlbumBySlug, useGetAlbumBySlug } from '@/api/album/get_by_slug'

type TPageAlbum = {
  album: any
}

export default function PageAlbum({ album }: TPageAlbum) {
  const {query} = useRouter()
  const slug = query.slug as string

  const {data} = useGetAlbumBySlug(slug)

  return <AlbumTemplate {...data} />
}
