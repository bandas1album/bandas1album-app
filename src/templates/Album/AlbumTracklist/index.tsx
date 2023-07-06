import { Album_Acf_Tracklist, Maybe } from '@/graphql/generated/graphql'
import { List, ListTitle, ListWrapper } from './styles'

type AlbumTrackListProps = {
  list: Maybe<Maybe<Album_Acf_Tracklist>[]> | undefined
}

export default function AlbumTracklist({ list }: AlbumTrackListProps) {
  return (
    <ListWrapper>
      <ListTitle>Lista de faixas</ListTitle>
      <List>
        {list?.map((track, index) => (
          <li key={`track-${index}`}>
            <strong>{track?.title}</strong>
            <span>{track?.duration}</span>
          </li>
        ))}
      </List>
    </ListWrapper>
  )
}
