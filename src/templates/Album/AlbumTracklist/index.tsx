import { Maybe, Scalars } from '@/graphql/generated/graphql'
import { List, ListTitle, ListWrapper } from './styles'

type AlbumTrackListProps = {
  list: Maybe<Scalars['JSON']['output']> | undefined
}

export default function AlbumTracklist({ list }: AlbumTrackListProps) {
  return (
    <ListWrapper>
      <ListTitle>Lista de faixas</ListTitle>
      <List>
        {list?.map(
          (
            track: {
              title: string
              duration: string
            },
            index: number
          ) => (
            <li key={`track-${index}`}>
              <strong>{track?.title}</strong>
              <span>{track?.duration}</span>
            </li>
          )
        )}
      </List>
    </ListWrapper>
  )
}
