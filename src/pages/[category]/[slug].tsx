import CategoryTemplate from '@/templates/Category'
import { useGetAlbums } from '@/api/album/get_all'
import { useRouter } from 'next/router'

export default function PageGenre() {
  const {query, isReady} = useRouter()

  const { data: albums } = useGetAlbums({
    page: 1,
    per_page: 99,
    order_by: 'date',
    order: 'DESC',
    taxonomy: {
      category: query.category as string,
      slug: query.slug as string
    },
  }, isReady)

  return (
    <CategoryTemplate {...albums} />
  )
}
