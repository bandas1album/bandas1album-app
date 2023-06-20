import { styled } from 'styled-components'

export const Card = styled.article`
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s background-color ease, 0.2s box-shadow ease;
  gap: 0 12px;

  &:has(img):hover {
    background-color: var(--color-primary-shade);
    box-shadow: 0 0 0 4px var(--color-primary-shade);
  }
`

export const CardImage = styled.figure`
  display: block;
  width: 48px;
  height: 48px;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`

export const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  line-height: 120%;
`

export const CardSubtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  line-height: 120%;
  opacity: 0.5;
`
