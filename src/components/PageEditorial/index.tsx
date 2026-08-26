import Markdown from 'react-markdown'
import * as S from './styles'

type PageEditorialProps = {
  /** WP editor content (home) or taxonomy meta description (category). */
  content?: string | null
  variant?: 'intro' | 'content'
}

export default function PageEditorial({
  content,
  variant = 'content'
}: PageEditorialProps) {
  if (!content?.trim()) return null

  return (
    <S.Wrapper $variant={variant} aria-label="Texto introdutório">
      <Markdown skipHtml={true}>{content}</Markdown>
    </S.Wrapper>
  )
}
