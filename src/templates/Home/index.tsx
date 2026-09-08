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
import { useInfiniteScrollLoadMore } from '@/hooks/useInfiniteScrollLoadMore'
import { SITE_URL, absoluteUrl } from '@/lib/seo/site'
import { getHomeSeoDescription } from '@/lib/seo/listingMeta'
import {
  buildAlbumItemListJsonLd,
  flattenAlbumPages,
  safeJsonLdStringify
} from '@/lib/seo/structuredData'

export type HomeTemplateProps = {
  initialPage: GetAlbumsResponse
}

const SITE_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bandas 1 Álbum',
  url: SITE_URL,
  description:
    'Conheça bandas e artistas que lançaram apenas um álbum na carreira. Descubra discos, histórias, gêneros e raridades no Bandas 1 Álbum.',
  inLanguage: 'pt-BR',
  publisher: {
    '@type': 'Organization',
    name: 'Bandas 1 Álbum',
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
  const seoDescription = getHomeSeoDescription(pageMeta)

  return (
    <>
      <Head>
        <title>
          Bandas e Artistas que lançaram apenas um álbum na carreira | Bandas 1
          Álbum
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLdStringify(SITE_STRUCTURED_DATA)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLdStringify(
              buildAlbumItemListJsonLd(
                flattenAlbumPages(initialPage),
                'Bandas 1 Álbum'
              )
            )
          }}
        />
      </Head>
      <NextSeo
        title="Bandas 1 Álbum"
        description={seoDescription}
        canonical={`${SITE_URL}/`}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: `${SITE_URL}/`,
          siteName: 'Bandas 1 Álbum',
          images: [
            {
              url: absoluteUrl('/cover.png'),
              width: 1280,
              height: 720,
              alt: 'Bandas 1 Álbum'
            }
          ]
        }}
      />
      <>
        <PageHeader hideBack={true}>Bandas 1 Álbum</PageHeader>
        <ListAlbums
          albums={albums}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onLoadMore={() => fetchNextPage()}
        />
        <div ref={loadMoreRef} />
      </>
    </>
  )
}
