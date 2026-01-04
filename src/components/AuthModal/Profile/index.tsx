import { useAuth } from '@/contexts/AuthContext'
import * as W from '../styles'
import * as S from './styles'
import { Exit, Headset, Pencil, Push, Star } from '@styled-icons/ionicons-solid'
import Image from 'next/image'

export default function AuthProfile() {
  const { logout, user } = useAuth()
  return (
    <>
      <W.ViewTitle>Profile</W.ViewTitle>
      <S.UserInfos>
        <S.Avatar>
          <Image width={80} height={80} src={user?.avatar || ''} alt={user?.name || ''} />
          <S.AvatarEdit>
            <Pencil size={16} />
          </S.AvatarEdit>
        </S.Avatar>
        <S.Name>{user?.name.split(' ')[0]}</S.Name>
        <S.Email>{user?.email}</S.Email>
      </S.UserInfos>
      <S.UserStats>
        <S.Stat>
          <S.StatIcon>
            <Headset />
          </S.StatIcon>
          <S.StatValue>{user?.stats.listened}</S.StatValue>
          <S.StatTitle>Álbuns ouvidos</S.StatTitle>
        </S.Stat>
        <S.Stat>
          <S.StatIcon>
            <Star />
          </S.StatIcon>
          <S.StatValue>{user?.stats.favorited}</S.StatValue>
          <S.StatTitle>Álbuns favoritados</S.StatTitle>
        </S.Stat>
        <S.Stat>
          <S.StatIcon>
            <Push />
          </S.StatIcon>
          <S.StatValue>{user?.stats.published}</S.StatValue>
          <S.StatTitle>Álbuns publicados</S.StatTitle>
        </S.Stat>
      </S.UserStats>
      <S.UserMenu>
        <S.UserMenuItem onClick={() => logout()}>
          <Exit />
          <span>Sair</span>
        </S.UserMenuItem>
      </S.UserMenu>
    </>
  )
}
