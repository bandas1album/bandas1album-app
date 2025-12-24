import ListAlbums from '@/components/ListAlbums'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import PageHeader from '@/components/PageHeader'
import { GetAlbumsResponse } from '@/api/album/GetAlbums/types'
import { useRouter } from 'next/router'

export default function CategoryTemplate(response: GetAlbumsResponse) {
  const {query} = useRouter()
  return (
    <>
      <Head>
        <title>
          {response.meta?.context?.title} ‹ {response.meta?.context?.page} | Bandas de 1 Álbum
        </title>
      </Head>
      <NextSeo
        title={`${response.meta?.context?.title} ‹ ${response.meta?.context?.page} | Bandas de 1 Álbum`}
        description={`Ouça todas as bandas e artistas que lançaram apenas um álbum filtrados por ${response.meta?.context?.page} › ${response.meta?.context?.title} no Bandas de 1 Álbum.`}
        canonical={`https://bandas1album.com.br/${query.category}/${query.slug}`}
        openGraph={{
          url: `https://bandas1album.com.br/${query.category}/${query.slug}`,
          images: [
            {
              url: '/cover.png',
              width: 1280,
              height: 720,
              alt: 'Bandas de 1 Álbum'
            }
          ]
        }}
      />
      {response.data ? (
        <>
          {response.meta?.context?.title && (
            <PageHeader>
              {response.meta?.context?.page} › {response.meta?.context?.title}
            </PageHeader>
          )}

          <ListAlbums
            albums={response.data}
          />
        </>
      ) : (
        <p>Nenhum álbum foi encontrado.</p>
      )}
    </>
  )
}
