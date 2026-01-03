import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import PageHeader from '@/components/PageHeader'
import { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useGetAlbums } from '@/api/Albums/GetAlbums'

export default function CategoryTemplate() {
  const { query } = useRouter()
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const [meta, setMeta] = useState<GetAlbumsResponse['meta'] | null>(null)
  const {
    data: category,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useGetAlbums({
    pageParam: 1,
    per_page: 99,
    order_by: 'date',
    order: 'DESC',
    taxonomy: {
      category: query.category as string,
      slug: query.slug as string
    }
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

  useEffect(() => {
    const lastItem = category?.pages[category?.pages.length - 1]

    if (lastItem) {
      setMeta(lastItem?.meta)
    }
  }, [category])

  return (
    <>
      <Head>
        <title>
          {meta?.context?.title} ‹ {meta?.context?.page} | Bandas de 1 Álbum
        </title>
      </Head>
      <NextSeo
        title={`${meta?.context?.title} ‹ ${meta?.context?.page} | Bandas de 1 Álbum`}
        description={`Ouça todas as bandas e artistas que lançaram apenas um álbum filtrados por ${meta?.context?.page} › ${meta?.context?.title} no Bandas de 1 Álbum.`}
        canonical={`https://bandas1album.com.br/${query.category}/${query.slug}`}
        openGraph={{
          url: `https://bandas1album.com.br/${query.category}/${query.slug}`,
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
      {category?.pages ? (
        <>
          {meta?.context?.title && (
            <PageHeader>
              {meta?.context?.page} › {meta?.context?.title}
            </PageHeader>
          )}

          <ListAlbums albums={category} />
        </>
      ) : (
        <p>Nenhum álbum foi encontrado.</p>
      )}
      <div ref={loadMoreRef} />
    </>
  )
}
