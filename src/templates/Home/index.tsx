import { AlbumProps } from '@/types'
import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'

type HomeTemplateProps = {
  albums: AlbumProps[]
}

export default function HomeTemplate({ albums }: HomeTemplateProps) {
  return (
    <>
      <Head>
        <title>Bandas de 1 Álbum</title>
      </Head>
      <ListAlbums albums={albums} />
    </>
  )
}
