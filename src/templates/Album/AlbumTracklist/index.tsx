import { decodeBrokenUnicode } from '@/utils/decodeUnicode'
import { List, ListTitle, ListWrapper } from './styles'

type AlbumTrackListProps = {
  list: any | undefined
}

export default function AlbumTracklist({ list }: AlbumTrackListProps) {
  return (
    <ListWrapper>
      <ListTitle>Lista de faixas</ListTitle>
      <List>
        {list?.map(
          (
            track: {
              name: string
              duration: string
            },
            index: number
          ) => (
            <li key={`track-${index}`}>
              <strong>{decodeBrokenUnicode(track?.name)}</strong>
              <span>{track?.duration}</span>
            </li>
          )
        )}
      </List>
    </ListWrapper>
  )
}
