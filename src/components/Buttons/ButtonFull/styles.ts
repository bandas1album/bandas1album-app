import styled from 'styled-components'

export const Button = styled.button<{ $style: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 48px;
  font-weight: 600;
  border-radius: 8px;
  border: ${(props) =>
    props.$style === 'outlined' ? '1px solid var(--color-primary-500)' : 0};
  color: ${(props) =>
    props.$style === 'filled'
      ? 'var(--color-light)'
      : 'var(--color-primary-500)'};
  cursor: pointer;
  background-color: ${(props) =>
    props.$style === 'filled' ? 'var(--color-primary-500)' : 'transparent'};

  &:hover {
    background-color: ${(props) =>
      props.$style === 'filled' ? 'var(--color-primary-300)' : 'transparent'};
    border-color: ${(props) =>
      props.$style === 'outlined' ? 'var(--color-primary-300)' : 'transparent'};
    color: ${(props) =>
      props.$style === 'filled'
        ? 'var(--color-light)'
        : 'var(--color-primary-300)'};
  }

  &:disabled {
    background-color: ${(props) =>
      props.$style === 'filled' ? 'rgba(0 0 0 / 25%)' : 'transparent'};
    border-color: ${(props) =>
      props.$style === 'outlined' ? 'rgba(0 0 0 / 25%)' : 'transparent'};
    color: ${(props) =>
      props.$style === 'filled' ? 'var(--color-light)' : 'rgba(0 0 0 / 25%)'};
    pointer-events: none;
  }

  svg {
    width: 16px;
  }
`
