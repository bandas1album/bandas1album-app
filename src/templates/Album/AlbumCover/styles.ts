import { ResultOf } from '@graphql-typed-document-node/core'
import { styled } from 'styled-components'

export const Cover = styled.figure<{ $bg: string }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 480px;
  margin: 0;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$bg});
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(20px);
  }

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
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`
