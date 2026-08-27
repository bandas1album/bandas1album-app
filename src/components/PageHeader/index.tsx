import React from 'react'
import ButtonBack from '../Buttons/ButtonBack'
import { Header, HeaderTitle, PlaylistLink, Playlists } from './styles'
import { ListingPagePlaylists } from '@/api/Albums/GetAlbums/types'
import { Spotify, Youtube } from '@styled-icons/fa-brands'

export default function PageHeader({
  children,
  hideBack,
  playlists
}: {
  children: React.ReactNode
  hideBack?: boolean
  playlists?: ListingPagePlaylists
}) {
  return (
    <Header>
      {!hideBack && <ButtonBack></ButtonBack>}
      <HeaderTitle>{children}</HeaderTitle>
      <Playlists aria-label="Playlists">
        {playlists?.spotify ? (
          <PlaylistLink
            href={playlists.spotify}
            target="_blank"
            rel="noopener noreferrer"
            title="Playlist no Spotify"
          >
            <Spotify />
          </PlaylistLink>
        ) : null}
        {playlists?.youtube ? (
          <PlaylistLink
            href={playlists.youtube}
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
