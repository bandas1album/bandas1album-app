import Image from 'next/image'
import { Cover } from './styles'
import { Maybe } from 'graphql/jsutils/Maybe'

type AlbumCoverProps = {
  image: Maybe<string> | undefined
  title: Maybe<string> | undefined
}

export default function AlbumCover({ image, title }: AlbumCoverProps) {
  return (
    <Cover $bg={image || ''}>
      <Image src={image || ''} alt={title || ''} width={428} height={428} />
    </Cover>
  )
}
