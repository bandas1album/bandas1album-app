import { useEffect, useState } from 'react'
import * as S from './styles'

type TSwitch = {
  onChange: (e: boolean) => void
  trueLabel: string
  falseLabel: string
  isActive: boolean
}

export const Switch = ({
  onChange,
  trueLabel,
  falseLabel,
  isActive
}: TSwitch) => {
  return (
    <S.SwitchWrapper>
      <S.Switch>
        <S.SwitchLabel $active={isActive} onClick={() => onChange(true)}>
          {trueLabel}
        </S.SwitchLabel>
        <S.SwitchLabel $active={!isActive} onClick={() => onChange(false)}>
          {falseLabel}
        </S.SwitchLabel>
      </S.Switch>
    </S.SwitchWrapper>
  )
}
