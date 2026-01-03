import { useRouter } from 'next/router'
import { Back } from './styles'
import { ChevronBack } from '@styled-icons/ionicons-solid'

export default function ButtonBack() {
  const router = useRouter()

  return (
    <Back aria-label="Voltar página" onClick={() => router.back()}>
      <ChevronBack aria-hidden size={20} />
    </Back>
  )
}
