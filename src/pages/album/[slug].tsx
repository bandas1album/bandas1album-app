import { AlbumEntityResponseCollection, AlbumProps } from '@/types'
import client from '@/graphql/client'
import { GET_ALBUM_BY_SLUG, GET_ALBUMS } from '@/graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { GetAlbumBySlugQuery } from '@/graphql/generated/graphql'
import AlbumTemplate, { AlbumTemplateProps } from '@/templates/Album'

export default function Album({ title }: AlbumTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <AlbumTemplate title={title} />
}

export async function getStaticPaths() {
  const { albums }: AlbumEntityResponseCollection = await client.request(
    GET_ALBUMS
  )

  const paths = albums.map((album: AlbumProps) => ({
    params: {
      slug: album.slug
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { album } = await client.request<GetAlbumBySlugQuery>(
    GET_ALBUM_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!album) return { notFound: true }

  return {
    props: {
      title: album.title
    }
  }
}
