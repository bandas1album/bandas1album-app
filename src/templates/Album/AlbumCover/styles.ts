import { styled } from 'styled-components'

export const CoverFrame = styled.figure<{
  $bg: string
  $playerActive: boolean
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  max-height: 480px;
  margin: 0;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
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
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.25);
    pointer-events: none;
    opacity: ${({ $playerActive }) => ($playerActive ? 0 : 1)};
    transition: opacity 0.2s ease;
  }
`

export const CoverImageWrap = styled.div<{ $hidden: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 0.2s ease;
  pointer-events: none;
`

export const PlayerSlot = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  z-index: ${({ $active }) => ($active ? 3 : 0)};
  width: 100%;
  height: 100%;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.2s ease;

  iframe {
    width: 100% !important;
    height: 100% !important;
    border: 0;
  }
`
