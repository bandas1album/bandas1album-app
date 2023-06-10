import CardAlbum, { AlbumProps } from '../CardAlbum'
import { List } from './styles'

type ListAlbumsProps = {
  items: AlbumProps[]
}

const ListAlbums = ({ items }: ListAlbumsProps) => {
  return (
    <List>
      {items.map(({ artist, slug, cover, title }) => (
        <CardAlbum
          key={`album-${slug}`}
          artist={artist}
          slug={slug}
          cover={cover}
          title={title}
        />
      ))}
    </List>
  )
}

export default ListAlbums
