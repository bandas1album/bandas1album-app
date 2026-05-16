import type { GetServerSideProps } from 'next'
import CategoryTemplate from '@/templates/Category'
import { fetchCategoryFirstPage } from '@/lib/seo/serverAlbum'

const VALID_CATEGORIES = new Set(['genre', 'country', 'year'])

export type CategoryPageProps = {
  initialSeo: {
    title: string
    description: string
    canonicalPath: string
  }
}

export default function PageCategory({ initialSeo }: CategoryPageProps) {
  return <CategoryTemplate initialSeo={initialSeo} />
}

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async (
  ctx
) => {
  const category = ctx.params?.category
  const slug = ctx.params?.slug

  if (
    typeof category !== 'string' ||
    typeof slug !== 'string' ||
    !VALID_CATEGORIES.has(category)
  ) {
    return { notFound: true }
  }

  try {
    const data = await fetchCategoryFirstPage(category, slug)
    if (!data) return { notFound: true }

    const ctxMeta = data.meta?.context
    const title = ctxMeta
      ? `${ctxMeta.title} ‹ ${ctxMeta.page} | Bandas de 1 Álbum`
      : `${slug} | Bandas de 1 Álbum`

    const description = ctxMeta
      ? `Ouça bandas e artistas que lançaram apenas um álbum filtrados por ${ctxMeta.page} › ${ctxMeta.title} no Bandas de 1 Álbum.`
      : `Explore álbuns únicos no Bandas de 1 Álbum — arquivo de bandas que lançaram apenas um disco.`

    return {
      props: {
        initialSeo: {
          title,
          description,
          canonicalPath: `/${category}/${slug}`
        }
      }
    }
  } catch (e) {
    console.error('[category ssr]', e)
    return { notFound: true }
  }
}
