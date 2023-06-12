import { AlbumEntityResponseCollection, AlbumProps } from '@/types'
import ListAlbums from '@/components/ListAlbums'
import client from '@/graphql/client'
import { GET_ALBUMS } from '@/graphql/queries'
import Head from 'next/head'

export default function Home({ albums }: { albums: AlbumProps[] }) {
  return (
    <>
      <Head>
        <title>Bandas de 1 Álbum</title>
      </Head>
      <ListAlbums albums={albums} />
    </>
  )
}

export const getStaticProps = async () => {
  const { albums }: { albums: AlbumEntityResponseCollection } =
    await client.request(GET_ALBUMS)

  return {
    props: {
      albums: albums
    }
  }
}
