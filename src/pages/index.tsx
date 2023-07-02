import client from '@/graphql/client'
import { GET_ALBUMS } from '@/graphql/queries'
import { Album, GetAlbumsQuery } from '@/graphql/generated/graphql'
import HomeTemplate from '@/templates/Home'

export default function Home({ albums }: { albums: Album[] }) {
  return <HomeTemplate albums={albums} />
}

export const getStaticProps = async () => {
  const data = await client.request<GetAlbumsQuery>(GET_ALBUMS)

  return {
    props: {
      albums: data.albums?.nodes
    }
  }
}
