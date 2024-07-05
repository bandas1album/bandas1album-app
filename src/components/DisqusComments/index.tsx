import { Maybe } from '@/graphql/generated/graphql'
import { DiscussionEmbed } from 'disqus-react'
import { CommentsWrapper } from './styles'

type TDisqusComments = {
  slug: Maybe<string> | undefined
  id: Maybe<string> | undefined
  title: Maybe<string> | undefined
}

export default function DisqusComments({ slug, id, title }: TDisqusComments) {
  const disqusShortname = 'bandas1album'
  const disqusConfig = {
    url: `https://bandas1album.com.br/album/${slug}`,
    identifier: id as string | undefined,
    title: title as string | undefined
  }

  return (
    <CommentsWrapper>
      <style>
        {`
          #disqus_thread a {
            color: #fff;
          }
        `}
      </style>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </CommentsWrapper>
  )
}
