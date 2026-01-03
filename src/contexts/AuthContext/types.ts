import { TGetUserResponse } from '@/api/Auth/GetUser/types'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'

export type AuthState = {
  token: string | null
  user: TGetUserResponse | null
  refetchUser: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<TGetUserResponse, Error>>
  login: (token: string, user?: any) => void
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}
