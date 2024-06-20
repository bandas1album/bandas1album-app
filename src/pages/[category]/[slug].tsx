import client from '@/graphql/client'
import { GET_ALBUMS_BY_CATEGORY } from '@/graphql/queries'
import { GetServerSideProps } from 'next'
import {
  AlbumEntity,
  GetAlbumsQuery,
  Pagination
} from '@/graphql/generated/graphql'
import CategoryTemplate from '@/templates/Category'

type TGenre = {
  nodes: Array<AlbumEntity>
  pageInfo: Pagination
  params: {
    category: string
    slug: string
  }
}

export default function PageGenre({ nodes, pageInfo, params }: TGenre) {
  return <CategoryTemplate nodes={nodes} pageInfo={pageInfo} params={params} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const payload = {
    query: GET_ALBUMS_BY_CATEGORY,
    variables: {
      perPage: 96,
      page: 1,
      genre: {
        contains: '' as string | string[] | undefined
      },
      country: {
        contains: '' as string | string[] | undefined
      }
    }
  }

  if (params?.category === 'genero') {
    payload.variables.genre.contains = params?.slug
  }

  if (params?.category === 'pais') {
    payload.variables.country.contains = params?.slug
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
