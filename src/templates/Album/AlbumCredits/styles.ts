import { styled } from 'styled-components'

export const CreditsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
`

export const CreditsTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 600;
`

export const CreditsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: max-content;
  grid-gap: 16px;

  li {
    border-radius: 8px;
    background: rgba(0 0 0 / 20%);
    padding-bottom: 16px;
    overflow: hidden;
    border: 1px solid rgba(0 0 0 / 10%);
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: inherit;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      opacity: 0.85;
    }
  }

  .photo {
    width: 100%;
    height: 160px;
    margin-bottom: 8px;
    object-fit: cover;
  }

  .name {
    padding: 0 16px;
    font-size: 16px;
    font-weight: 600;
  }

  .label {
    padding: 0 16px;
    opacity: 0.75;
    font-size: 14px;
  }
`
