import Link from 'next/link'
import { Card, CardImage } from './styles'
import Image from 'next/image'

export type CardAlbumProps = {
  slug: string
  title: string
  artist: string
  cover: string
}

const CardAlbum = ({ artist, cover, slug, title }: CardAlbumProps) => (
  <Link href={`/album/${slug}`} title={title}>
    <Card>
      <CardImage>
        <Image
          src={cover}
          alt={`Álbum ${title} de ${artist}`}
          width="160"
          height="160"
        ></Image>
      </CardImage>
    </Card>
  </Link>
)

export default CardAlbum
