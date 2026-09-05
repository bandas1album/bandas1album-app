import React from 'react'
import ButtonBack from '../Buttons/ButtonBack'
import {
  Header,
  HeaderActions,
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
  playlists
}: {
  children: React.ReactNode
  hideBack?: boolean
  playlists?: ListingPagePlaylists
}) {
  const spotify = safeExternalUrl(playlists?.spotify)
  const youtube = safeExternalUrl(playlists?.youtube)

  return (
    <Header>
      <HeaderActions>{!hideBack && <ButtonBack></ButtonBack>}</HeaderActions>
      <HeaderTitle>{children}</HeaderTitle>
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
