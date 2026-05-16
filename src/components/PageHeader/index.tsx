import React from 'react'
import ButtonBack from '../Buttons/ButtonBack'
import { Header, HeaderTitle } from './styles'

export default function PageHeader({
  children,
  hideBack
}: {
  children: React.ReactNode
  hideBack?: boolean
}) {
  return (
    <Header>
      {!hideBack && <ButtonBack></ButtonBack>}
      <HeaderTitle>{children}</HeaderTitle>
    </Header>
  )
}
