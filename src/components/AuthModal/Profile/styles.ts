import { Button } from '@/styles/resets'
import styled from 'styled-components'

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Avatar = styled.div`
  position: relative;
  width: 104px;
  height: 104px;
  margin: 0 auto 32px;

  img {
    display: block;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`

export const AvatarEdit = styled.button`
  position: absolute;
  bottom: -16px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 2px solid var(--color-light);
  background-color: var(--color-primary-500);
  color: var(--color-light);

  &:hover {
    background-color: var(--color-primary-400);
  }
`

export const Name = styled.h2`
  margin: 0 auto 8px;
  font-size: 1.5rem;
`

export const Email = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-primary-200);
`

export const UserStats = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  margin: 40px auto;
`

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  width: 80px;
`

export const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-primary-100);

  svg {
    width: 24px;
  }
`

export const StatValue = styled.div`
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 600;
`

export const StatTitle = styled.div`
  line-height: 1.2;
  font-size: 0.75rem;
  color: var(--color-primary-300);
`

export const UserMenu = styled.nav`
  margin: 8px 24px;
  border-radius: 8px;
  overflow: hidden;
`

export const UserMenuItem = styled(Button)`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background-color: var(--color-primary-50);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary-500);

  &:hover {
    background-color: var(--color-primary-100);
    color: var(--color-primary-600);
  }

  svg {
    width: 24px;
  }
`
