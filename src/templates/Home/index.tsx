import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import {
  HOME_ALBUMS_PARAMS,
  toAlbumsInfiniteData,
  useGetAlbums
} from '@/api/Albums/GetAlbums'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import { useEffect, useRef } from 'react'
import PageHeader from '@/components/PageHeader'
import { SITE_URL, absoluteUrl } from '@/lib/seo/site'

export type HomeTemplateProps = {
  initialPage: GetAlbumsResponse
}

const SITE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bandas de 1 Álbum',
  url: SITE_URL,
  description:
    'Descubra bandas e artistas que lançaram apenas um álbum na carreira — explore por gênero, país ou ano de lançamento.',
  inLanguage: 'pt-BR',
  publisher: {
    '@type': 'Organization',
    name: 'Bandas de 1 Álbum',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`
    }
  }
}

export default function HomeTemplate({ initialPage }: HomeTemplateProps) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const {
    data: albums,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useGetAlbums(HOME_ALBUMS_PARAMS, {
    initialData: toAlbumsInfiniteData(initialPage)
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
        root: null,
        rootMargin: '200px',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SITE_STRUCTURED_DATA)
          }}
        />
      </Head>
      <NextSeo
        title="Bandas de 1 Álbum"
        description="O projeto Bandas de 1 Álbum eterniza bandas e artistas que lançaram apenas um álbum na carreira."
        canonical={`${SITE_URL}/`}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: `${SITE_URL}/`,
          siteName: 'Bandas de 1 Álbum',
          images: [
            {
              url: absoluteUrl('/cover.png'),
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
