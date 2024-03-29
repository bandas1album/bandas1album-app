import { Card, CardImage, CardLink, CardTitle } from './styles'
import Image from 'next/image'

type CardAlbumProps = {
  slug: string
  title: string
  artist: string
  cover: string
  loading: 'eager' | 'lazy' | undefined
}

const CardAlbum = ({ artist, cover, slug, title, loading }: CardAlbumProps) => (
  <CardLink prefetch={false} href={`/album/${slug}`} title={title}>
    <Card>
      <CardImage>
        {cover ? (
          <Image
            src={cover}
            alt={`Álbum ${title} de ${artist}`}
            width={160}
            height={160}
            loading={loading}
          ></Image>
        ) : (
          <CardTitle>
            <strong>{title}</strong>
            <span>{artist}</span>
          </CardTitle>
        )}
      </CardImage>
    </Card>
  </CardLink>
)

export default CardAlbum
