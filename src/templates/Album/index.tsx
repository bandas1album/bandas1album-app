import Head from 'next/head'
import { AlbumEntity } from '@/graphql/generated/graphql'
import ButtonBack from '@/components/Buttons/ButtonBack'
import AlbumCover from './AlbumCover'
import AlbumInfo from './AlbumInfo'
import { jsonLdScriptProps } from 'react-schemaorg'
import { MusicAlbum } from 'schema-dts'
import AlbumTracklist from './AlbumTracklist'
import DisqusComments from '@/components/DisqusComments'
import { NextSeo } from 'next-seo'

export default function AlbumTemplate({ attributes }: AlbumEntity) {
  const pageTitle =
    attributes?.title === attributes?.artist
      ? attributes?.title
      : `${attributes?.artist} - ${attributes?.title}`

  return (
    <>
      <Head>
        <title>{pageTitle} | Bandas de 1 Álbum</title>
        <script
          {...jsonLdScriptProps<MusicAlbum>({
            '@context': 'https://schema.org',
            '@type': 'MusicAlbum',
            byArtist: {
              '@type': 'MusicGroup',
              name: attributes?.artist || ''
            },
            genre: attributes?.genres?.data.length
              ? attributes.genres.data[0].attributes?.title || ''
              : '',
            image: attributes?.cover.data?.attributes?.url || '',
            name: attributes?.title || '',
            numTracks: attributes?.tracklist && attributes?.tracklist.length,
            track:
              attributes?.tracklist &&
              attributes?.tracklist?.map(
                (track: { title: string; duration: string }) => ({
                  '@type': 'MusicRecording',
                  duration: track?.duration || '',
                  name: track?.title || ''
                })
              ),
            url: `/album/${attributes?.slug}`
          })}
        />
      </Head>
      <NextSeo
        title={`${pageTitle} | Bandas de 1 Álbum`}
        description={`Ouça agora o álbum de ${
          attributes?.genres?.data[0].attributes?.title
        } "${attributes?.title}", único disco lançado por ${
          attributes?.artist
        } em ${new Date(attributes?.released).getFullYear().toString()}.`}
        openGraph={{
          url: `https://bandas1album.com.br/album/${attributes?.slug}`,
          images: [
            {
              url: attributes?.cover.data?.attributes?.url || '',
              width: 1280,
              height: 720,
              alt: `Capa do álbum ${attributes?.title} de ${attributes?.artist}`
            }
          ]
        }}
        canonical={`https://bandas1album.com.br/album/${attributes?.slug}`}
      />

      <ButtonBack />
      <AlbumCover
        image={attributes?.cover.data?.attributes?.url}
        title={attributes?.title}
      />
      <AlbumInfo
        title={attributes?.title}
        artist={attributes?.artist}
        genre={attributes?.genres?.data}
        country={attributes?.country?.data}
        social={attributes?.social}
        year={attributes?.released.split('-')[0]}
        content={attributes?.content}
      />
      {attributes?.tracklist && <AlbumTracklist list={attributes?.tracklist} />}
      <DisqusComments
        slug={attributes?.slug}
        id={attributes?.slug}
        title={attributes?.title}
      ></DisqusComments>
    </>
  )
}
