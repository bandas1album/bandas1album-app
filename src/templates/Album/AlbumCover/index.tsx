import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { usePlayer } from '@/contexts/PlayerContext'
import {
  CoverFrame,
  CoverImageWrap,
  PlayerSlot,
  PlyrChromeReset
} from './styles'

type AlbumCoverProps = {
  image: string | undefined
  title: string | undefined
  albumSlug: string
}

export default function AlbumCover({
  image,
  title,
  albumSlug
}: AlbumCoverProps) {
  const slotRef = useRef<HTMLDivElement>(null)
  const { registerPlayerHost, isAlbumActive } = usePlayer()
  const showPlayer = isAlbumActive(albumSlug)

  useEffect(() => {
    registerPlayerHost(slotRef.current)
    return () => registerPlayerHost(null)
  }, [registerPlayerHost, albumSlug])

  return (
    <>
      <PlyrChromeReset />
      <CoverFrame $bg={image || ''} $playerActive={showPlayer}>
        <CoverImageWrap $hidden={showPlayer}>
          <Image
            src={image || ''}
            alt={title || ''}
            fill
            sizes="(max-width: 768px) 100vw, 428px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </CoverImageWrap>
        <PlayerSlot
          ref={slotRef}
          className="album-cover-player"
          $active={showPlayer}
          aria-hidden={!showPlayer}
        />
      </CoverFrame>
    </>
  )
}
