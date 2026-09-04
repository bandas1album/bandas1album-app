import { AlbumContentTitle, AlbumDescriptionContainer } from './style'
import { sanitizeHtml } from '@/utils/sanitizeHtml'

type AlbumDescriptionProps = {
  title: string
  description: string
}

const AlbumDescription = ({ title, description }: AlbumDescriptionProps) => {
  const safeHtml = sanitizeHtml(description)

  if (!safeHtml) return null

  return (
    <AlbumDescriptionContainer>
      <AlbumContentTitle>
        Descrição do álbum &ldquo;{title}&rdquo;
      </AlbumContentTitle>
      <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
    </AlbumDescriptionContainer>
  )
}

export default AlbumDescription
