import Head from 'next/head'
import ButtonBack from '@/components/Buttons/ButtonBack'
import AlbumCover from './AlbumCover'
import AlbumInfo from './AlbumInfo'
import { jsonLdScriptProps } from 'react-schemaorg'
import { MusicAlbum } from 'schema-dts'
import AlbumTracklist from './AlbumTracklist'
import DisqusComments from '@/components/DisqusComments'
import { NextSeo } from 'next-seo'
import { decodeBrokenUnicode } from '@/utils/decodeUnicode'

export default function AlbumTemplate(data: any) {
  const pageTitle =
    data?.title === data?.artist
      ? data?.title
      : `${data?.artist} - ${data?.title}`

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
              name: data?.artist || ''
            },
            genre: data?.genres?.length ? data.genres?.[0]?.title || '' : '',
            image: data?.cover || '',
            name: data?.title || '',
            numTracks: data?.tracklist && data?.tracklist.length,
            track:
              data?.tracklist &&
              data?.tracklist?.map(
                (track: { title: string; duration: string }) => ({
                  '@type': 'MusicRecording',
                  duration: track?.duration || '',
                  name: decodeBrokenUnicode(track?.title) || ''
                })
              ),
            url: `/album/${data?.slug}`
          })}
        />
      </Head>
      <NextSeo
        title={`${pageTitle} | Bandas de 1 Álbum`}
        description={`Ouça agora o álbum de ${data?.genres?.[0]?.title} "${
          data?.title
        }", único disco lançado por ${data?.artist} em ${new Date(
          data?.released
        )
          .getFullYear()
          .toString()}.`}
        openGraph={{
          url: `https://bandas1album.com.br/album/${data?.slug}`,
          images: [
            {
              url: data?.cover || '',
              width: 1280,
              height: 720,
              alt: `Capa do álbum ${data?.title} de ${data?.artist}`
            }
          ]
        }}
        canonical={`https://bandas1album.com.br/album/${data?.slug}`}
      />

      <ButtonBack />
      <AlbumCover image={data?.cover} title={data?.title} />
      <AlbumInfo
        title={data?.title}
        artist={data?.artist}
        genre={data?.genres}
        country={data?.country}
        social={data?.links}
        year={data?.released?.split('-')[0]}
        content={data?.content}
      />
      {data?.tracklist && <AlbumTracklist list={data?.tracklist} />}
      <DisqusComments
        slug={data?.slug}
        id={data?.slug}
        title={data?.title}
      ></DisqusComments>
    </>
  )
}
