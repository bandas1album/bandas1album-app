import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '@/styles/global'
import NextNProgress from 'nextjs-progressbar'

import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'
import Tabs from '@/components/Tabs'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    router.prefetch = async () => void {}
  }, [router])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#292556" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XYCDCKWDJ2" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-XYCDCKWDJ2');
        `}
      </Script>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <main role="main">
        <NextNProgress
          color="#a58a67"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />

        <Component {...pageProps} />
        <Tabs />
      </main>
    </>
  )
}
