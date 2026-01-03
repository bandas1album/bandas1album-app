import { Input } from '@/components/Input'
import * as S from '../styles'
import { ButtonFull } from '@/components/Buttons/ButtonFull'
import { AlertCircle, ArrowBack, Person } from '@styled-icons/ionicons-solid'
import { useEffect, useState } from 'react'
import { TLostPasswordParams } from '@/api/Auth/LostPassword/types'
import { useRouter } from 'next/router'
import { useAuthUI } from '@/contexts/AuthUIContext'

type TLostPassword = {
  onSubmit: (form: any) => void
  reset: () => void
  isError: boolean
  isSuccess: boolean
  isSubmitting: boolean
  message: string
}

export const AuthLostPassword = ({
  onSubmit,
  reset,
  isError,
  isSuccess,
  isSubmitting,
  message
}: TLostPassword) => {
  const { open } = useAuthUI()
  const [form, setForm] = useState<TLostPasswordParams>({
    login: '',
    url: window.location.origin
  })

  return (
    <>
      {isSuccess ? (
        <S.ViewSuccess>
          <S.ViewTitle>{message}</S.ViewTitle>
          <S.ViewSubtitle>
            Verifique o teu e-mail e clique no link para trocar sua senha.
          </S.ViewSubtitle>
          <ButtonFull
            onClick={() => {
              reset()
              open('login')
            }}
            label="Voltar para o login"
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
          <S.FormTitle>Esqueceu sua senha?</S.FormTitle>
          <S.FormDescription>
            Digite seu e-mail ou usuário para receber um link de recuperação.
          </S.FormDescription>

          <Input
            required={true}
            id="username"
            type="text"
            label="Usuário ou e-mail"
            icon={<Person />}
            onChange={(e) =>
              setForm((fields) => ({
                ...fields,
                login: e.target.value
              }))
            }
          ></Input>

          <ButtonFull
            type="submit"
            disabled={isSubmitting}
            label={isSubmitting ? 'Enviando...' : 'Enviar link de recuperação'}
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
