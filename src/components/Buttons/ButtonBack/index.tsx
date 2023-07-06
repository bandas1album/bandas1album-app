import { useRouter } from 'next/router'
import { Back } from './styles'
import { ChevronBackCircle } from '@styled-icons/ionicons-solid'

export default function ButtonBack() {
  const router = useRouter()

  return (
    <Back aria-label="Voltar página" onClick={() => router.back()}>
      <ChevronBackCircle aria-hidden size={32} />
    </Back>
  )
}
