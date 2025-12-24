import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { GetAlbumsResponse } from '@/api/album/GetAlbums/types'

type THomeTemplate = {
  albums: GetAlbumsResponse['data']
  pagination: GetAlbumsResponse['meta'] | []
}

export default function HomeTemplate({ albums }: THomeTemplate) {
  return (
    <>
      <Head>
        <title>Bandas de 1 Álbum</title>
      </Head>
      <NextSeo
        title="Bandas de 1 Álbum"
        description="O projeto Bandas de 1 Álbum eterniza bandas e artistas que lançaram apenas um álbum na carreira."
        canonical="https://bandas1album.com.br/"
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
      <ListAlbums
        albums={albums}
      />
    </>
  )
}
