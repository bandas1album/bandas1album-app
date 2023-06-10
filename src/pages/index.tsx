import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | Bandas 1 Álbum</title>
      </Head>
      <ListAlbums
        items={[
          {
            artist: '4 Cabeça',
            cover: '4-cabeca.png',
            slug: '4-cabeca',
            title: '4 Cabeça'
          },
          {
            artist: 'Action',
            cover: 'action.png',
            slug: 'action',
            title: 'Action'
          }
        ]}
      />
    </>
  )
}
