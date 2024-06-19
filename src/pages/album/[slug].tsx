import client from '@/graphql/client'
import { GET_ALBUMS, GET_ALBUM_BY_SLUG } from '@/graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { AlbumEntity, GetAlbumsQuery } from '@/graphql/generated/graphql'
import AlbumTemplate from '@/templates/Album'

type TPageAlbum = {
  album: AlbumEntity
}

export default function PageAlbum({ album }: TPageAlbum) {
  const router = useRouter()
  if (router.isFallback) return <p>Loading...</p>

  return <AlbumTemplate {...album} />
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALBUMS,
    variables: {
      perPage: 1
    }
  })
  const { albums } = data as GetAlbumsQuery

  const paths = albums?.data.map((album) => ({
    params: {
      slug: album.attributes?.slug
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_ALBUM_BY_SLUG,
    variables: {
      first: 1,
      slug: {
        eq: params?.slug
      }
    }
  })
  const { albums } = data as GetAlbumsQuery

  const album = albums?.data[0] as AlbumEntity

  if (!albums) return { notFound: true }

  return {
    props: {
      album
    }
  }
}
