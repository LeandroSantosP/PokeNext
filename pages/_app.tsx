import type { AppProps } from 'next/app'
import { DefaultLayout } from '../shared/layout/DefaultLayout'
import { GlobalStyled } from '../styles/GlobalStyled'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultLayout>
        <GlobalStyled />
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}
