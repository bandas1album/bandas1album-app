import type { GetStaticProps } from 'next'
import type { GetAlbumsResponse } from '@/api/Albums/GetAlbums/types'
import HomeTemplate from '@/templates/Home'
import { fetchAlbumsFirstPage } from '@/lib/seo/serverAlbum'

export type HomePageProps = {
  initialPage: GetAlbumsResponse
}

export default function Home({ initialPage }: HomePageProps) {
  return <HomeTemplate initialPage={initialPage} />
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const initialPage = await fetchAlbumsFirstPage()

    return {
      props: { initialPage },
      revalidate: 3600
    }
  } catch (e) {
    console.error('[home isr]', e)
    return { notFound: true }
  }
}
