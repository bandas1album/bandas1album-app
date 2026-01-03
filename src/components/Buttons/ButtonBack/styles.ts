import styled from 'styled-components'
import { Button } from './../../../styles/resets'

export const Back = styled(Button)`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-primary-500);
  color: var(--color-light);
  border-radius: 50%;
`
