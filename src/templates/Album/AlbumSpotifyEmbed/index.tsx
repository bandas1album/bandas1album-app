import { AlbumContentTitle } from '../AlbumDescription/style'
import { safeSpotifyEmbedUrl } from '@/utils/safeSpotifyEmbedUrl'
import { EmbedFrame, EmbedWrapper } from './styles'

type AlbumSpotifyEmbedProps = {
  url: string | null | undefined
  albumTitle?: string
}

export default function AlbumSpotifyEmbed({
  url,
  albumTitle
}: AlbumSpotifyEmbedProps) {
  const embedUrl = safeSpotifyEmbedUrl(url)
  if (!embedUrl) return null

  const title = albumTitle
    ? `Review no Spotify — ${albumTitle}`
    : 'Review no Spotify'

  return (
    <EmbedWrapper>
      <AlbumContentTitle>{title}</AlbumContentTitle>
      <EmbedFrame
        src={embedUrl}
        title={title}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowFullScreen
      />
    </EmbedWrapper>
  )
}
