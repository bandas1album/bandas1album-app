import { useMutation } from '@tanstack/react-query'
import { TGenerateTokenParams, TGenerateTokenResponse } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const generateToken = async (params: TGenerateTokenParams) => {
  const body = new FormData()
  body.append('username', params.username)
  body.append('password', params.password)

  const res = await fetch(`${API_URL}/jwt-auth/v1/token`, {
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
