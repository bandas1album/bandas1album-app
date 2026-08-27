import styled, { css } from 'styled-components'

export const Wrapper = styled.section<{ $variant: 'intro' | 'content' }>`
  padding: 8px 24px;
  color: var(--color-primary-800);
  background-color: var(--color-primary-300);
  text-align: center;
  display: none;

  p {
    margin: 0 0 1em;
    line-height: 1.6;
  }

  p:last-child {
    margin-bottom: 0;
  }

  a {
    color: var(--color-light);
    text-decoration: underline;
  }

  ${({ $variant }) =>
    $variant === 'intro'
      ? css`
          font-size: 0.9375rem;
        `
      : css`
          font-size: 1rem;

          h2,
          h3 {
            margin: 1.25em 0 0.5em;
            font-size: 1.125rem;
            line-height: 1.3;
          }

          ul,
          ol {
            margin: 0 0 1em;
            padding-left: 1.25em;
          }
        `}
`
