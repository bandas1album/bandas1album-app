import Link from 'next/link'
import type { AlbumCredit } from '@/api/types/Album'
import { CreditsList, CreditsTitle, CreditsWrapper } from './styles'
import Image from 'next/image'

type AlbumCreditsProps = {
  credits: AlbumCredit[] | undefined
}

export default function AlbumCredits({ credits }: AlbumCreditsProps) {
  if (!credits?.length) return null

  return (
    <CreditsWrapper>
      <CreditsTitle>Créditos</CreditsTitle>
      <CreditsList>
        {credits.map((credit, index) => {
          const detail = credit.detail?.trim()
          const label = detail
          const image = credit.image ? credit.image : '/logo.png'

          return (
            <li key={`${credit.person_id}-${credit.role}-${index}`}>
              <Link href={`/person/${credit.slug}`}>
                <Image
                  src={image}
                  alt={credit.name}
                  width={200}
                  height={160}
                  className="photo"
                  loading="lazy"
                />
                <strong className="name">{credit.name}</strong>
                <span className="label">{label}</span>
              </Link>
            </li>
          )
        })}
      </CreditsList>
    </CreditsWrapper>
  )
}
