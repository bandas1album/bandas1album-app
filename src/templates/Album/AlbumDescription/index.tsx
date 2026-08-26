import { AlbumContentTitle, AlbumDescriptionContainer } from "./style"

const AlbumDescription = ({ title, description }: { title: string, description: string }) => {
  return (
    <AlbumDescriptionContainer>
      <AlbumContentTitle>Descrição do álbum "{title}"</AlbumContentTitle>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </AlbumDescriptionContainer>
  )
}

export default AlbumDescription