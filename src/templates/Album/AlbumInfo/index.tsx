import {
  Infos,
  InfosArtist,
  InfosContent,
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
  WikipediaW,
  Youtube
} from '@styled-icons/fa-brands'
import { Download } from '@styled-icons/ionicons-outline'
import Link from 'next/link'
import Markdown from 'react-markdown'

type AlbumInfoProps = {
  title: string | undefined
  artist: string | undefined
  year: string | undefined
  country: any | undefined
  genre: any[] | undefined
  social: {
    [key: string]: string
  }
  content: string | undefined
}

export default function AlbumInfo({
  title,
  artist,
  country,
  genre,
  year,
  social,
  content
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
                <Amazon />
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
        <InfosTag>
          <CalendarClear />
          <Link href={`/year/${year}`}>{year}</Link>
        </InfosTag>
        <InfosTag>
          <Location />
          <Link href={`/country/${country?.slug}`}>{country?.title}</Link>
        </InfosTag>
        <InfosTag>
          <Pricetag />
          {genre?.map((item, index) => (
            <>
              <Link key={`genre-${index}`} href={`/genre/${item?.slug}`}>
                {item?.title}
                {index + 1 < genre.length && ', '}
              </Link>
            </>
          ))}
        </InfosTag>
      </InfosTags>
      <InfosContent>
        <Markdown skipHtml={true}>{content}</Markdown>
      </InfosContent>
    </Infos>
  )
}
