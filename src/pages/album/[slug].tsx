import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Album } from '@/api/types/Album'
import { fetchAlbumBySlug, fetchAllAlbumSlugs } from '@/lib/seo/serverAlbum'
import Head from 'next/head'
import { useRouter } from 'next/router'
import AlbumTemplate from '@/templates/Album'
import { useGetAlbumBySlug } from '@/api/Albums/GetAlbumBySlug'

function isNotFoundError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    (error as { status: number }).status === 404
  )
}

type PageProps = {
  slug: string
  album: Album
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const slugs = await fetchAllAlbumSlugs()
    return {
      paths: slugs.map((slug) => ({ params: { slug } })),
      fallback: 'blocking'
    }
  } catch (e) {
    console.error('[album paths]', e)
    return { paths: [], fallback: 'blocking' }
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const raw = context.params?.slug
  const slug = typeof raw === 'string' ? raw.trim() : ''
  if (!slug || slug === 'undefined') return { notFound: true }

  try {
    const album = await fetchAlbumBySlug(slug)
    if (!album) return { notFound: true }

    return {
      props: { slug, album: { ...album, slug } },
      revalidate: 3600
    }
  } catch (e) {
    console.error('[album isr]', e)
    return { notFound: true }
  }
}

export default function PageAlbum({ slug, album: ssrAlbum }: PageProps) {
  const router = useRouter()
  const slugFromQuery =
    typeof router.query.slug === 'string' ? router.query.slug : ''
  const resolvedSlug = slugFromQuery || slug || ssrAlbum.slug

  const { data, isPending, isError, error } = useGetAlbumBySlug(
    resolvedSlug,
    ssrAlbum
  )

  const resolved =
    data ?? (ssrAlbum.slug === resolvedSlug ? ssrAlbum : undefined)

  if (!resolvedSlug) {
    return (
      <>
        <Head>
          <title>Álbum | Bandas de 1 Álbum</title>
        </Head>
        <p>Álbum inválido.</p>
      </>
    )
  }

  if (router.isFallback || (!router.isReady && !resolved)) {
    return (
      <>
        <Head>
          <title>Carregando… | Bandas de 1 Álbum</title>
          <meta name="robots" content="noindex,follow" />
        </Head>
        <p>Carregando…</p>
      </>
    )
  }

  if (isPending && !resolved) {
    return (
      <>
        <Head>
          <title>Carregando… | Bandas de 1 Álbum</title>
          <meta name="robots" content="noindex,follow" />
        </Head>
        <p>Carregando…</p>
      </>
    )
  }

  if (isError && !resolved) {
    return (
      <>
        <Head>
          <title>Erro | Bandas de 1 Álbum</title>
          <meta name="robots" content="noindex,follow" />
        </Head>
        <p role="alert">
          {isNotFoundError(error)
            ? 'Álbum não encontrado.'
            : 'Não foi possível carregar o álbum.'}
        </p>
      </>
    )
  }

  if (!resolved) {
    return null
  }

  return <AlbumTemplate {...resolved} />
}
