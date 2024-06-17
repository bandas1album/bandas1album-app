import client from '@/graphql/client'
import { GET_ALBUM_BY_SLUG, GET_ALBUMS } from '@/graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import {
  AlbumEntityResponse,
  GetAlbumBySlugQuery,
  GetAlbumsQuery
} from '@/graphql/generated/graphql'
import AlbumTemplate from '@/templates/Album'
import { ApolloError } from '@apollo/client'

export default function PageAlbum(album: AlbumEntityResponse) {
  const router = useRouter()

  if (router.isFallback) return <p>Loading...</p>

  return <AlbumTemplate {...album.data} />
}

export async function getStaticPaths() {
  try {
    const { data } = await client.query({
      query: GET_ALBUMS,
      variables: {
        first: 1
      }
    })
    const { albums } = data as GetAlbumsQuery

    const paths = albums?.data.map((album) => ({
      params: {
        slug: album.attributes?.slug
      }
    }))

    return { paths, fallback: true }
  } catch (error) {
    console.error('Error fetching albums:', error)
    return { paths: [], fallback: true }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await client.query({
      query: GET_ALBUM_BY_SLUG,
      variables: {
        id: `${params?.slug}`
      }
    })
    const { album } = data as GetAlbumBySlugQuery

    if (!album) return { notFound: true }

    return {
      props: album
    }
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error('ApolloError:', error.message)
    } else {
      console.error('Error:', error)
    }
    return {
      props: {},
      revalidate: 10
    }
  }
}
