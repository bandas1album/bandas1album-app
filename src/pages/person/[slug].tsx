import type { GetStaticPaths, GetStaticProps } from 'next'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import CategoryTemplate from '@/templates/Category'
import {
  fetchAllPersonSlugs,
  fetchCategoryFirstPage
} from '@/lib/seo/serverAlbum'
import { getCategorySeoDescription } from '@/lib/seo/listingMeta'

export type PersonPageProps = {
  slug: string
  initialSeo: {
    title: string
    description?: string
    canonicalPath: string
  }
  initialPage: GetAlbumsResponse
}

export default function PagePerson({
  slug,
  initialSeo,
  initialPage
}: PersonPageProps) {
  return (
    <CategoryTemplate
      category="person"
      slug={slug}
      initialSeo={initialSeo}
      initialPage={initialPage}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const slugs = await fetchAllPersonSlugs()
    return {
      paths: slugs.map((slug) => ({ params: { slug } })),
      fallback: 'blocking'
    }
  } catch (e) {
    console.error('[person paths]', e)
    return { paths: [], fallback: 'blocking' }
  }
}

export const getStaticProps: GetStaticProps<PersonPageProps> = async (ctx) => {
  const slug = ctx.params?.slug

  if (typeof slug !== 'string' || !slug || slug === 'undefined') {
    return { notFound: true }
  }

  try {
    const data = await fetchCategoryFirstPage('person', slug)
    if (!data) return { notFound: true, revalidate: 60 }

    const ctxMeta = data.meta?.context
    // API antiga ignora category=person e devolve listagem sem contexto.
    if (!ctxMeta || ctxMeta.type !== 'person') {
      return { notFound: true, revalidate: 60 }
    }

    const totalItems = data.meta?.pagination?.total_items ?? 0
    const hasAlbums = (data.data?.length ?? 0) > 0
    if (!hasAlbums && totalItems === 0) {
      return { notFound: true, revalidate: 300 }
    }

    const title = `${ctxMeta.title} ‹ ${ctxMeta.page} | Bandas de 1 Álbum`
    const description = getCategorySeoDescription(data.meta)

    return {
      props: {
        slug,
        initialPage: data,
        initialSeo: {
          title,
          canonicalPath: `/person/${slug}`,
          ...(description ? { description } : {})
        }
      },
      revalidate: 3600
    }
  } catch (e) {
    console.error('[person isr]', e)
    throw e
  }
}
