import { AlbumProps } from '@/types'
import CardAlbum from '../CardAlbum'
import { List } from './styles'

type ListAlbumsProps = {
  albums: AlbumProps[]
}

export default function ListAlbums({ albums }: ListAlbumsProps) {
  return (
    <List>
      {albums.map((album) => (
        <li key={`album-${album.id}`}>
          <CardAlbum
            id={album.id}
            artist={album.artist}
            slug={album.slug}
            cover={album.cover.url}
            title={album.title}
          />
        </li>
      ))}
    </List>
  )
}
