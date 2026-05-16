import { useQuery } from '@tanstack/react-query'
import { apiBaseUrl } from '@/lib/apiBaseUrl'
import { TGetUserResponse } from './types'

export const getUser = async (token: string) => {
  const res = await fetch(`${apiBaseUrl}/api/user`, {
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
