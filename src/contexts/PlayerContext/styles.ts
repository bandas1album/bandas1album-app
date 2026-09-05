import { styled } from 'styled-components'

export const PlayerHost = styled.div<{ $visible: boolean }>`
  position: fixed;
  right: 16px;
  bottom: 88px;
  z-index: 40;
  width: 214px;
  height: 120px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '12px')});
  transition: opacity 0.2s ease, transform 0.2s ease;

  iframe,
  #bandas1album-yt-player {
    display: block;
    width: 214px;
    height: 120px;
  }

  @media (max-width: 720px) {
    right: 12px;
    bottom: 80px;
    width: 160px;
    height: 90px;

    iframe,
    #bandas1album-yt-player {
      width: 160px;
      height: 90px;
    }
  }
`
