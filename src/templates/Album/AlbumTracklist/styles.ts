import { styled } from 'styled-components'

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 24px;
`

export const List = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  strong,
  span {
    font-weight: 400;
  }
`

export const ListTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`
