import type { GetStaticPaths, GetStaticProps } from 'next'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import CategoryTemplate from '@/templates/Category'
import {
  fetchAllCategoryPaths,
  fetchCategoryFirstPage
} from '@/lib/seo/serverAlbum'
import { getCategorySeoDescription } from '@/lib/seo/listingMeta'

const VALID_CATEGORIES = new Set(['genre', 'country', 'year'])

export type CategoryPageProps = {
  category: string
  slug: string
  initialSeo: {
    title: string
    description?: string
    canonicalPath: string
  }
  initialPage: GetAlbumsResponse
}

export default function PageCategory({
  category,
  slug,
  initialSeo,
  initialPage
}: CategoryPageProps) {
  return (
    <CategoryTemplate
      category={category}
      slug={slug}
      initialSeo={initialSeo}
      initialPage={initialPage}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths = await fetchAllCategoryPaths()
    return {
      paths: paths.map(({ category, slug }) => ({
        params: { category, slug }
      })),
      fallback: 'blocking'
    }
  } catch (e) {
    console.error('[category paths]', e)
    return { paths: [], fallback: 'blocking' }
  }
}

export const getStaticProps: GetStaticProps<CategoryPageProps> = async (
  ctx
) => {
  const category = ctx.params?.category
  const slug = ctx.params?.slug

  if (
    typeof category !== 'string' ||
    typeof slug !== 'string' ||
    !VALID_CATEGORIES.has(category) ||
    !slug ||
    slug === 'undefined'
  ) {
    return { notFound: true }
  }

  try {
    const data = await fetchCategoryFirstPage(category, slug)
    if (!data) return { notFound: true, revalidate: 60 }

    const totalItems = data.meta?.pagination?.total_items ?? 0
    const hasAlbums = (data.data?.length ?? 0) > 0
    // Soft 404: API devolve 200 com lista vazia para termos inexistentes/vazios.
    if (!hasAlbums && totalItems === 0) {
      return { notFound: true, revalidate: 300 }
    }

    const ctxMeta = data.meta?.context
    const title = ctxMeta
      ? `${ctxMeta.title} ‹ ${ctxMeta.page} | Bandas 1 Álbum`
      : `${slug} | Bandas 1 Álbum`

    const description = getCategorySeoDescription(data.meta)

    return {
      props: {
        category,
        slug,
        initialPage: data,
        initialSeo: {
          title,
          canonicalPath: `/${category}/${slug}`,
          ...(description ? { description } : {})
        }
      },
      revalidate: 3600
    }
  } catch (e) {
    console.error('[category isr]', e)
    throw e
  }
}
