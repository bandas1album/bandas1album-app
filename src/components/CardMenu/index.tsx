import Image from 'next/image'
import { Card, CardImage, CardSubtitle, CardTitle } from './styles'

export type CardMenuProps = {
  image?: string
  title: string
  subtitle?: string
}

export function CardMenu({ image, title, subtitle }: CardMenuProps) {
  return (
    <Card>
      {image ? (
        <CardImage>
          <Image src={image} alt="" width="48" height="48" loading="lazy" />
        </CardImage>
      ) : (
        ''
      )}

      <div className="card-infos">
        {title ? <CardTitle>{title}</CardTitle> : ''}
        {subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : ''}
      </div>
    </Card>
  )
}
