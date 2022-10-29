 import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Link from 'next/link'
import bgMainPage from '../public/image/bg-main-page-4x.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={bgMainPage} alt='bg' priority fill className={styles.bg}/>
        <h1>Hello</h1>
        <Link href='/session'>PLAY</Link>
      </main>
    </div>
  )
}
