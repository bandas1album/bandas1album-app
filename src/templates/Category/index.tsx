import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import PageHeader from '@/components/PageHeader'
import { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import { useRef } from 'react'
import {
  HOME_ALBUMS_PARAMS,
  toAlbumsInfiniteData,
  useGetAlbums
} from '@/api/Albums/GetAlbums'
import { SITE_URL, absoluteUrl } from '@/lib/seo/site'
import {
  getCategoryIntro,
  getCategorySeoDescription
} from '@/lib/seo/listingMeta'
import {
  buildAlbumItemListJsonLd,
  buildBreadcrumbListJsonLd,
  buildCategoryBreadcrumbItems,
  flattenAlbumPages
} from '@/lib/seo/structuredData'
import { useInfiniteScrollLoadMore } from '@/hooks/useInfiniteScrollLoadMore'

export type CategoryTemplateProps = {
  category: string
  slug: string
  initialPage: GetAlbumsResponse
  initialSeo?: {
    title: string
    description?: string
    canonicalPath: string
  }
}

export default function CategoryTemplate({
  category,
  slug,
  initialPage,
  initialSeo
}: CategoryTemplateProps) {
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const {
    data: categoryData,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useGetAlbums(
    {
      ...HOME_ALBUMS_PARAMS,
      taxonomy: { category, slug }
    },
    { initialData: toAlbumsInfiniteData(initialPage) }
  )

  useInfiniteScrollLoadMore(loadMoreRef, {
    hasNextPage: hasNextPage ?? false,
    isFetchingNextPage,
    fetchNextPage
  })

  const meta =
    categoryData?.pages[categoryData.pages.length - 1]?.meta ?? initialPage.meta

  const path = initialSeo?.canonicalPath ?? `/${category}/${slug}`

  const pageTitle = meta?.context?.title
    ? `${meta.context.title} ‹ ${meta.context.page} | Bandas de 1 Álbum`
    : initialSeo?.title ?? 'Bandas de 1 Álbum'

  const pageDescription = getCategorySeoDescription(meta)
  const introContent = getCategoryIntro(meta)
  const playlists = meta?.context?.playlists
  const canonicalUrl = `${SITE_URL}${path}`
  const listName = meta?.context?.title
    ? `${meta.context.page} › ${meta.context.title}`
    : undefined

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildBreadcrumbListJsonLd(
                buildCategoryBreadcrumbItems(meta, path)
              )
            )
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildAlbumItemListJsonLd(flattenAlbumPages(initialPage), listName)
            )
          }}
        />
      </Head>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
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
      {categoryData?.pages?.length ? (
        <>
          {meta?.context?.title && (
            <PageHeader playlists={playlists}>
              {meta?.context?.page} › {meta?.context?.title}
            </PageHeader>
          )}

          <ListAlbums albums={categoryData} />
        </>
      ) : (
        <p>Nenhum álbum foi encontrado.</p>
      )}
      <div ref={loadMoreRef} />
    </>
  )
}
