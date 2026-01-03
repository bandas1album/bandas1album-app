import { Switch } from '@/components/Switch'
import * as S from '../styles'
import { useAuthUI } from '@/contexts/AuthUIContext'
import { Input } from '@/components/Input'
import { ButtonFull } from '@/components/Buttons/ButtonFull'
import { AlertCircle, LockClosed, Person } from '@styled-icons/ionicons-solid'
import { TGenerateTokenParams } from '@/api/Auth/GenerateToken/types'
import { useState } from 'react'

type TAuthLogin = {
  onSubmit: (form: TGenerateTokenParams) => void
  isSubmitting: boolean
  isError: boolean
}

export default function AuthLogin({
  onSubmit,
  isSubmitting,
  isError
}: TAuthLogin) {
  const { open } = useAuthUI()
  const [form, setForm] = useState<TGenerateTokenParams>({
    username: '',
    password: ''
  })

  const isFormValid =
    form.username.trim().length > 0 && form.password.trim().length > 0

  return (
    <>
      <S.AuthForm
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(form)
        }}
      >
        <S.FormTitle>Bem-vindo de volta</S.FormTitle>
        <S.FormDescription>
          Digite seus dados para fazer login
        </S.FormDescription>
        <Switch
          onChange={(active) => !active && open('signup')}
          isActive={true}
          trueLabel="Entrar"
          falseLabel="Registrar"
        ></Switch>
        <Input
          required={true}
          id="username"
          type="text"
          label="Usuário ou e-mail"
          icon={<Person />}
          onChange={(e) =>
            setForm((fields) => ({ ...fields, username: e.target.value }))
          }
        ></Input>
        <Input
          required={true}
          id="password"
          type="password"
          label="Senha"
          icon={<LockClosed />}
          onChange={(e) =>
            setForm((fields) => ({ ...fields, password: e.target.value }))
          }
        ></Input>
        <ButtonFull
          type="submit"
          disabled={!isFormValid || isSubmitting}
          label={isSubmitting ? 'Entrando...' : 'Entrar na conta'}
        ></ButtonFull>
        <S.AuthForgot onClick={() => open('lost')}>
          Esqueceu sua senha?
        </S.AuthForgot>
        {isError && (
          <S.AuthMessage>
            <AlertCircle width={24} height={16} />
            <p>
              Não foi possível entrar na sua conta, confira seus dados e tente
              novamente.
            </p>
          </S.AuthMessage>
        )}
      </S.AuthForm>
    </>
  )
}
