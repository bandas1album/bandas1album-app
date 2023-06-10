import Link from 'next/link'
import { Card, CardImage } from './styles'

export type AlbumProps = {
  artist: string
  cover?: string
  slug: string
  title: string
}

const CardAlbum = ({ artist, cover, slug, title }: AlbumProps) => (
  <Link href={`/album/${slug}`} title={`${title} - ${artist}`}>
    <Card>
      <CardImage src={cover ? cover : 'logo.svg'} alt="" />
    </Card>
  </Link>
)

export default CardAlbum
