import Link from 'next/link'
import styled from 'styled-components'

export const Card = styled.article`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--color-primary-shade);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: transparent;
    transition: 0.2s background-color ease;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.25);
  }
`

export const CardLink = styled(Link)`
  text-decoration: none;
`

export const CardImage = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  margin: 0;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardTitle = styled.figcaption`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  color: var(--color-light);

  strong {
    font-size: 1rem;
  }

  span {
    font-size: 0.75rem;
  }
`
