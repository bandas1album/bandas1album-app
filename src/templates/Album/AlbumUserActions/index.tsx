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
import { gaEvent } from '@/lib/gtag'

type TAlbumUserActions = {
  id: number
  albumSlug?: string
}

export const AlbumUserActions = ({ id, albumSlug }: TAlbumUserActions) => {
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
      gaEvent('login_prompt', { reason: 'album_favorite', album_id: id })
      return open('login')
    }

    const willActivate = !isFavorited?.active

    mutateFlag({ id, token, type: 'favorited' }).then(() => {
      refetchFavorited()
      refetchUser()
      gaEvent('album_engagement', {
        type: 'favorited',
        active: willActivate,
        album_id: id,
        ...(albumSlug ? { album_slug: albumSlug } : {})
      })
    })
  }

  const doListened = () => {
    if (!token) {
      gaEvent('login_prompt', { reason: 'album_listened', album_id: id })
      return open('login')
    }

    const willActivate = !isListened?.active

    mutateFlag({ id, token, type: 'listened' }).then(() => {
      refetchListened()
      refetchUser()
      gaEvent('album_engagement', {
        type: 'listened',
        active: willActivate,
        album_id: id,
        ...(albumSlug ? { album_slug: albumSlug } : {})
      })
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
