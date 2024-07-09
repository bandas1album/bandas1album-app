import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 64px;
  padding-right: 16px;
  background-color: var(--color-primary-tint);

  @media (min-width: 376px) {
    justify-content: center;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
