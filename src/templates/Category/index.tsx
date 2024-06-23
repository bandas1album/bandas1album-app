import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { isMiddleOnScroll } from '@/utils/isMiddleOnScroll'
import { useCallback, useEffect, useState } from 'react'
import {
  AlbumEntity,
  GetAlbumsByCategoryQuery,
  Pagination
} from '@/graphql/generated/graphql'
import { GET_ALBUMS_BY_CATEGORY } from '@/graphql/queries'
import client from '@/graphql/client'

type TCategoryTemplate = {
  nodes: Array<AlbumEntity>
  pageInfo: Pagination
  params: {
    category: string
    slug: string
  }
}

export default function CategoryTemplate({
  nodes,
  pageInfo,
  params
}: TCategoryTemplate) {
  const [firstLoading, setFirstLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState<Array<AlbumEntity>>(nodes)
  const [currentPage, setCurrentPage] = useState<number | undefined>(
    pageInfo.page
  )
  const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(
    pageInfo.pageCount > pageInfo.page
  )

  const getAlbums = async () => {
    setLoading(true)
    const payload = {
      query: GET_ALBUMS_BY_CATEGORY,
      variables: {
        perPage: 96,
        page: currentPage && currentPage + 1,
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

    const { data } = await client.query<GetAlbumsByCategoryQuery>(payload)
    const responseList = data.albums?.data as AlbumEntity[]
    setAlbums((albums) => [...albums, ...responseList])
    if (
      data.albums?.meta.pagination?.pageCount &&
      data.albums?.meta.pagination?.page
    ) {
      setHasNextPage(
        data.albums?.meta.pagination?.pageCount <
          data.albums?.meta.pagination?.page
      )
    }
    setCurrentPage(data.albums?.meta.pagination?.page)
    setLoading(false)
    setFirstLoading(false)
  }

  const handleScroll = useCallback((): void => {
    if (isMiddleOnScroll() && hasNextPage && !loading) {
      getAlbums()
    }
  }, [hasNextPage, currentPage, loading])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    setAlbums(nodes)
  }, [nodes])

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
      {albums ? (
        <>
          <ListAlbums
            albums={albums}
            handleScroll={handleScroll}
            loading={firstLoading ? 'eager' : 'lazy'}
          />
        </>
      ) : (
        <p>Nenhum álbum foi encontrado.</p>
      )}
    </>
  )
}
