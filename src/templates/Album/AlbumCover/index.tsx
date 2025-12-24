import Image from 'next/image'
import { Cover } from './styles'

type AlbumCoverProps = {
  image: string | undefined
  title: string | undefined
}

export default function AlbumCover({ image, title }: AlbumCoverProps) {
  return (
    <Cover $bg={image || ''}>
      <Image src={image || ''} alt={title || ''} width={428} height={428} />
    </Cover>
  )
}
