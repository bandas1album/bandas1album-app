'use client'

import { marked } from 'marked'
import { InfosContent } from '../styles'

export function AlbumInfoContent({
  content
}: {
  content: string | TrustedHTML
}) {
  const markedContent = marked(content as string) as string | TrustedHTML

  return (
    <InfosContent
      dangerouslySetInnerHTML={{
        __html: markedContent
      }}
    ></InfosContent>
  )
}
