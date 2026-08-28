import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: none;
  height: 64px;
  padding: 0 16px;
  background-color: var(--color-primary-400);
  text-align: center;
`

export const HeaderActions = styled.div`
  width: 32px;
  height: 32px;
`

export const HeaderTitle = styled.h1`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const Playlists = styled.nav`
  display: flex;
  gap: 8px;
  min-width: 32px;
`

export const PlaylistLink = styled.a`
  color: var(--color-light);

  &:hover,
  &:focus-visible {
    opacity: 0.8;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`
