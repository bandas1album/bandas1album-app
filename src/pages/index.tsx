import client from '@/graphql/client'
import { GET_ALBUMS } from '@/graphql/queries'
import { Album, GetAlbumsQuery } from '@/graphql/generated/graphql'
import HomeTemplate from '@/templates/Home'
import { useEffect, useState } from 'react'

export default function Home() {
  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() => {
    async function getAlbums() {
      const response = await client.request<GetAlbumsQuery>(GET_ALBUMS, {
        first: 96
      })
      const albums = response.albums?.nodes as Album[]

      setAlbums(albums)
    }

    if (!albums?.length) {
      getAlbums()
    }
  }, [albums])

  return <HomeTemplate albums={albums} />
}
