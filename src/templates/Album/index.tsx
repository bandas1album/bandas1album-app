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
  return (
    <>
      <Head>
        <title>{attributes?.title} | Bandas de 1 Álbum</title>
        <NextSeo
          title={`${attributes?.title} | Bandas de 1 Álbum`}
          description={`Ouça agora o álbum de ${
            attributes?.genres?.data[0].attributes?.title
          } "${attributes?.title}", único disco lançado por ${
            attributes?.artist
          } em ${new Date(attributes?.released).getFullYear().toString()}`}
        />
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
        year={new Date(attributes?.released).getFullYear().toString()}
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
