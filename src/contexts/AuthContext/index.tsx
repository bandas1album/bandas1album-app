import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { AuthState } from './types'
import { useGetUser } from '@/api/Auth/GetUser'

const AuthContext = createContext<AuthState | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient()
  const [token, setToken] = useState<string | null>(null)
  const {
    data: user,
    error,
    isLoading,
    refetch: refetchUser
  } = useGetUser(token)

  useEffect(() => {
    const storedToken = localStorage.getItem('@bandas1album/token')

    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    localStorage.removeItem('@bandas1album/token')
    queryClient.removeQueries({ queryKey: ['user'] })
    queryClient.removeQueries({ queryKey: ['album-flags'] })
  }, [queryClient])

  useEffect(() => {
    if (error) {
      logout()
    }
  }, [error, logout])

  const login = (nextToken: string) => {
    setToken(nextToken)
    localStorage.setItem('@bandas1album/token', nextToken)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user: token ? user ?? null : null,
        refetchUser,
        login,
        logout,
        isAuthenticated: !!token && !!user,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)

  if (ctx === undefined)
    throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
