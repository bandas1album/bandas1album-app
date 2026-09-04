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
  Cart,
  Location,
  PlayCircle,
  Pricetag
} from '@styled-icons/ionicons-solid'
import {
  Deezer,
  Lastfm,
  Spotify,
  WikipediaW,
  Youtube
} from '@styled-icons/fa-brands'
import { Download } from '@styled-icons/ionicons-outline'
import Link from 'next/link'
import { decodeBrokenUnicode } from '@/utils/decodeUnicode'
import { safeExternalUrl } from '@/utils/safeExternalUrl'
import type { AlbumCountry, AlbumGenre, AlbumLinks } from '@/api/types/Album'
import type { ReactNode } from 'react'

type AlbumInfoProps = {
  title: string | undefined
  artist: string | undefined
  year: string | undefined
  country: AlbumCountry | undefined
  genre: AlbumGenre[] | undefined
  social: AlbumLinks | undefined
}

type SocialLink = {
  key: keyof AlbumLinks
  title: string
  icon: ReactNode
}

const SOCIAL_LINKS: SocialLink[] = [
  { key: 'amazon', title: 'Amazon', icon: <Cart /> },
  { key: 'deezer', title: 'Deezer', icon: <Deezer /> },
  { key: 'download', title: 'Download', icon: <Download /> },
  { key: 'lastfm', title: 'Last.fm', icon: <Lastfm /> },
  { key: 'spotify', title: 'Spotify', icon: <Spotify /> },
  { key: 'youtube', title: 'YouTube', icon: <Youtube /> },
  { key: 'wikipedia', title: 'Wikipedia', icon: <WikipediaW /> }
]

export default function AlbumInfo({
  title,
  artist,
  country,
  genre,
  year,
  social
}: AlbumInfoProps) {
  return (
    <Infos>
      <InfosLinks>
        <InfosLinksButton>
          <PlayCircle />
        </InfosLinksButton>
        <InfosLinksList $opened={true}>
          {SOCIAL_LINKS.map(({ key, title: linkTitle, icon }) => {
            const href = safeExternalUrl(social?.[key])
            if (!href) return null

            return (
              <li key={key}>
                <InfosLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  title={linkTitle}
                >
                  {icon}
                </InfosLink>
              </li>
            )
          })}
        </InfosLinksList>
      </InfosLinks>
      <InfosHeader>
        <InfosTitle>{title}</InfosTitle>
        <InfosArtist>
          <span>{artist}</span>
        </InfosArtist>
      </InfosHeader>
      <InfosTags>
        {year ? (
          <InfosTag>
            <CalendarClear />
            <Link href={`/year/${year}`}>{year}</Link>
          </InfosTag>
        ) : null}
        {country?.slug ? (
          <InfosTag>
            <Location />
            <Link href={`/country/${country.slug}`}>{country.title}</Link>
          </InfosTag>
        ) : null}
        {genre?.length ? (
          <InfosTag>
            <Pricetag />
            {genre
              .filter((item) => item?.slug)
              .map((item, index, items) => (
                <Link key={item.slug} href={`/genre/${item.slug}`}>
                  {decodeBrokenUnicode(item?.title)}
                  {index + 1 < items.length && ', '}
                </Link>
              ))}
          </InfosTag>
        ) : null}
      </InfosTags>
    </Infos>
  )
}
