import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import Layout from './layout/layout'

export default function App({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page: any) => page)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}