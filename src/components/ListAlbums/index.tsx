import React from 'react'
import CardAlbum from '../CardAlbum'
import { List } from './styles'
import { InfiniteData } from '@tanstack/react-query'
import { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'

type ListAlbumsProps = {
  albums: InfiniteData<GetAlbumsResponse, unknown> | undefined
}

export default function ListAlbums({ albums }: ListAlbumsProps) {
  return (
    <>
      <List>
        {albums?.pages.map((page) =>
          page.data?.map((album) => (
            <li key={`album-${album.slug}`}>
              <CardAlbum
                artist={album.artist || ''}
                slug={album.slug || ''}
                cover={album.cover || ''}
                title={album.title || ''}
              />
            </li>
          ))
        )}
      </List>
    </>
  )
}
