import { AlbumContentTitle, AlbumDescriptionContainer } from './style'

type AlbumDescriptionProps = {
  title: string
  description: string
}

const AlbumDescription = ({ title, description }: AlbumDescriptionProps) => {
  return (
    <AlbumDescriptionContainer>
      <AlbumContentTitle>
        Descrição do álbum &ldquo;{title}&rdquo;
      </AlbumContentTitle>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </AlbumDescriptionContainer>
  )
}

export default AlbumDescription
