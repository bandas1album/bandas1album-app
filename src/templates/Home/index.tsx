import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import {
  HOME_ALBUMS_PARAMS,
  toAlbumsInfiniteData,
  useGetAlbums
} from '@/api/Albums/GetAlbums'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import { useRef } from 'react'
import PageHeader from '@/components/PageHeader'
import PageEditorial from '@/components/PageEditorial'
import { useInfiniteScrollLoadMore } from '@/hooks/useInfiniteScrollLoadMore'
import { SITE_URL, absoluteUrl } from '@/lib/seo/site'
import { getHomeContent, getHomeSeoDescription } from '@/lib/seo/listingMeta'
import {
  buildAlbumItemListJsonLd,
  flattenAlbumPages
} from '@/lib/seo/structuredData'

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

  useInfiniteScrollLoadMore(loadMoreRef, {
    hasNextPage: hasNextPage ?? false,
    isFetchingNextPage,
    fetchNextPage
  })

  const pageMeta = albums?.pages[0]?.meta ?? initialPage.meta
  const editorialContent = getHomeContent(pageMeta)
  const seoDescription = getHomeSeoDescription(pageMeta)

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildAlbumItemListJsonLd(
                flattenAlbumPages(initialPage),
                'Bandas de 1 Álbum'
              )
            )
          }}
        />
      </Head>
      <NextSeo
        title="Bandas de 1 Álbum"
        description={seoDescription}
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
        <PageEditorial content={editorialContent} variant="content" />
        <ListAlbums albums={albums} />
        <div ref={loadMoreRef} />
      </>
    </>
  )
}
