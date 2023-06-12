import { AlbumEntityResponseCollection, AlbumProps } from '@/types'
import client from '@/graphql/client'
import { GET_ALBUM, GET_ALBUMS } from '@/graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

type AlbumTemplateProps = {
  title: string
}

export default function Album({ title }: AlbumTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <h1>{title}</h1>
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
  const { album }: { album: AlbumProps } = await client.request(GET_ALBUM, {
    slug: `${params?.slug}`
  })

  if (!album) return { notFound: true }

  return {
    props: {
      title: album.title
    }
  }
}
