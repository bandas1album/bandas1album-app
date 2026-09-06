import React from 'react'
import ButtonBack from '../Buttons/ButtonBack'
import {
  Header,
  HeaderActions,
  HeaderImage,
  HeaderTitle,
  PlaylistLink,
  Playlists
} from './styles'
import { ListingPagePlaylists } from '@/api/Albums/GetAlbums/types'
import { Spotify, Youtube } from '@styled-icons/fa-brands'
import { safeExternalUrl } from '@/utils/safeExternalUrl'

export default function PageHeader({
  children,
  hideBack,
  playlists,
  image,
  imageAlt
}: {
  children: React.ReactNode
  hideBack?: boolean
  playlists?: ListingPagePlaylists
  image?: string | null
  imageAlt?: string
}) {
  const spotify = safeExternalUrl(playlists?.spotify)
  const youtube = safeExternalUrl(playlists?.youtube)

  return (
    <Header>
      <HeaderActions>{!hideBack && <ButtonBack></ButtonBack>}</HeaderActions>
      <HeaderTitle>
        {image ? (
          <HeaderImage src={image} alt={imageAlt || ''} width={40} height={40} />
        ) : null}
        <span>{children}</span>
      </HeaderTitle>
      <Playlists aria-label="Playlists">
        {spotify ? (
          <PlaylistLink
            href={spotify}
            target="_blank"
            rel="noopener noreferrer"
            title="Playlist no Spotify"
          >
            <Spotify />
          </PlaylistLink>
        ) : null}
        {youtube ? (
          <PlaylistLink
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            title="Playlist no YouTube"
          >
            <Youtube />
          </PlaylistLink>
        ) : null}
      </Playlists>
    </Header>
  )
}
