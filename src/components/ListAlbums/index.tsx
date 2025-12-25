import React from 'react'
import CardAlbum from '../CardAlbum'
import { List } from './styles'
import { Album } from '@/api/types/Album'

type ListAlbumsProps = {
  albums: Album[] | undefined
}

export default function ListAlbums({ albums }: ListAlbumsProps) {
  return (
    <>
      <List>
        {albums?.map((album) => (
          <li key={`album-${album.slug}`}>
            <CardAlbum
              artist={album.artist || ''}
              slug={album.slug || ''}
              cover={album.cover || ''}
              title={album.title || ''}
            />
          </li>
        ))}
      </List>
    </>
  )
}
