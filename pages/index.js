import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sounder, Beer. What's not to like?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

<h1 className={styles.title}>
  <Typewriter
  options={{
  strings: ['Hello.', 'Wanna 🍻?', '...', 'or maybe 🍷?', '...or ☕️ -- sure?', '...', 'Soon 💓'],
  autoStart: true,
  deleteSpeed: 100,
  loop: true,
  pauseFor: 1000
  }}
/>
</h1>
      </main>

      <footer className={styles.footer}>&copy; 2021 | A silly something from Sounder, for Sounder.</footer>
    </div>
  )
}
