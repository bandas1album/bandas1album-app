import client from '@/graphql/client'
import { GET_ALBUM_BY_SLUG, GET_ALBUMS } from '@/graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import {
  GetAlbumBySlugQuery,
  GetAlbumsQuery
} from '@/graphql/generated/graphql'
import AlbumTemplate, { AlbumTemplateProps } from '@/templates/Album'

export default function PageAlbum({ title }: AlbumTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <AlbumTemplate title={title} />
}

export async function getStaticPaths() {
  const data = await client.request<GetAlbumsQuery>(GET_ALBUMS, {
    first: 1
  })

  const paths = data.albums?.nodes.map((album) => ({
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
      id: `${params?.slug}`
    }
  )

  if (!album) return { notFound: true }

  return {
    props: {
      title: album.title
    }
  }
}
