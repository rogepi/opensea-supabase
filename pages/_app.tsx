import { AppProps } from 'next/app'

import Provider from '../components/Provider'
import Layout from '../components/Layout'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
