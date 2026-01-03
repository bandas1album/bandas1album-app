import { Switch } from '@/components/Switch'
import * as S from '../styles'
import { useAuthUI } from '@/contexts/AuthUIContext'
import { ButtonFull } from '@/components/Buttons/ButtonFull'
import { Input } from '@/components/Input'
import { useState } from 'react'
import { AlertCircle } from '@styled-icons/ionicons-solid'
import { TCreateUserParams } from '@/api/Auth/CreateUser/types'

type TAuthSignup = {
  reset: () => void
  onSubmit: (form: TCreateUserParams) => void
  isSubmitting: boolean
  isError: boolean
  isSuccess: boolean
}

export default function AuthSignup({
  reset,
  onSubmit,
  isSubmitting,
  isError,
  isSuccess
}: TAuthSignup) {
  const { open } = useAuthUI()
  const [form, setForm] = useState<TCreateUserParams>({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  const isFormValid =
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.username.trim().length > 0 &&
    form.password.trim().length > 0

  return (
    <>
      {isSuccess ? (
        <S.ViewSuccess>
          <S.ViewTitle>Usuário cadastrado!</S.ViewTitle>
          <S.ViewSubtitle>
            Faça login no botão abaixo para sugerir, favoritar e marcar álbuns
            como ouvidos.
          </S.ViewSubtitle>
          <ButtonFull
            onClick={() => {
              reset()
              open('login')
            }}
            label="Entrar na conta"
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
          <S.FormTitle>Crie sua conta</S.FormTitle>
          <S.FormDescription>
            Cadastre seus dados no formulário
          </S.FormDescription>
          <Switch
            onChange={(active) => active && open('login')}
            isActive={false}
            trueLabel="Entrar"
            falseLabel="Registrar"
          ></Switch>
          <Input
            required={true}
            id="name"
            type="text"
            label="Nome completo"
            onChange={(e) =>
              setForm((fields) => ({ ...fields, name: e.target.value }))
            }
          ></Input>
          <Input
            required={true}
            id="username"
            type="text"
            label="Usuário"
            onChange={(e) =>
              setForm((fields) => ({ ...fields, username: e.target.value }))
            }
          ></Input>
          <Input
            required={true}
            id="email"
            type="email"
            label="E-mail"
            onChange={(e) =>
              setForm((fields) => ({ ...fields, email: e.target.value }))
            }
          ></Input>
          <Input
            required={true}
            id="password"
            type="password"
            label="Senha"
            onChange={(e) =>
              setForm((fields) => ({ ...fields, password: e.target.value }))
            }
          ></Input>
          <ButtonFull
            type="submit"
            disabled={!isFormValid || isSubmitting}
            label={isSubmitting ? 'Criando conta...' : 'Criar conta'}
          ></ButtonFull>
          {isError && (
            <S.AuthMessage>
              <AlertCircle width={24} height={16} />
              <p>
                Não foi possível criar a sua conta, confira seus dados e tente
                novamente.
              </p>
            </S.AuthMessage>
          )}
        </S.AuthForm>
      )}
    </>
  )
}
