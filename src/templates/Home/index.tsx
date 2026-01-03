import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useGetAlbums } from '@/api/Albums/GetAlbums'
import { useEffect, useRef } from 'react'
import PageHeader from '@/components/PageHeader'

export default function HomeTemplate() {
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const {
    data: albums,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useGetAlbums({
    pageParam: 1,
    per_page: 99,
    order_by: 'date',
    order: 'DESC'
  })

  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      {
        root: null, // window
        rootMargin: '200px', // começa antes de chegar no fim
        threshold: 0
      }
    )

    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <>
      <Head>
        <title>Bandas de 1 Álbum</title>
      </Head>
      <NextSeo
        title="Bandas de 1 Álbum"
        description="O projeto Bandas de 1 Álbum eterniza bandas e artistas que lançaram apenas um álbum na carreira."
        canonical="https://bandas1album.com.br/"
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
      <>
        <PageHeader hideBack={true}>Bandas de 1 Álbum</PageHeader>
        <ListAlbums albums={albums} />
        <div ref={loadMoreRef} />
      </>
    </>
  )
}
