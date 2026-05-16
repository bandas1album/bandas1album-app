import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { AuthUIContextType, AuthView } from './types'
import { AuthModal } from '@/components/AuthModal'
import * as S from './styles'
import { useAuth } from '../AuthContext'

const AuthUIContext = createContext<AuthUIContextType | null>(null)

export const AuthUIProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<AuthView>('login')

  const open = useCallback(
    (nextView: AuthView = 'login') => {
      setView(token ? 'profile' : nextView)
      setIsOpen(true)
    },
    [token]
  )

  const close = () => setIsOpen(false)

  useEffect(() => {
    if (!token) {
      setView('login')
    }
  }, [token])

  useEffect(() => {
    if (window.location.search.includes('?key=')) {
      open('reset')
    }
  }, [open])

  return (
    <AuthUIContext.Provider value={{ isOpen, view, open, close, setView }}>
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
