import * as S from './styles'

type TButtonFull = {
  type: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  onClick?: () => void
  label: string
  style?: 'filled' | 'outlined' | 'text'
  icon?: React.ReactNode
}

export const ButtonFull = ({
  type = 'button',
  style = 'filled',
  disabled,
  label,
  onClick,
  icon
}: TButtonFull) => {
  return (
    <S.Button $style={style} disabled={disabled} onClick={onClick} type={type}>
      {icon}
      {label}
    </S.Button>
  )
}
