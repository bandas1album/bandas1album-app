import styled from 'styled-components'

export const FormLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  font-size: 0.875rem;
  transform: translateY(-50%);
  transition: 0.2s transform ease, 0.2s font-size ease;
  pointer-events: none;
  color: rgba(0 0 0 / 50%);
`

export const FormInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background-color: transparent;
  border: 0;
  font-size: 0.875rem;
  outline: 0;

  &::placeholder {
    color: transparent;
  }

  &:focus,
  &:valid {
    padding-top: 12px;
  }
`

export const FormControlWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  position: relative;
  border: 2px solid rgba(0 0 0 / 20%);
  border-radius: 8px;

  &:has(input:focus) {
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px rgba(41 37 86 / 10%);
  }

  &:has(input:focus),
  &:has(input:not(:placeholder-shown)) {
    ${FormLabel} {
      transform: translateY(-20px);
      font-size: 0.7rem;
    }
  }

  &:has(input:valid:not(:placeholder-shown)) {
    border-color: var(--color-primary-500);
    color: var(--color-primary-500);
  }

  &:has(input:invalid:not(:placeholder-shown)) {
    border-color: var(--color-warning-500);
    color: var(--color-warning-500);
  }

  svg {
    width: 16px;
    height: 16px;
    margin: 0 16px;
    flex: none;
  }
`

export const FormControl = styled.div`
  position: relative;
  border-left: 1px solid #eee;
  width: 100%;
`

export const FormControlMessage = styled.div``
