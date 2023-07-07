import { styled } from 'styled-components'

export const Cover = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 480px;
  margin: 0;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.25);
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`
