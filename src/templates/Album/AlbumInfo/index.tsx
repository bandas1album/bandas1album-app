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
import type { AlbumCountry, AlbumGenre, AlbumLinks } from '@/api/types/Album'

type AlbumInfoProps = {
  title: string | undefined
  artist: string | undefined
  year: string | undefined
  country: AlbumCountry | undefined
  genre: AlbumGenre[] | undefined
  social: AlbumLinks | undefined
}

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
          {social?.amazon ? (
            <li>
              <InfosLink
                target="_blank"
                href={social?.amazon || ''}
                title="Amazon"
              >
                <Cart />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {social?.deezer ? (
            <li>
              <InfosLink
                target="_blank"
                href={social?.deezer || ''}
                title="Deezer"
              >
                <Deezer />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {social?.download ? (
            <li>
              <InfosLink
                target="_blank"
                href={social?.download || ''}
                title="Download"
              >
                <Download />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {social?.lastfm ? (
            <li>
              <InfosLink
                target="_blank"
                href={social?.lastfm || ''}
                title="Last.fm"
              >
                <Lastfm />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {social?.spotify ? (
            <li>
              <InfosLink
                target="_blank"
                href={social?.spotify || ''}
                title="Spotify"
              >
                <Spotify />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {social?.youtube ? (
            <li>
              <InfosLink
                target="_blank"
                href={social?.youtube || ''}
                title="YouTube"
              >
                <Youtube />
              </InfosLink>
            </li>
          ) : (
            ''
          )}
          {social?.wikipedia ? (
            <li>
              <InfosLink
                target="_blank"
                href={social?.wikipedia || ''}
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
