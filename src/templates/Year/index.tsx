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
import { GET_ALBUMS_BY_YEAR } from '@/graphql/queries'
import client from '@/graphql/client'
import ButtonBack from '@/components/Buttons/ButtonBack'
import PageHeader from '@/components/PageHeader'

type TYearTemplate = {
  nodes: Array<AlbumEntity>
  pageInfo: Pagination
  params: {
    category: string
    slug: string
  }
}

export default function YearTemplate({
  nodes,
  pageInfo,
  params
}: TYearTemplate) {
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
      query: GET_ALBUMS_BY_YEAR,
      variables: {
        perPage: 96,
        page: currentPage && currentPage + 1,
        year: `${params?.slug}-01-01`
      }
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
        <title>{params.slug} ‹ Ano | Bandas de 1 Álbum</title>
      </Head>
      <NextSeo
        title={`${params.slug} ‹ Ano | Bandas de 1 Álbum`}
        description={`Ouça todas as bandas e artistas que lançaram apenas um álbum lançados em ${params.slug} no Bandas de 1 Álbum.`}
        canonical={`https://bandas1album.com.br/ano/${params.slug}`}
        openGraph={{
          url: `https://bandas1album.com.br/ano/${params.slug}`,
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
          <PageHeader>Ano de lançamento › {params.slug}</PageHeader>
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
