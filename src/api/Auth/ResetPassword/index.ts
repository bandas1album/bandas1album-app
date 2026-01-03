import { useMutation } from '@tanstack/react-query'
import { TResetPasswordParams, TResetPasswordResponse } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const resetPassword = async (params: TResetPasswordParams) => {
  const body = new FormData()
  body.append('login', params.login)
  body.append('password', params.password)
  body.append('key', params.key)

  const res = await fetch(`${API_URL}/api/auth/reset-password`, {
    method: 'POST',
    body
  })

  if (!res.ok) {
    throw new Error('Failed to change password')
  }

  return res.json() as Promise<TResetPasswordResponse>
}

export const useResetPassword = () => {
  return useMutation<TResetPasswordResponse, Error, TResetPasswordParams>({
    mutationKey: ['auth', 'reset-password'],
    mutationFn: resetPassword
  })
}
