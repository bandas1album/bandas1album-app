import client from '@/graphql/client'
import { AlbumConnection, GetAlbumsQuery } from '@/graphql/generated/graphql'
import { GET_ALBUMS } from '@/graphql/queries'
import HomeTemplate from '@/templates/Home'
import { GetServerSideProps } from 'next'

export default function Home({ nodes, pageInfo, edges }: AlbumConnection) {
  return <HomeTemplate nodes={nodes} pageInfo={pageInfo} edges={edges} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_ALBUMS,
    variables: {
      first: 48,
      after: null
    }
  })
  const { albums } = data as GetAlbumsQuery

  return {
    props: {
      nodes: albums?.nodes,
      pageInfo: albums?.pageInfo
    }
  }
}
