import { Input } from '@/components/Input'
import * as S from '../styles'
import { ButtonFull } from '@/components/Buttons/ButtonFull'
import {
  AlertCircle,
  ArrowBack,
  LockClosed
} from '@styled-icons/ionicons-solid'
import { useState } from 'react'
import { TResetPasswordParams } from '@/api/Auth/ResetPassword/types'
import { useRouter } from 'next/router'
import { useAuthUI } from '@/contexts/AuthUIContext'

type TResetPassword = {
  onSubmit: (form: TResetPasswordParams) => void
  isError: boolean
  isSuccess: boolean
  isSubmitting: boolean
  message: string
  reset: () => void
}

export const AuthResetPassword = ({
  onSubmit,
  isError,
  isSuccess,
  isSubmitting,
  message,
  reset
}: TResetPassword) => {
  const { open } = useAuthUI()
  const router = useRouter()
  const [form, setForm] = useState<TResetPasswordParams>({
    key: router.query.key as string,
    login: router.query.login as string,
    password: ''
  })

  return (
    <>
      {isSuccess ? (
        <S.ViewSuccess>
          <S.ViewTitle>{message}</S.ViewTitle>
          <S.ViewSubtitle>
            Volte para a página de login para entrar em sua conta.
          </S.ViewSubtitle>
          <ButtonFull
            onClick={() => {
              reset()
              open('login')
            }}
            label="Fazer login"
            type="button"
          ></ButtonFull>
        </S.ViewSuccess>
      ) : (
        <S.AuthForm
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit(form)
          }}
        >
          <S.FormTitle>Digite sua nova senha</S.FormTitle>

          <Input
            required={true}
            id="username"
            type="password"
            label="Senha"
            icon={<LockClosed />}
            onChange={(e) =>
              setForm((fields) => ({
                ...fields,
                password: e.target.value
              }))
            }
          ></Input>
          <ButtonFull
            type="submit"
            disabled={isSubmitting}
            label={isSubmitting ? 'Criando...' : 'Criar nova senha'}
          ></ButtonFull>
          <ButtonFull
            type="button"
            style="text"
            disabled={isSubmitting}
            label="Voltar para o login"
            icon={<ArrowBack />}
            onClick={() => open('login')}
          ></ButtonFull>

          {isError && (
            <S.AuthMessage>
              <AlertCircle width={24} height={16} />
              <p>{message}</p>
            </S.AuthMessage>
          )}
        </S.AuthForm>
      )}
    </>
  )
}
