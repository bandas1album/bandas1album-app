import Image from 'next/image'
import { Cover } from './styles'

type AlbumCoverProps = {
  image: string | undefined
  title: string | undefined
}

export default function AlbumCover({ image, title }: AlbumCoverProps) {
  return (
    <Cover $bg={image || ''}>
      <Image
        src={image || ''}
        alt={title || ''}
        fill
        sizes="(max-width: 768px) 100vw, 428px"
        style={{ objectFit: 'contain' }}
        priority
      />
    </Cover>
  )
}
