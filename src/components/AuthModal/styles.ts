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
  max-width: 320px;
  min-width: 0;
  margin: 24px auto auto;
  flex-shrink: 0;
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
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 100vw;
  height: 100dvh;
  max-height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: max(16px, env(safe-area-inset-top)) 16px
    max(16px, env(safe-area-inset-bottom));
  z-index: 9;
  background-color: var(--color-light);
  color: var(--color-primary-500);
  box-sizing: border-box;
  visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.$open ? 'auto' : 'none')};

  @media (min-width: 768px) {
    position: relative;
    inset: auto;
    width: ${(props) => (props.$open ? '400px' : '0')};
    height: 100%;
    max-height: none;
    padding: 24px 0;
    visibility: visible;
    pointer-events: auto;
    transition: 0.2s width ease;
  }
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  width: 100%;
  max-width: 320px;
  min-width: 0;
  text-align: center;

  ${SwitchWrapper} {
    margin: 16px 0;
  }
`

export const FormTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`

export const FormDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: rgba(0 0 0 / 50%);
`

export const AuthInfo = styled.p`
  width: 100%;
  max-width: 320px;
  min-width: 0;
  padding: 0 8px;
  font-size: 0.75rem;
  color: rgba(0 0 0 / 40%);
  line-height: 1.5;
  text-align: center;
  overflow-wrap: anywhere;

  a {
    color: rgba(0 0 0 / 40%);
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`

export const InlineLink = styled.button`
  display: inline;
  padding: 0;
  border: 0;
  background: none;
  color: rgba(0 0 0 / 40%);
  font: inherit;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`

export const DialogTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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
  width: 100%;
  max-width: 320px;
  min-width: 0;
  padding: 0 8px;
  box-sizing: border-box;
`

export const ViewTitle = styled.h2`
  margin: 0 auto 24px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
`

export const ViewSubtitle = styled.p`
  margin: 0 auto 24px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
`
