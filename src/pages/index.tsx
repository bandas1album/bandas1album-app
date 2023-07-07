import client from '@/graphql/client'
import { AlbumConnection, GetAlbumsQuery } from '@/graphql/generated/graphql'
import { GET_ALBUMS } from '@/graphql/queries'
import HomeTemplate from '@/templates/Home'
import { GetStaticProps } from 'next'

export default function Home(albums: AlbumConnection) {
  return (
    <HomeTemplate
      nodes={albums.nodes}
      pageInfo={albums.pageInfo}
      edges={albums.edges}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { albums } = await client.request<GetAlbumsQuery>(GET_ALBUMS, {
    first: 96,
    after: null
  })

  return {
    props: {
      albums
    }
  }
}
