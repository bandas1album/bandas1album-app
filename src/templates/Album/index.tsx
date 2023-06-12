import Head from 'next/head'

export type AlbumTemplateProps = {
  title: string
}

export default function AlbumTemplate({ title }: AlbumTemplateProps) {
  return (
    <>
      <Head>
        <title>{title} | Bandas de 1 Álbum</title>
      </Head>
      <h1>{title}</h1>
    </>
  )
}
