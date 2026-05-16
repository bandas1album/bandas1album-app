import { useMutation } from '@tanstack/react-query'
import { apiBaseUrl } from '@/lib/apiBaseUrl'
import { TGenerateTokenParams, TGenerateTokenResponse } from './types'

export const generateToken = async (params: TGenerateTokenParams) => {
  const body = new FormData()
  body.append('username', params.username)
  body.append('password', params.password)

  const res = await fetch(`${apiBaseUrl}/jwt-auth/v1/token`, {
    method: 'POST',
    body
  })

  if (!res.ok) {
    throw new Error('Failed to generate token')
  }

  return res.json() as Promise<TGenerateTokenResponse>
}

export const useGenerateToken = () => {
  return useMutation<TGenerateTokenResponse, Error, TGenerateTokenParams>({
    mutationKey: ['auth', 'generate-token'],
    mutationFn: generateToken
  })
}
