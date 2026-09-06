import { DiscussionEmbed } from 'disqus-react'
import { CommentsWrapper } from './styles'
import { useEffect, useRef, useState } from 'react'
import { ButtonFull } from '@/components/Buttons/ButtonFull'

type TDisqusComments = {
  slug: string | undefined
  id: string | undefined
  title: string | undefined
}

type DisqusWindow = Window & {
  DISQUS?: {
    reset: (options: {
      reload: boolean
      config: (this: {
        page: { identifier?: string; url?: string; title?: string }
      }) => void
    }) => void
  }
}

export default function DisqusComments({ slug, id, title }: TDisqusComments) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const disqusShortname = 'bandas1album'
  const pageUrl = `https://bandas1album.com.br/album/${slug}`
  const disqusConfig = {
    url: pageUrl,
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

  // Navegação SPA: se o embed já existe, reset em vez de reinjetar embed.js
  useEffect(() => {
    if (!shouldLoad || !id) return

    const w = window as DisqusWindow
    if (!w.DISQUS) return

    w.DISQUS.reset({
      reload: true,
      config() {
        this.page.identifier = id
        this.page.url = pageUrl
        this.page.title = title
      }
    })
  }, [shouldLoad, id, pageUrl, title])

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
