import React from 'react'
import CardAlbum from '../CardAlbum'
import { List } from './styles'
import { AlbumEntity } from '@/graphql/generated/graphql'

type ListAlbumsProps = {
  albums: Array<AlbumEntity>
  handleScroll: (e: React.UIEvent<HTMLUListElement>) => void
  loading: 'eager' | 'lazy' | undefined
}

export default function ListAlbums({
  albums,
  handleScroll,
  loading
}: ListAlbumsProps) {
  const uniqueIds = new Set()

  const uniqueAlbums = albums.filter((album) => {
    if (uniqueIds.has(album.id)) {
      return false
    } else {
      uniqueIds.add(album.id)
      return true
    }
  })

  return (
    <>
      <List onScroll={handleScroll}>
        {uniqueAlbums.map((album) => (
          <li key={`album-${album.id}`}>
            <CardAlbum
              artist={album.attributes?.artist || ''}
              slug={album.attributes?.slug || ''}
              cover={album.attributes?.cover.data?.attributes?.url || ''}
              title={album.attributes?.title || ''}
              loading={loading}
            />
          </li>
        ))}
      </List>
    </>
  )
}
