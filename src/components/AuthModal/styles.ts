import styled from 'styled-components'
import { SwitchWrapper } from '../Switch/styles'
import { Button } from '@/styles/resets'

export const CloseModal = styled(Button)`
  position: absolute;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 8px;
  left: 8px;
  z-index: 10;
  background-color: transparent;
  color: var(--color-primary-500);
  border-radius: 4px;

  &:hover {
    color: var(--color-primary-400);
    background-color: var(--color-primary-50);
  }

  svg {
    width: 24px;
  }
`

export const AuthContainer = styled.div`
  width: 100%;
  margin: 24px auto auto;
`

export const ToggleButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  height: 100%;
  z-index: 9;
  transition: 0.2s ease width, 0.2s ease background-color;
  cursor: pointer;
  border: 0;

  &:hover {
    width: 32px;
  }
`

export const OpenButton = styled(ToggleButton)`
  left: 0;
  background-color: rgba(255 255 255 / 0);

  &:hover {
    background-color: rgba(255 255 255 / 10%);
  }
`

export const CloseButton = styled(ToggleButton)`
  right: 0;
  background-color: rgba(41 37 86 / 0);

  &:hover {
    background-color: rgba(41 37 86 / 10%);
  }
`

export const AuthOverlay = styled.div`
  position: relative;
`

export const AuthDrawer = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => (props.$open ? '100%' : '0')};
  height: 100%;
  overflow: hidden;
  padding: 24px 0;
  z-index: 9;
  background-color: var(--color-light);
  color: var(--color-primary-500);

  @media (min-width: 768px) {
    position: relative;
    width: ${(props) => (props.$open ? '400px' : '0')};
    transition: 0.2s width ease;
  }
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  width: calc(100% - 40px);
  max-width: 320px;
  text-align: center;

  ${SwitchWrapper} {
    margin: 16px 0;
  }
`

export const FormTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`

export const FormDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: rgba(0 0 0 / 50%);
`

export const AuthInfo = styled.p`
  padding: 0 24px;
  font-size: 0.75rem;
  color: rgba(0 0 0 / 40%);
  line-height: 1.5;
  text-align: center;

  a,
  span {
    color: rgba(0 0 0 / 40%);
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`

export const AuthMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  color: var(--color-warning-500);
  font-size: 0.75rem;
  background-color: rgba(235 138 101 / 15%);
  text-align: left;

  p {
    margin: 0;
    line-height: 1.5;
  }
`

export const AuthForgot = styled(Button)`
  font-weight: 600;
  color: var(--color-primary-500);
  text-align: left;
  font-size: 0.875rem;
  line-height: 2;

  &:hover {
    color: var(--color-primary-400);
    text-decoration: underline;
  }
`

export const ViewSuccess = styled.div`
  padding: 0 40px;
`

export const ViewTitle = styled.h1`
  margin: 0 auto 24px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
`

export const ViewSubtitle = styled.h1`
  margin: 0 auto 24px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
`
