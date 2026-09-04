import styled from 'styled-components'
import { Button } from '@/styles/resets'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: max-content;
  grid-gap: 8px;
  margin: 0;
  padding: 8px;
  list-style: none;
  flex: 1;

  li {
    aspect-ratio: 1/1;
  }
`

export const Loading = styled.div``

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 8px 32px;
`

export const LoadMoreButton = styled(Button)`
  min-width: 160px;
  height: 48px;
  padding: 0 24px;
  font-weight: 600;
  border-radius: 8px;
  color: var(--color-light);
  background-color: var(--color-primary-500);

  &:hover:not(:disabled) {
    background-color: var(--color-primary-300);
  }

  &:disabled {
    background-color: rgba(0 0 0 / 25%);
    color: var(--color-light);
  }
`