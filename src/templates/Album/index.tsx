import Head from 'next/head'
import { AlbumEntity } from '@/graphql/generated/graphql'
import ButtonBack from '@/components/Buttons/ButtonBack'
import AlbumCover from './AlbumCover'
import AlbumInfo from './AlbumInfo'
import { jsonLdScriptProps } from 'react-schemaorg'
import { MusicAlbum } from 'schema-dts'
import AlbumTracklist from './AlbumTracklist'

export default function AlbumTemplate({ attributes }: AlbumEntity) {
  return (
    <>
      <Head>
        <title>{attributes?.title} | Bandas de 1 Álbum</title>
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
        year={attributes?.released}
        genre={attributes?.genres?.data}
        country={attributes?.country?.data}
        amazon={attributes?.social?.amazon}
        deezer={attributes?.social?.deezer}
        download={attributes?.social?.download}
        lastfm={attributes?.social?.lastfm}
        spotify={attributes?.social?.spotify}
        wikipedia={attributes?.social?.wikipedia}
      />
      {attributes?.tracklist && <AlbumTracklist list={attributes?.tracklist} />}
    </>
  )
}
