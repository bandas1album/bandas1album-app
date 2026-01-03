import { createContext, useContext, useEffect, useState } from 'react'
import { AuthState } from './types'
import { useGetUser } from '@/api/Auth/GetUser'

const AuthContext = createContext<AuthState>(null!)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
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

  useEffect(() => {
    if (error) {
      logout()
    }
  }, [error])

  const login = (token: string, user?: any) => {
    setToken(token)
    localStorage.setItem('@bandas1album/token', token)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('@bandas1album/token')
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user: user ?? null,
        refetchUser,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)

  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
