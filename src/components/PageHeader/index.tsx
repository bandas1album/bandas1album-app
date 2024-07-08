import React from 'react'
import ButtonBack from '../Buttons/ButtonBack'
import { Header, HeaderTitle } from './styles'

export default function PageHeader({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Header>
      <ButtonBack></ButtonBack>
      <HeaderTitle>{children}</HeaderTitle>
    </Header>
  )
}
