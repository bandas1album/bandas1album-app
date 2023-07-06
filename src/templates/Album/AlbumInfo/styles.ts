import { Button } from '@/styles/resets'
import Link from 'next/link'
import { styled } from 'styled-components'

export const Infos = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 56px 32px 32px;
  background-color: var(--color-primary-tint);
`

export const InfosHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InfosLinks = styled.div`
  position: absolute;
  top: -32px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: calc(100% - 48px);
  margin-left: 24px;
  gap: 24px;
`

export const InfosLinksButton = styled(Button)`
  position: absolute;
  z-index: 1;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: var(--color-primary-shade);
  background-color: var(--color-light);
  cursor: pointer;

  svg {
    width: 80px;
    height: 80px;
    margin: -10px;
  }
`

export const InfosLink = styled(Link)`
  color: var(--color-light);

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.75;
  }
`

export const InfosLinksList = styled.ul<{ $opened: boolean }>`
  width: 100%;
  max-width: fit-content;
  height: 64px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 24px;
  overflow-y: auto;
  padding-left: 80px;
  padding-right: 32px;
  background-color: var(--color-primary);
  border-radius: 48px;
  list-style: none;
  opacity: ${(props) => (props.$opened ? '1' : '0')};
  pointer-events: ${(props) => (props.$opened ? 'all' : 'none')};
  transition: 0.2s opacity ease;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const InfosTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  line-height: 120%;
  font-weight: 600;
`

export const InfosArtist = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
`

export const InfosTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InfosTag = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: var(--color-light);
  text-decoration: none;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`
