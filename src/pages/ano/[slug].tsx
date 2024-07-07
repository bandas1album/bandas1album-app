import client from '@/graphql/client'
import { GET_ALBUMS_BY_CATEGORY, GET_ALBUMS_BY_YEAR } from '@/graphql/queries'
import { GetServerSideProps } from 'next'
import {
  AlbumEntity,
  GetAlbumsQuery,
  Pagination
} from '@/graphql/generated/graphql'
import YearTemplate from '@/templates/Year'

type TYear = {
  nodes: Array<AlbumEntity>
  pageInfo: Pagination
  params: {
    category: string
    slug: string
  }
}

export default function PageYear({ nodes, pageInfo, params }: TYear) {
  return <YearTemplate nodes={nodes} pageInfo={pageInfo} params={params} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const payload = {
    query: GET_ALBUMS_BY_YEAR,
    variables: {
      perPage: 96,
      page: 1,
      year: `${params?.slug}-01-01`
    }
  }

  const { data } = await client.query(payload)
  const { albums } = data as GetAlbumsQuery

  return {
    props: {
      nodes: albums?.data,
      pageInfo: albums?.meta.pagination,
      params: params
    }
  }
}
