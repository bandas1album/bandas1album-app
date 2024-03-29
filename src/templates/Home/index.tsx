import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { isMiddleOnScroll } from '@/utils/isMiddleOnScroll'
import { useCallback, useEffect, useState } from 'react'
import { Album, AlbumConnection } from '@/graphql/generated/graphql'
import { GET_ALBUMS } from '@/graphql/queries'
import client from '@/graphql/client'

export default function HomeTemplate({ nodes, pageInfo }: AlbumConnection) {
  const [firstLoading, setFirstLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState<AlbumConnection['nodes']>(nodes)
  const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(
    pageInfo.hasNextPage || false
  )
  const [endCursor, setEndCursor] = useState<string | null | undefined>(
    pageInfo.endCursor || ''
  )

  const handleScroll = useCallback((): void => {
    if (isMiddleOnScroll() && hasNextPage && !loading) {
      getAlbums(endCursor)
    }
  }, [hasNextPage, endCursor, loading])

  const getAlbums = async (cursor: string | null | undefined) => {
    setLoading(true)
    const { data } = await client.query({
      query: GET_ALBUMS,
      variables: {
        first: 96,
        after: cursor
      }
    })
    const responseList = data.albums?.nodes as Album[]
    setAlbums((albums) => [...albums, ...responseList])
    setHasNextPage(data.albums?.pageInfo.hasNextPage)
    setEndCursor(data.albums?.pageInfo.endCursor)
    setLoading(false)
    setFirstLoading(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

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
      <ListAlbums
        albums={albums}
        handleScroll={handleScroll}
        loading={firstLoading ? 'eager' : 'lazy'}
      />
    </>
  )
}
