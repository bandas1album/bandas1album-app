import client from '@/graphql/client'
import { GET_ALBUMS } from '@/graphql/queries'
import { Album, GetAlbumsQuery } from '@/graphql/generated/graphql'
import React, { useEffect, useState } from 'react'
import CardAlbum from '../CardAlbum'
import { List } from './styles'
import { isMiddleOnScroll } from '@/utils/isMiddleOnScroll'

export default function ListAlbums() {
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState<Album[]>([])
  const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(false)
  const [endCursor, setEndCursor] = useState<string | null | undefined>('')

  const handleScroll = (e: React.UIEvent<HTMLUListElement>): void => {
    const $el = e.target as HTMLUListElement

    if (isMiddleOnScroll($el) && hasNextPage && !loading) {
      getAlbums(endCursor)
    }
  }

  const getAlbums = async (cursor: string | null | undefined) => {
    setLoading(true)
    const response = await client.request<GetAlbumsQuery>(GET_ALBUMS, {
      first: 96,
      after: cursor
    })

    const responseList = response.albums?.nodes as Album[]
    setAlbums((albums) => [...albums, ...responseList])
    setHasNextPage(response.albums?.pageInfo.hasNextPage)
    setEndCursor(response.albums?.pageInfo.endCursor)
    setLoading(false)
  }

  useEffect(() => {
    getAlbums(null)
  }, [])

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
