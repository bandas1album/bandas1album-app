import { Html, Head, Main, NextScript } from 'next/document'
import StyledComponentsRegistry from '../../lib/registry'

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body data-theme="dark">
        <Main />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <NextScript />
      </body>
    </Html>
  )
}
