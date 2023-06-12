import { AlbumProps } from '@/types'
import client from '@/graphql/client'
import { GET_ALBUMS } from '@/graphql/queries'
import { GetAlbumsQuery } from '@/graphql/generated/graphql'
import HomeTemplate from '@/templates/Home'

export default function Home({ albums }: { albums: AlbumProps[] }) {
  return <HomeTemplate albums={albums} />
}

export const getStaticProps = async () => {
  const { albums } = await client.request<GetAlbumsQuery>(GET_ALBUMS)

  return {
    props: {
      albums
    }
  }
}
