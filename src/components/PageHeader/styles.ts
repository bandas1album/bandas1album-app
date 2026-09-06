import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: none;
  height: 64px;
  padding: 0 32px;
  background-color: var(--color-primary-400);
  text-align: center;
`

export const HeaderActions = styled.div`
  width: 32px;
  height: 32px;
`

export const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const HeaderImage = styled.img`
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--color-primary-500, rgba(0, 0, 0, 0.15));
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
