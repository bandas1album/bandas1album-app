'use client'

import { marked } from 'marked'
import { InfosContent } from '../styles'

export function AlbumInfoContent({
  content
}: {
  content: string | TrustedHTML
}) {
  const rawMarkup = marked(content as string)

  return (
    <InfosContent
      dangerouslySetInnerHTML={{
        __html: rawMarkup as string | TrustedHTML
      }}
    ></InfosContent>
  )
}
