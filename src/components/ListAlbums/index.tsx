import React from 'react'
import CardAlbum from '../CardAlbum'
import { List, LoadMore, LoadMoreButton } from './styles'
import { InfiniteData } from '@tanstack/react-query'
import { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'

type ListAlbumsProps = {
  albums: InfiniteData<GetAlbumsResponse, unknown> | undefined
  hasNextPage?: boolean
  isFetchingNextPage?: boolean
  onLoadMore?: () => void
}

export default function ListAlbums({
  albums,
  hasNextPage = false,
  isFetchingNextPage = false,
  onLoadMore
}: ListAlbumsProps) {
  return (
    <div aria-busy={isFetchingNextPage || undefined}>
      <List>
        {albums?.pages?.map((page) =>
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
      {hasNextPage && onLoadMore && (
        <LoadMore>
          <LoadMoreButton
            type="button"
            onClick={onLoadMore}
            disabled={isFetchingNextPage}
            aria-busy={isFetchingNextPage || undefined}
          >
            {isFetchingNextPage ? 'Carregando…' : 'Carregar mais'}
          </LoadMoreButton>
        </LoadMore>
      )}
    </div>
  )
}
