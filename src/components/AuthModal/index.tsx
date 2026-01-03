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

export const AuthModal = () => {
  const { login } = useAuth()
  const { isOpen, open, view, close } = useAuthUI()
  const {
    mutateAsync: mutateLogin,
    isPending: loginIsPending,
    isError: loginIsError
  } = useGenerateToken()
  const {
    mutateAsync: mutateSignup,
    isPending: signupIsPending,
    isError: signupIsError,
    data: dataSignup,
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

  const handleLogin = async (form: TGenerateTokenParams) => {
    try {
      const res = await mutateLogin(form)

      login(res.token, { ...res })
      open('profile')
    } catch {
      console.log('Error')
    }
  }

  const handleSignup = (form: TCreateUserParams) => {
    mutateSignup(form)
  }

  const handleLost = (form: TLostPasswordParams) => {
    mutateLost(form)
  }

  const handleReset = (form: TResetPasswordParams) => {
    mutateReset(form)
  }

  return (
    <S.AuthOverlay>
      <S.OpenButton
        aria-label="Abrir modal de login"
        onClick={() => open('login')}
      ></S.OpenButton>

      <S.AuthDrawer $open={isOpen}>
        {['login', 'signup', 'lost', 'reset'].includes(view) && (
          <img src="/logo.svg" />
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
            <span onClick={() => open('signup')}>Crie sua conta</span> para
            sugerir novas pérolas e{' '}
            <a
              href="https://nubank.com.br/pagar/4tc3b/eSpPDeBif2"
              target="_blank"
              rel="noopener noreferrer"
            >
              contribua
            </a>{' '}
            para que o projeto continue existindo.
          </S.AuthInfo>
        )}

        <S.CloseButton
          aria-label="Fechar modal de login"
          onClick={() => close()}
        ></S.CloseButton>
      </S.AuthDrawer>
    </S.AuthOverlay>
  )
}
