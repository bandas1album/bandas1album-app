import Link from 'next/link'
import { Card, CardImage } from './styles'
import { AlbumProps } from '@/types'

const CardAlbum = ({ artist, cover, slug, title }: AlbumProps) => (
  <Link href={`/album/${slug}`} title={`${title} - ${artist}`}>
    <Card>
      <CardImage src={cover?.url ? cover.url : '/logo.png'} alt="" />
    </Card>
  </Link>
)

export default CardAlbum
