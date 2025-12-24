import { Album } from '@/api/types/Album'
import { Card, CardImage, CardLink, CardTitle } from './styles'
import Image from 'next/image'

const CardAlbum = ({ artist, cover, slug, title }: Album) => (
  <CardLink prefetch={false} href={`/album/${slug}`} title={title}>
    <Card>
      <CardImage>
        {cover ? (
          <Image
            src={cover}
            alt={`Álbum ${title} de ${artist}`}
            width={160}
            height={160}
            loading="lazy"
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
