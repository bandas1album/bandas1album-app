import client from '@/graphql/client'
import { GetAlbumsQuery } from '@/graphql/generated/graphql'
import { GET_ALBUMS } from '@/graphql/queries'
import HomeTemplate from '@/templates/Home'
import { GetStaticProps } from 'next'

export default function Home({ albums }: GetAlbumsQuery) {
  return <HomeTemplate {...albums} />
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.request<GetAlbumsQuery>(GET_ALBUMS, {
    first: 96,
    after: null
  })

  return {
    props: {
      albums: response.albums
    }
  }
}
