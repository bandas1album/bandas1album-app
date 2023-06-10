import Link from 'next/link'
import { Card, CardImage } from './styles'

type Props = {
  image?: string
  url: string
}

const CardAlbum = ({ image, url }: Props) => (
  <Link href={url}>
    <Card>
      <CardImage src={image ? image : 'logo.svg'} alt="" />
    </Card>
  </Link>
)

export default CardAlbum
