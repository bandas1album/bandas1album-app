import Head from 'next/head'
import { Album } from '@/graphql/generated/graphql'
import ButtonBack from '@/components/Buttons/ButtonBack'
import AlbumCover from './AlbumCover'
import AlbumInfo from './AlbumInfo'
import { jsonLdScriptProps } from 'react-schemaorg'
import { MusicAlbum } from 'schema-dts'
import AlbumTracklist from './AlbumTracklist'

export default function AlbumTemplate({
  title,
  featuredImage,
  acf,
  slug
}: Album) {
  return (
    <>
      <Head>
        <title>{title} | Bandas de 1 Álbum</title>
        <script
          {...jsonLdScriptProps<MusicAlbum>({
            '@context': 'https://schema.org',
            '@type': 'MusicAlbum',
            byArtist: {
              '@type': 'MusicGroup',
              name: acf?.artist || ''
            },
            genre: acf?.genre ? acf?.genre[0]?.title || '' : '',
            image: featuredImage?.node.sourceUrl || '',
            name: title || '',
            numTracks: acf?.tracklist?.length,
            track: acf?.tracklist?.map((track) => ({
              '@type': 'MusicRecording',
              duration: track?.duration || '',
              name: track?.title || ''
            })),
            url: `/album/${slug}`
          })}
        />
      </Head>

      <ButtonBack />
      <AlbumCover image={featuredImage?.node.sourceUrl} title={title} />
      <AlbumInfo
        title={title}
        artist={acf?.artist}
        year={acf?.released}
        genre={acf?.genre}
        country={acf?.country}
        amazon={acf?.amazon}
        deezer={acf?.deezer}
        download={acf?.download}
        lastfm={acf?.lastfm}
        spotify={acf?.spotify}
        wikipedia={acf?.wikipedia}
      />
      <AlbumTracklist list={acf?.tracklist} />
    </>
  )
}
