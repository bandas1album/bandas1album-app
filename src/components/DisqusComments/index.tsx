import { DiscussionEmbed } from 'disqus-react'
import { CommentsWrapper } from './styles'
import { useEffect, useRef, useState } from 'react'
import { ButtonFull } from '@/components/Buttons/ButtonFull'

type TDisqusComments = {
  slug: string | undefined
  id: string | undefined
  title: string | undefined
}

export default function DisqusComments({ slug, id, title }: TDisqusComments) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const disqusShortname = 'bandas1album'
  const disqusConfig = {
    url: `https://bandas1album.com.br/album/${slug}`,
    identifier: id as string | undefined,
    title: title as string | undefined
  }

  useEffect(() => {
    if (shouldLoad || !containerRef.current) return

    const node = containerRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <CommentsWrapper ref={containerRef}>
      <style>
        {`
          #disqus_thread a {
            color: #fff;
          }
        `}
      </style>
      {shouldLoad ? (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      ) : (
        <ButtonFull
          type="button"
          label="Ver comentários"
          onClick={() => setShouldLoad(true)}
        />
      )}
    </CommentsWrapper>
  )
}
