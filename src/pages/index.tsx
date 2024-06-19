import client from '@/graphql/client'
import {
  AlbumEntity,
  GetAlbumsQuery,
  Pagination
} from '@/graphql/generated/graphql'
import { GET_ALBUMS } from '@/graphql/queries'
import HomeTemplate from '@/templates/Home'
import { GetServerSideProps } from 'next'

type THome = {
  nodes: Array<AlbumEntity>
  pageInfo: Pagination
}

export default function Home({ nodes, pageInfo }: THome) {
  return <HomeTemplate nodes={nodes} pageInfo={pageInfo} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_ALBUMS,
    variables: {
      perPage: 48,
      page: 1
    }
  })
  const { albums } = data as GetAlbumsQuery

  return {
    props: {
      nodes: albums?.data,
      pageInfo: albums?.meta.pagination
    }
  }
}
