import * as S from './style'

type TInput = {
  label: string
  id: string
  type: string
  required: boolean
  message?: string
  icon?: React.ReactNode
  onChange: (e: any) => void
}

export const Input = ({
  label,
  id,
  type = 'text',
  required,
  message,
  icon,
  onChange
}: TInput) => {
  return (
    <S.FormControlWrapper>
      {icon}
      <S.FormControl>
        <S.FormLabel htmlFor={id}>{label}</S.FormLabel>
        <S.FormInput
          required={required}
          name={id}
          id={id}
          type={type}
          placeholder={label}
          onChange={onChange}
        ></S.FormInput>
      </S.FormControl>

      {/* {message && (
        <S.FormControlMessage>{message}</S.FormControlMessage>
      )} */}
    </S.FormControlWrapper>
  )
}
