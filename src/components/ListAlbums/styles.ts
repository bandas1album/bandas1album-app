import styled from 'styled-components'

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
