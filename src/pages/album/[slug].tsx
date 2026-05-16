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

export default function PageAlbum() {
  const router = useRouter()
  const slug = typeof router.query.slug === 'string' ? router.query.slug : ''

  const { data, isPending, isError, error } = useGetAlbumBySlug(slug)

  if (!router.isReady) {
    return null
  }

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

  if (isPending) {
    return (
      <>
        <Head>
          <title>Carregando… | Bandas de 1 Álbum</title>
        </Head>
        <p>Carregando…</p>
      </>
    )
  }

  if (isError) {
    return (
      <>
        <Head>
          <title>Erro | Bandas de 1 Álbum</title>
        </Head>
        <p role="alert">
          {isNotFoundError(error)
            ? 'Álbum não encontrado.'
            : 'Não foi possível carregar o álbum.'}
        </p>
      </>
    )
  }

  return <AlbumTemplate {...data} />
}
