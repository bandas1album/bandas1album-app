import { useQuery } from '@tanstack/react-query'
import { TGetUserResponse } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const getUser = async (token: string) => {
  const res = await fetch(`${API_URL}/api/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    throw new Error('Token inválido')
  }

  return res.json() as Promise<TGetUserResponse>
}

export const useGetUser = (token: string | null) => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(token as string),
    enabled: !!token,
    staleTime: 1000 * 60 * 5
  })
}
