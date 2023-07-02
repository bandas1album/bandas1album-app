import CardAlbum from '../CardAlbum'
import { List } from './styles'
import { Album } from '@/graphql/generated/graphql'

type ListAlbumsProps = {
  albums: Album[]
}

export default function ListAlbums({ albums }: ListAlbumsProps) {
  return (
    <List>
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
  )
}
