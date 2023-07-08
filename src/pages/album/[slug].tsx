import client from '@/graphql/client'
import { GET_ALBUM_BY_SLUG, GET_ALBUMS } from '@/graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import {
  Album,
  GetAlbumBySlugQuery,
  GetAlbumsQuery
} from '@/graphql/generated/graphql'
import AlbumTemplate from '@/templates/Album'

export default function PageAlbum(album: Album) {
  const router = useRouter()
  if (router.isFallback) return null

  return <AlbumTemplate {...album} />
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALBUMS,
    variables: {
      first: 1
    }
  })
  const { albums } = data as GetAlbumsQuery

  const paths = albums?.nodes.map((album) => ({
    params: {
      slug: album.slug
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
}
