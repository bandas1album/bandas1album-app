import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { AuthUIContextType, AuthView, PasswordResetCredentials } from './types'
import { AuthModal } from '@/components/AuthModal'
import * as S from './styles'
import { useAuth } from '../AuthContext'
import { gaEvent } from '@/lib/gtag'
import { useRouter } from 'next/router'

const AuthUIContext = createContext<AuthUIContextType | null>(null)

const RESET_QUERY_KEYS = ['key', 'rp_key', 'reset_key', 'login'] as const

export const AuthUIProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth()
  const router = useRouter()
  const capturedReset = useRef(false)
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<AuthView>('login')
  const [resetCredentials, setResetCredentials] =
    useState<PasswordResetCredentials | null>(null)

  const open = useCallback(
    (nextView: AuthView = 'login') => {
      setView(token ? 'profile' : nextView)
      setIsOpen(true)
    },
    [token]
  )

  const close = () => setIsOpen(false)
  const clearResetCredentials = useCallback(() => {
    setResetCredentials(null)
  }, [])

  useEffect(() => {
    if (!token) {
      setView('login')
    }
  }, [token])

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !router.isReady ||
      capturedReset.current
    ) {
      return
    }

    const p = new URLSearchParams(window.location.search)
    const key = p.get('key') || p.get('rp_key') || p.get('reset_key') || ''
    const login = p.get('login') || ''

    if (!key) return

    capturedReset.current = true
    setResetCredentials({ key, login })
    gaEvent('password_reset_open', { source: 'email_link' })
    open('reset')

    // Drop reset secrets from the URL (history + analytics) after capturing.
    const nextQuery = { ...router.query }
    for (const q of RESET_QUERY_KEYS) {
      delete nextQuery[q]
    }
    router.replace({ pathname: router.pathname, query: nextQuery }, undefined, {
      shallow: true
    })
  }, [open, router])

  useEffect(() => {
    if (typeof window === 'undefined' || !isOpen) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!isMobile) return

    const main = document.querySelector('main')
    if (!main) return

    const previousOverflow = main.style.overflow
    main.style.overflow = 'hidden'

    return () => {
      main.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <AuthUIContext.Provider
      value={{
        isOpen,
        view,
        open,
        close,
        setView,
        resetCredentials,
        clearResetCredentials
      }}
    >
      <S.AuthWrapper>
        <AuthModal />
        {children}
      </S.AuthWrapper>
    </AuthUIContext.Provider>
  )
}

export const useAuthUI = () => {
  const ctx = useContext(AuthUIContext)

  if (!ctx) throw new Error('useAuthUI must be used within AuthUIProvider')
  return ctx
}
