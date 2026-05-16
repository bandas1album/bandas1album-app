import type { GetServerSideProps } from 'next'
import type { Album } from '@/api/types/Album'
import { fetchAlbumBySlug } from '@/lib/seo/serverAlbum'
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
  album: Album
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const raw = context.params?.slug
  const slug = typeof raw === 'string' ? raw.trim() : ''
  if (!slug) return { notFound: true }

  const album = await fetchAlbumBySlug(slug)
  if (!album) return { notFound: true }

  return { props: { album } }
}

export default function PageAlbum({ album: ssrAlbum }: PageProps) {
  const router = useRouter()
  const slugFromQuery =
    typeof router.query.slug === 'string' ? router.query.slug : ''
  const slug = slugFromQuery || ssrAlbum.slug

  const { data, isPending, isError, error } = useGetAlbumBySlug(slug, ssrAlbum)

  const resolved = data ?? (ssrAlbum.slug === slug ? ssrAlbum : undefined)

  if (!slug) {
    return (
      <>
        <Head>
          <title>Álbum | Bandas de 1 Álbum</title>
        </Head>
        <p>Álbum inválido.</p>
      </>
    )
  }

  if (!router.isReady && !resolved) {
    return null
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
