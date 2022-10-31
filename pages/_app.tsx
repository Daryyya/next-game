import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Игра!</title>
        <meta name="description" content="Собери в нужном порядке" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={2000}
        position="top-center"
        hideProgressBar
        closeOnClick
        limit={1}
        newestOnTop
      />
    </>
  )
}
