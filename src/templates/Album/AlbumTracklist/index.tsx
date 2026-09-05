import { decodeBrokenUnicode } from '@/utils/decodeUnicode'
import { List, ListTitle, ListWrapper, TrackPlay } from './styles'
import type { Album, AlbumTrack } from '@/api/types/Album'
import { Pause, Play } from '@styled-icons/ionicons-solid'
import { usePlayer } from '@/contexts/PlayerContext'
import type { CSSProperties } from 'react'

type AlbumTrackListProps = {
  album: Album
  list: AlbumTrack[] | undefined
}

export default function AlbumTracklist({ album, list }: AlbumTrackListProps) {
  const { playAlbumTrack, isPlaying, isTrackActive, getTrackProgress } =
    usePlayer()

  return (
    <ListWrapper>
      <ListTitle>Lista de faixas</ListTitle>
      <List>
        {list?.map((track, index) => {
          const youtubeId = track.youtube_id?.trim()
          const active = isTrackActive(album.slug, index)
          const progress = getTrackProgress(album.slug, index)
          const showPause = active && isPlaying

          return (
            <li
              key={`track-${index}`}
              data-progress={`${progress}%`}
              data-active={active ? 'true' : undefined}
              style={
                {
                  '--progress': `${progress}%`
                } as CSSProperties
              }
            >
              {youtubeId && (
                <TrackPlay
                  type="button"
                  aria-label={
                    showPause
                      ? `Pausar ${decodeBrokenUnicode(track.name)}`
                      : `Tocar ${decodeBrokenUnicode(track.name)}`
                  }
                  onClick={() => playAlbumTrack(album, index)}
                >
                  {showPause ? <Pause size={16} /> : <Play size={16} />}
                </TrackPlay>
              )}
              <strong className="track-name">
                {decodeBrokenUnicode(track.name)}
              </strong>
              <span className="track-duration">{track.duration}</span>
            </li>
          )
        })}
      </List>
    </ListWrapper>
  )
}
