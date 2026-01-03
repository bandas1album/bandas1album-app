import { Button } from '@/styles/resets'
import styled from 'styled-components'

export const Actions = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
`

export const ActionButton = styled(Button)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 32px;
  height: 32px;
  padding: 0 6px;
  background-color: ${(props) =>
    props.$active ? 'var(--color-primary-500)' : 'var(--color-light)'};
  color: ${(props) =>
    props.$active ? 'var(--color-light)' : 'var(--color-primary-500)'};
  border-radius: 80px;
  overflow: hidden;

  svg {
    width: 20px;
    flex: none;
  }

  span {
    font-size: 0.875rem;
    font-weight: 600;
    white-space: nowrap;
    margin-right: 4px;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  &:hover {
    width: auto;
  }

  &:disabled {
    pointer-events: none;
    background-color: var(--color-primary-100);
    color: var(--color-primary-300);
  }
`
