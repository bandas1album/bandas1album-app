import { Country, Genre, Maybe, Released } from '@/graphql/generated/graphql'
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
import {
  CalendarClear,
  Location,
  PlayCircle,
  Pricetag
} from '@styled-icons/ionicons-solid'
import {
  Amazon,
  Deezer,
  Lastfm,
  Spotify,
  WikipediaW
} from '@styled-icons/fa-brands'
import { Download } from '@styled-icons/ionicons-outline'
import { useState } from 'react'

type AlbumInfoProps = {
  title: Maybe<string> | undefined
  artist: Maybe<string> | undefined
  year: Maybe<Maybe<Released>[]> | undefined
  country: Maybe<Maybe<Country>[]> | undefined
  genre: Maybe<Maybe<Genre>[]> | undefined
  amazon: Maybe<string> | undefined
  deezer: Maybe<string> | undefined
  download: Maybe<string> | undefined
  spotify: Maybe<string> | undefined
  lastfm: Maybe<string> | undefined
  wikipedia: Maybe<string> | undefined
}

export default function AlbumInfo({
  title,
  artist,
  year,
  country,
  genre,
  amazon,
  deezer,
  download,
  lastfm,
  spotify,
  wikipedia
}: AlbumInfoProps) {
  const [openedLinks, setOpenedLinks] = useState(false)

  return (
    <Infos>
      <InfosLinks>
        <InfosLinksButton
          onClick={() => setOpenedLinks(!openedLinks)}
          onBlur={() => setOpenedLinks(false)}
        >
          <PlayCircle />
        </InfosLinksButton>
        <InfosLinksList $opened={openedLinks}>
          {amazon ? (
            <li>
              <InfosLink href={amazon || ''} title="Amazon">
                <Amazon />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {deezer ? (
            <li>
              <InfosLink href={deezer || ''} title="Deezer">
                <Deezer />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {download ? (
            <li>
              <InfosLink href={download || ''} title="Download">
                <Download />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {lastfm ? (
            <li>
              <InfosLink href={lastfm || ''} title="Last.fm">
                <Lastfm />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {spotify ? (
            <li>
              <InfosLink href={spotify || ''} title="Spotify">
                <Spotify />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {wikipedia ? (
            <li>
              <InfosLink href={wikipedia || ''} title="Wikipedia">
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
        {year?.map((item) => (
          <InfosTag key={item?.id} href={`/ano/${item?.title}`}>
            <CalendarClear />
            {item?.title}
          </InfosTag>
        ))}
        {country?.map((item) => (
          <InfosTag key={item?.id} href={`/pais/${item?.slug}`}>
            <Location />
            {item?.title}
          </InfosTag>
        ))}
        {genre?.map((item) => (
          <InfosTag key={item?.id} href={`/genero/${item?.slug}`}>
            <Pricetag />
            <span>{item?.title}</span>
          </InfosTag>
        ))}
      </InfosTags>
    </Infos>
  )
}
