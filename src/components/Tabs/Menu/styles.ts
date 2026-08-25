import { styled } from 'styled-components'

export const MenuNav = styled.nav`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 80px - 32px);
  padding: 24px 24px 56px;
  border-radius: 16px 16px 0 0;
  background-color: var(--color-primary-700);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  user-select: none;
`

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  flex: 1;

  > li:not(:last-child) {
    margin-bottom: 16px;
  }

  [open] {
    summary {
      background-color: var(--color-primary-400);
    }

    svg {
      transform: rotate(180deg);
    }

    ul {
      display: block;
    }
  }
`

export const Submenu = styled.ul<{ $loading: boolean }>`
  max-height: 200px;
  overflow-y: ${(props) => (props.$loading ? 'hidden' : 'auto')};
  margin: -24px 0 0 0;
  padding: 40px 24px 24px;
  list-style: none;
  background-color: var(--color-primary-500);
  border-radius: 0 0 16px 16px;
  opacity: ${(props) => (props.$loading ? '.5' : '1')};

  > li {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-light);
  }
`

export const MenuTitle = styled.summary`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 24px;
  border-radius: 20px;
  background-color: var(--color-primary-500);
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-light);
  cursor: pointer;

  svg {
    width: 24px;
    margin-left: auto;
    transform: rotate(0deg);
  }
`

export const MenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin: 16px auto 0;
  line-height: 16px;
  text-align: center;

  strong {
    font-size: 12px;
    color: var(--color-light);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--color-light);
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;

    svg {
      width: 16px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
    font-size: 12px;
    font-weight: 500;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  a {
    color: var(--color-primary-300);
    text-decoration: none;

    &:hover {
      color: var(--color-light);
      text-decoration: underline;
    }
  }
`

export const MenuSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin: 16px 0 0;
  padding: 8px 0;
  list-style: none;
  background-color: var(--color-primary-500);
  border-radius: 20px;
  gap: 24px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--color-light);
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(0.5);
    }
  }

  svg {
    width: 24px;
  }
`
