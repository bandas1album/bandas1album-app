import styled from 'styled-components'

export const SwitchWrapper = styled.div`
  input {
    display: none;
  }
`

export const Switch = styled.label`
  display: flex;
  gap: 4px;
  width: 100%;
  border-radius: 8px;
  border: 4px solid #eee;
  background-color: #eee;
`

export const SwitchLabel = styled.span<{ $active: boolean }>`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.$active ? 600 : 300)};
  background-color: ${(props) => props.$active && 'var(--color-light)'};
  color: ${(props) => !props.$active && 'rgba(0 0 0 / 50%)'};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s background-color ease;

  &:hover {
    background-color: ${(props) =>
      props.$active ? 'rgba(255 255 255 / 80%)' : 'rgba(255 255 255 / 30%)'};
  }
`
