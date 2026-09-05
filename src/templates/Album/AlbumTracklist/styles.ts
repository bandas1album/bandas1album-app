import { styled } from 'styled-components'

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 0;
`

export const List = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: var(--progress, 0%);
      height: 100%;
      background-color: rgba(0 0 0 / 15%);
      pointer-events: none;
    }

    &[data-active='true'] {
      background-color: rgba(0 0 0 / 8%);
    }
  }

  strong,
  span {
    position: relative;
    font-weight: 400;
  }

  .track-name {
    flex: 1;
  }

  .track-duration {
    margin-left: 12px;
  }
`

export const ListTitle = styled.h3`
  margin: 0;
  padding: 0 24px;
  font-size: 18px;
  font-weight: 600;
`

export const TrackPlay = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-right: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(0 0 0 / 25%);
  color: #fff;
`

export const TrackPlaySpacer = styled.span`
  display: inline-block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-right: 16px;
`
