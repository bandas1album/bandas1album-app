import {
  Star as StarOutlined,
  Headset as HeadsetOutlined
} from '@styled-icons/ionicons-outline'
import {
  Star as StarFilled,
  Headset as HeadsetFilled
} from '@styled-icons/ionicons-solid'
import * as S from './styles'
import { useGetAlbumFlags } from '@/api/Albums/GetAlbumFlags'
import { useAuth } from '@/contexts/AuthContext'
import { useAuthUI } from '@/contexts/AuthUIContext'
import { usePatchAlbumFlags } from '@/api/Albums/PatchAlbumFlags'
import { useGetUser } from '@/api/Auth/GetUser'

type TAlbumUserActions = {
  id: number
}

export const AlbumUserActions = ({ id }: TAlbumUserActions) => {
  const { token, refetchUser } = useAuth()
  const { open } = useAuthUI()
  const { data: isFavorited, refetch: refetchFavorited } = useGetAlbumFlags({
    type: 'favorited',
    id,
    token
  })
  const { data: isListened, refetch: refetchListened } = useGetAlbumFlags({
    type: 'listened',
    id,
    token
  })
  const { mutateAsync: mutateFlag } = usePatchAlbumFlags()

  const doFavorite = () => {
    if (!token) {
      return open('login')
    }

    mutateFlag({ id, token, type: 'favorited' }).then(() => {
      refetchFavorited()
      refetchUser()
    })
  }

  const doListened = () => {
    if (!token) {
      return open('login')
    }

    mutateFlag({ id, token, type: 'listened' }).then(() => {
      refetchListened()
      refetchUser()
    })
  }

  return (
    <S.Actions>
      <S.ActionButton
        $active={!!isFavorited?.active}
        disabled={false}
        onClick={() => doFavorite()}
      >
        {isFavorited?.active ? <StarFilled /> : <StarOutlined />}
        <span>
          {isFavorited?.active ? 'Desmarcar' : 'Marcar'} como favorito
        </span>
      </S.ActionButton>
      <S.ActionButton
        $active={!!isListened?.active}
        disabled={false}
        onClick={() => doListened()}
      >
        {isListened?.active ? <HeadsetFilled /> : <HeadsetOutlined />}
        <span>{isListened?.active ? 'Desmarcar' : 'Marcar'} como ouvido</span>
      </S.ActionButton>
    </S.Actions>
  )
}
