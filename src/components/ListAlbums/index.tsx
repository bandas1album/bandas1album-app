import React from 'react'
import CardAlbum from '../CardAlbum'
import { List } from './styles'
import { AlbumConnection } from '@/graphql/generated/graphql'

type ListAlbumsProps = {
  albums: AlbumConnection['nodes']
  handleScroll: (e: React.UIEvent<HTMLUListElement>) => void
  loading: 'eager' | 'lazy' | undefined
}

export default function ListAlbums({
  albums,
  handleScroll,
  loading
}: ListAlbumsProps) {
  return (
    <>
      <List onScroll={handleScroll}>
        {albums.map((album) => (
          <li key={`album-${album.id}`}>
            <CardAlbum
              artist={album.acf?.artist || ''}
              slug={album.slug || ''}
              cover={
                album.featuredImage?.node.mediaDetails?.sizes?.[0]?.sourceUrl ||
                ''
              }
              title={album.title || ''}
              loading={loading}
            />
          </li>
        ))}
      </List>
    </>
  )
}
