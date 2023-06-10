import styled from 'styled-components'

export const Card = styled.div`
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

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
