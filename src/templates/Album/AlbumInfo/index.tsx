import { CountryEntity, GenreEntity, Maybe } from '@/graphql/generated/graphql'
import {
  Infos,
  InfosArtist,
  InfosHeader,
  InfosLink,
  InfosLinks,
  InfosLinksButton,
  InfosLinksList,
  InfosTag,
  InfosTags,
  InfosTitle
} from './styles'
import { Location, PlayCircle, Pricetag } from '@styled-icons/ionicons-solid'
import {
  Amazon,
  Deezer,
  Lastfm,
  Spotify,
  WikipediaW,
  Youtube
} from '@styled-icons/fa-brands'
import { Download } from '@styled-icons/ionicons-outline'

type AlbumInfoProps = {
  title: Maybe<string> | undefined
  artist: Maybe<string> | undefined
  year: Maybe<string> | undefined
  country: Maybe<CountryEntity> | undefined
  genre: GenreEntity[] | undefined
  amazon: Maybe<string> | undefined
  deezer: Maybe<string> | undefined
  download: Maybe<string> | undefined
  spotify: Maybe<string> | undefined
  lastfm: Maybe<string> | undefined
  youtube: Maybe<string> | undefined
  wikipedia: Maybe<string> | undefined
}

export default function AlbumInfo({
  title,
  artist,
  country,
  genre,
  amazon,
  deezer,
  download,
  lastfm,
  spotify,
  youtube,
  wikipedia
}: AlbumInfoProps) {
  return (
    <Infos>
      <InfosLinks>
        <InfosLinksButton>
          <PlayCircle />
        </InfosLinksButton>
        <InfosLinksList $opened={true}>
          {amazon ? (
            <li>
              <InfosLink target="_blank" href={amazon || ''} title="Amazon">
                <Amazon />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {deezer ? (
            <li>
              <InfosLink target="_blank" href={deezer || ''} title="Deezer">
                <Deezer />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {download ? (
            <li>
              <InfosLink target="_blank" href={download || ''} title="Download">
                <Download />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {lastfm ? (
            <li>
              <InfosLink target="_blank" href={lastfm || ''} title="Last.fm">
                <Lastfm />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {spotify ? (
            <li>
              <InfosLink target="_blank" href={spotify || ''} title="Spotify">
                <Spotify />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {youtube ? (
            <li>
              <InfosLink target="_blank" href={youtube || ''} title="YouTube">
                <Youtube />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {wikipedia ? (
            <li>
              <InfosLink
                target="_blank"
                href={wikipedia || ''}
                title="Wikipedia"
              >
                <WikipediaW />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
        </InfosLinksList>
      </InfosLinks>
      <InfosHeader>
        <InfosTitle>{title}</InfosTitle>
        <InfosArtist>
          <span>{artist}</span>
        </InfosArtist>
      </InfosHeader>
      <InfosTags>
        <InfosTag key={country?.id} href={`/pais/${country?.attributes?.slug}`}>
          <Location />
          {country?.attributes?.title}
        </InfosTag>
        {genre?.map((item, index) => (
          <InfosTag
            key={`genre-${index}`}
            href={`/genero/${item?.attributes?.slug}`}
          >
            <Pricetag />
            <span>{item.attributes?.title}</span>
          </InfosTag>
        ))}
      </InfosTags>
    </Infos>
  )
}
