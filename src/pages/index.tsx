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
  sort: string
}

export default function Home({ nodes, pageInfo, sort }: THome) {
  return <HomeTemplate nodes={nodes} pageInfo={pageInfo} sort={sort} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const sort = ['title', 'released', 'artist', 'id', 'createdAt', 'updatedAt']
  const sortSelected = sort[Math.floor(Math.random() * sort.length)]
  const { data } = await client.query({
    query: GET_ALBUMS,
    variables: {
      perPage: 96,
      page: 1,
      sort: sortSelected
    }
  })
  const { albums } = data as GetAlbumsQuery

  return {
    props: {
      nodes: albums?.data,
      pageInfo: albums?.meta.pagination,
      sort: sortSelected
    }
  }
}
