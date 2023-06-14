import { AlbumProps } from '@/types'
import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

type HomeTemplateProps = {
  albums: AlbumProps[]
}

export default function HomeTemplate({ albums }: HomeTemplateProps) {
  return (
    <>
      <Head>
        <title>Bandas de 1 Álbum</title>
      </Head>
      <NextSeo
        title="Bandas de 1 Álbum"
        description="Eternizando bandas e artistas que lançaram apenas um álbum."
        openGraph={{
          url: 'https://bandas1album.com.br/',
          images: [
            {
              url: '/cover.png',
              width: 1280,
              height: 720,
              alt: 'Bandas de 1 Álbum'
            }
          ]
        }}
      />
      <ListAlbums albums={albums} />
    </>
  )
}
