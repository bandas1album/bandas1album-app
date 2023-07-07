import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { isMiddleOnScroll } from '@/utils/isMiddleOnScroll'
import { useState } from 'react'
import {
  Album,
  GetAlbumsQuery,
  RootQueryToAlbumConnection
} from '@/graphql/generated/graphql'
import { GET_ALBUMS } from '@/graphql/queries'
import client from '@/graphql/client'

type HomeTemplateProps = {
  nodes: RootQueryToAlbumConnection['nodes']
  pageInfo: RootQueryToAlbumConnection['pageInfo']
}

export default function HomeTemplate({ nodes, pageInfo }: HomeTemplateProps) {
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] =
    useState<RootQueryToAlbumConnection['nodes']>(nodes)
  const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(
    pageInfo.hasNextPage
  )
  const [endCursor, setEndCursor] = useState<string | null | undefined>(
    pageInfo.endCursor
  )

  const handleScroll = (e: React.UIEvent<HTMLUListElement>): void => {
    const $el = e.target as HTMLUListElement

    if (isMiddleOnScroll($el) && hasNextPage && !loading) {
      getAlbums(endCursor)
    }
  }

  const getAlbums = async (cursor: string | null | undefined) => {
    setLoading(true)
    const response = await client.request<GetAlbumsQuery>(GET_ALBUMS, {
      first: 96,
      after: cursor
    })
    const responseList = response.albums?.nodes as Album[]
    setAlbums((albums) => [...albums, ...responseList])
    setHasNextPage(response.albums?.pageInfo.hasNextPage)
    setEndCursor(response.albums?.pageInfo.endCursor)
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Bandas de 1 Álbum</title>
      </Head>
      <NextSeo
        title="Bandas de 1 Álbum"
        description="Eternizando bandas e artistas que lançaram apenas um álbum."
        openGraph={{
          url: 'https://bandas1album.com.br/',
          images: [
            {
              url: '/cover.png',
              width: 1280,
              height: 720,
              alt: 'Bandas de 1 Álbum'
            }
          ]
        }}
      />
      <ListAlbums albums={albums} handleScroll={handleScroll} />
    </>
  )
}
