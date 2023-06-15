import { styled } from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  text-align: center;
  background-color: transparent;
  outline: 0; // Estilizar o outline com box-shadow

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
`
