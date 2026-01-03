import { useMutation } from '@tanstack/react-query'
import { TCreateUserParams, TCreateUserResponse } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const createUser = async (params: TCreateUserParams) => {
  const body = new FormData()
  body.append('name', params.name)
  body.append('username', params.username)
  body.append('email', params.email)
  body.append('password', params.password)

  const res = await fetch(`${API_URL}/api/user`, {
    method: 'POST',
    body
  })

  if (!res.ok) {
    throw new Error('Failed to create account')
  }

  return res.json() as Promise<TCreateUserResponse>
}

export const useCreateUser = () => {
  return useMutation<TCreateUserResponse, Error, TCreateUserParams>({
    mutationKey: ['auth', 'create-user'],
    mutationFn: createUser
  })
}
