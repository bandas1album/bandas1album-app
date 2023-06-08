import { Html, Head, Main, NextScript } from 'next/document'
import StyledComponentsRegistry from '../../lib/registry'

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <NextScript />
      </body>
    </Html>
  )
}
