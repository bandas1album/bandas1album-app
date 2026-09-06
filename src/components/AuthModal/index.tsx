import { useAuthUI } from '@/contexts/AuthUIContext'
import * as S from './styles'
import AuthLogin from './Login'
import AuthSignup from './Signup'
import AuthProfile from './Profile'
import { TGenerateTokenParams } from '@/api/Auth/GenerateToken/types'
import { useAuth } from '@/contexts/AuthContext'
import { useGenerateToken } from '@/api/Auth/GenerateToken'
import { useCreateUser } from '@/api/Auth/CreateUser'
import { TCreateUserParams } from '@/api/Auth/CreateUser/types'
import { AuthResetPassword } from './ResetPassword'
import { useLostPassword } from '@/api/Auth/LostPassword'
import { useResetPassword } from '@/api/Auth/ResetPassword'
import { TLostPasswordParams } from '@/api/Auth/LostPassword/types'
import { AuthLostPassword } from './LostPassword'
import { TResetPasswordParams } from '@/api/Auth/ResetPassword/types'
import { Close } from '@styled-icons/ionicons-solid'
import Image from 'next/image'
import { gaEvent } from '@/lib/gtag'
import { useCallback, useEffect, useId, useLayoutEffect, useRef } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export const AuthModal = () => {
  const { login } = useAuth()
  const { isOpen, open, view, close } = useAuthUI()
  const titleId = useId()
  const drawerRef = useRef<HTMLElement | null>(null)
  const openButtonRef = useRef<HTMLButtonElement | null>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const {
    mutateAsync: mutateLogin,
    isPending: loginIsPending,
    isError: loginIsError
  } = useGenerateToken()
  const {
    mutateAsync: mutateSignup,
    isPending: signupIsPending,
    isError: signupIsError,
    isSuccess: signupIsSuccess,
    reset: resetSignup
  } = useCreateUser()
  const {
    mutateAsync: mutateLost,
    isPending: lostIsPending,
    isError: lostIsError,
    data: dataLost,
    isSuccess: lostIsSuccess,
    reset: resetLost,
    error: errorLost
  } = useLostPassword()
  const {
    mutateAsync: mutateReset,
    isPending: resetIsPending,
    isError: resetIsError,
    data: dataReset,
    error: errorReset,
    isSuccess: resetIsSuccess,
    reset: resetReset
  } = useResetPassword()

  const releaseDrawerFocus = useCallback(() => {
    const drawer = drawerRef.current
    const active = document.activeElement as HTMLElement | null
    if (drawer && active && drawer.contains(active)) {
      active.blur()
    }
  }, [])

  const handleClose = useCallback(() => {
    releaseDrawerFocus()
    const restore = previousFocus.current ?? openButtonRef.current
    restore?.focus?.()
    close()
  }, [close, releaseDrawerFocus])

  // Tira o foco do drawer antes do paint com aria-hidden (evita o warning do Chrome).
  useLayoutEffect(() => {
    if (isOpen) return
    releaseDrawerFocus()
  }, [isOpen, releaseDrawerFocus])

  useEffect(() => {
    if (!isOpen) return

    previousFocus.current = document.activeElement as HTMLElement | null
    const drawer = drawerRef.current
    const focusables = drawer
      ? Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
        )
      : []

    focusables[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        handleClose()
        return
      }

      if (event.key !== 'Tab' || !drawer) return

      const items = Array.from(
        drawer.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null)

      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, view, handleClose])

  const handleLogin = async (form: TGenerateTokenParams) => {
    try {
      const res = await mutateLogin(form)

      login(res.token)
      gaEvent('login', { method: 'password' })
      open('profile')
    } catch {
      console.log('Error')
    }
  }

  const handleSignup = (form: TCreateUserParams) => {
    mutateSignup(form, {
      onSuccess: () => {
        gaEvent('sign_up', { method: 'email' })
      }
    })
  }

  const handleLost = (form: TLostPasswordParams) => {
    mutateLost(form, {
      onSuccess: () => {
        gaEvent('password_reset_request', { channel: 'email' })
      }
    })
  }

  const handleReset = (form: TResetPasswordParams) => {
    mutateReset(form, {
      onSuccess: () => {
        gaEvent('password_reset_complete', { result: 'success' })
      }
    })
  }

  return (
    <S.AuthOverlay>
      <S.OpenButton
        ref={openButtonRef}
        aria-label="Abrir modal de login"
        aria-expanded={isOpen}
        aria-controls="auth-drawer"
        onClick={() => {
          gaEvent('open_auth_modal', { trigger: 'floating_button' })
          open('login')
        }}
      ></S.OpenButton>

      <S.AuthDrawer
        id="auth-drawer"
        ref={drawerRef}
        $open={isOpen}
        role="dialog"
        aria-modal={isOpen}
        aria-labelledby={titleId}
        aria-hidden={!isOpen}
        {...(!isOpen
          ? ({ inert: '' } as React.HTMLAttributes<HTMLElement>)
          : {})}
      >
        <S.CloseModal type="button" aria-label="Fechar" onClick={handleClose}>
          <Close />
        </S.CloseModal>

        <S.DialogTitle id={titleId}>
          {view === 'profile'
            ? 'Sua conta'
            : view === 'signup'
            ? 'Criar conta'
            : view === 'lost'
            ? 'Recuperar senha'
            : view === 'reset'
            ? 'Nova senha'
            : 'Entrar'}
        </S.DialogTitle>

        {['login', 'signup', 'lost', 'reset'].includes(view) && (
          <Image
            src="/logo.svg"
            width={80}
            height={80}
            alt="Bandas de 1 Álbum"
          />
        )}

        <S.AuthContainer>
          {view === 'login' && (
            <AuthLogin
              onSubmit={handleLogin}
              isError={loginIsError}
              isSubmitting={loginIsPending}
            />
          )}
          {view === 'signup' && (
            <AuthSignup
              reset={resetSignup}
              onSubmit={handleSignup}
              isError={signupIsError}
              isSuccess={signupIsSuccess}
              isSubmitting={signupIsPending}
            />
          )}
          {view === 'lost' && (
            <AuthLostPassword
              onSubmit={handleLost}
              isError={lostIsError}
              isSubmitting={lostIsPending}
              isSuccess={lostIsSuccess}
              message={dataLost?.message || errorLost?.message || ''}
              reset={resetLost}
            />
          )}
          {view === 'reset' && (
            <AuthResetPassword
              onSubmit={handleReset}
              isError={resetIsError}
              isSubmitting={resetIsPending}
              isSuccess={resetIsSuccess}
              message={dataReset?.message || errorReset?.message || ''}
              reset={resetReset}
            />
          )}
          {view === 'profile' && <AuthProfile />}
        </S.AuthContainer>

        {['login', 'signup'].includes(view) && (
          <S.AuthInfo>
            Bandas de 1 Álbum é um projeto sem fins lucrativos dedicado a
            preservar e dar visibilidade a bandas e artistas que lançaram apenas
            um álbum, mantendo essas obras acessíveis para quem ama música.{' '}
            <S.InlineLink type="button" onClick={() => open('signup')}>
              Crie sua conta
            </S.InlineLink>{' '}
            para sugerir novas pérolas e{' '}
            <a
              href="https://nubank.com.br/pagar/4tc3b/eSpPDeBif2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                gaEvent('click_contribute', { destination: 'nubank_pix' })
              }
            >
              contribua
            </a>{' '}
            para que o projeto continue existindo.
          </S.AuthInfo>
        )}

        <S.CloseButton
          aria-label="Fechar modal de login"
          onClick={handleClose}
        ></S.CloseButton>
      </S.AuthDrawer>
    </S.AuthOverlay>
  )
}
