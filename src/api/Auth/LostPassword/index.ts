import { useMutation } from '@tanstack/react-query'
import { apiBaseUrl } from '@/lib/apiBaseUrl'
import { TLostPasswordParams, TLostPasswordResponse } from './types'

export const lostPassword = async (params: TLostPasswordParams) => {
  const body = new FormData()
  body.append('login', params.login)
  body.append('url', params.url)

  const res = await fetch(`${apiBaseUrl}/api/auth/lost-password`, {
    method: 'POST',
    body
  })

  if (!res.ok) {
    throw new Error('Failed to send a request to lost password')
  }

  return res.json() as Promise<TLostPasswordResponse>
}

export const useLostPassword = () => {
  return useMutation<TLostPasswordResponse, Error, TLostPasswordParams>({
    mutationKey: ['auth', 'lost-password'],
    mutationFn: lostPassword
  })
}
