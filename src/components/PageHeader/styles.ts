import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  flex: none;
  height: 64px;
  padding-left: 64px;
  padding-right: 16px;
  background-color: var(--color-primary-400);

  @media (min-width: 376px) {
    padding-left: 0;
    justify-content: center;
  }
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
`

export const PlaylistLink = styled.a`
  color: var(--color-light);

  &:hover,
  &:focus-visible {
    opacity: .8;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`
