import Link from 'next/link'
import { styled, createGlobalStyle } from 'styled-components'

export const PlayerChromeReset = createGlobalStyle`
  .album-persistent-player {
    .plyr,
    .plyr__video-wrapper,
    .plyr__poster {
      width: 100% !important;
      height: 100% !important;
      background: transparent !important;
    }

    .plyr {
      --plyr-video-background: transparent;
    }

    .plyr__controls,
    .plyr__control,
    .plyr__control--overlaid,
    .plyr__poster,
    .plyr__captions,
    .plyr__menu,
    .plyr__tooltip,
    .plyr__progress,
    .plyr__volume,
    .plyr__time {
      display: none !important;
    }

    .plyr,
    .plyr__video-wrapper,
    .plyr iframe {
      pointer-events: none !important;
    }

    .plyr__video-embed,
    .plyr__video-embed iframe {
      width: 100% !important;
      height: 100% !important;
    }

    .plyr__video-embed {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
  }
`

export const PlayerShell = styled.div<{
  $visible: boolean
  $mode: 'pip' | 'cover'
  $top: number
  $left: number
  $width: number
  $height: number
}>`
  position: fixed;
  z-index: ${({ $mode }) => ($mode === 'cover' ? 30 : 45)};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({ $mode }) =>
    $mode === 'pip' ? 'var(--color-primary-900)' : 'transparent'};
  box-shadow: ${({ $mode }) =>
    $mode === 'pip' ? '0 10px 28px rgba(0, 0, 0, 0.4)' : 'none'};
  border-radius: ${({ $mode }) => ($mode === 'pip' ? '10px' : '0')};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible, $mode }) =>
    $visible && $mode === 'pip' ? 'auto' : 'none'};
  transition: ${({ $mode }) =>
    $mode === 'pip'
      ? 'opacity 0.2s ease, transform 0.2s ease'
      : 'opacity 0.15s ease'};

  ${({ $mode, $top, $left, $width, $height, $visible }) =>
    $mode === 'cover'
      ? `
    top: ${$top}px;
    left: ${$left}px;
    width: ${$width}px;
    height: ${$height}px;
  `
      : `
    right: 16px;
    bottom: 16px;
    width: 220px;
    transform: translateY(${$visible ? '0' : '12px'});

    @media (max-width: 720px) {
      right: 12px;
      bottom: 80px;
      width: 180px;
    }
  `}
`

export const PipBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export const PlayerVideo = styled.div<{ $mode: 'pip' | 'cover' }>`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 0;
  aspect-ratio: ${({ $mode }) => ($mode === 'pip' ? '16 / 9' : 'auto')};
  height: ${({ $mode }) => ($mode === 'cover' ? '100%' : 'auto')};
  background: #000;
`

export const PipMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
`

export const PipText = styled.div`
  flex: 1;
  min-width: 0;

  strong,
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
  }

  strong {
    font-size: 12px;
    font-weight: 600;
  }

  span {
    margin-top: 2px;
    font-size: 11px;
    opacity: 0.75;
  }
`

export const PipToggle = styled.button`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
`
