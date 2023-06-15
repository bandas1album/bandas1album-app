import { Button, Input } from '../../../styles/resets'
import { styled } from 'styled-components'

export const SearchForm = styled.form`
  padding-bottom: 40px;
  border-radius: 16px 16px 0 0;
  background-color: var(--color-primary);
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`

export const SearchControl = styled.div`
  position: relative;
`

export const SearchInput = styled(Input)`
  width: 100%;
  height: 48px;
  padding: 0 24px;
  font-weight: 500;
  background-color: var(--color-primary);
  color: var(--color-light);
  transition: 0.2s background-color ease;

  &:focus {
    background-color: var(--color-primary-shade);
  }

  &::placeholder {
    color: var(--color-light);
    opacity: 0.4;
  }
`

export const SearchHelp = styled(Button)`
  position: absolute;
  top: 50%;
  right: 24px;
  display: flex;
  transform: translateY(-50%);
  font-size: 24px;
  color: var(--color-light);

  &.show {
    &::before {
      content: '';
      position: absolute;
      top: 32px;
      right: 4px;
      width: 0;
      height: 0;
      display: block;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid rgba(255, 255, 255, 0.1);
    }

    &::after {
      content: attr(aria-label);
      position: absolute;
      top: 40px;
      right: -8px;
      width: 240px;
      padding: 8px;
      font-size: 14px;
      line-height: 120%;
      text-align: left;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(24px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`

export const SearchAutocomplete = styled.ul`
  margin: 0;
  padding: 24px;
  list-style: none;
  font-weight: 500;

  li:not(:last-child) {
    margin-bottom: 12px;
  }

  a {
    color: var(--color-light);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
