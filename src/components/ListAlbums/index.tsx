import React from 'react'
import CardAlbum from '../CardAlbum'
import { List } from './styles'
import { RootQueryToAlbumConnection } from '@/graphql/generated/graphql'

type ListAlbumsProps = {
  albums: RootQueryToAlbumConnection['nodes']
  handleScroll: (e: React.UIEvent<HTMLUListElement>) => void
}

export default function ListAlbums({ albums, handleScroll }: ListAlbumsProps) {
  return (
    <>
      <List onScroll={handleScroll}>
        {albums.map((album) => (
          <li key={`album-${album.id}`}>
            <CardAlbum
              artist={album.acf?.artist || ''}
              slug={album.slug || ''}
              cover={album.featuredImage?.node.sourceUrl || ''}
              title={album.title || ''}
            />
          </li>
        ))}
      </List>
    </>
  )
}
