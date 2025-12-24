import { useGetAlbums } from '@/api/album/get_all'
import HomeTemplate from '@/templates/Home'

export default function Home() {
  const {data: albums} = useGetAlbums({
    page: 1,
    per_page: 99,
    order_by: 'date',
    order: 'DESC'
  })

  return (
    <HomeTemplate
      albums={albums?.data || []}
      pagination={albums?.meta || []}
    />
  )
}