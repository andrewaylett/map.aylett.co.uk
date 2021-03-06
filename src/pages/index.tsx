import Head from 'next/head'
import styles from '../index.module.scss'
import React from 'react'

// noinspection HtmlUnknownTarget
export const Home: React.VoidFunctionComponent = () => (
  <div className={styles.container}>
    <Head>
      <title>map.aylett.co.uk</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className={styles.title}>Map Links</h1>

      <p className={styles.description}>Insert &apos;90s &ldquo;site under construction&rdquo; gif here.</p>
    </main>

    <footer>
      <a href="/_logs" target="_blank" rel="noopener noreferrer">
        Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
)

export default Home
