import { decodeBrokenUnicode } from '@/utils/decodeUnicode'
import { List, ListTitle, ListWrapper } from './styles'
import type { AlbumTrack } from '@/api/types/Album'

type AlbumTrackListProps = {
  list: AlbumTrack[] | undefined
}

export default function AlbumTracklist({ list }: AlbumTrackListProps) {
  return (
    <ListWrapper>
      <ListTitle>Lista de faixas</ListTitle>
      <List>
        {list?.map((track, index) => (
          <li key={`track-${index}`}>
            <strong>{decodeBrokenUnicode(track.name)}</strong>
            <span>{track.duration}</span>
          </li>
        ))}
      </List>
    </ListWrapper>
  )
}
