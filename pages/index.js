import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FiExternalLink} from "react-icons/fi";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Futures Literacy is coming soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

<h1 className={styles.title}>
  <Typewriter
  options={{
  strings: ['We use the future every day.', 'We predict, fear, hope and dream.', 'This has a large impact on how we see the present', 'and yet, we know very little about how and why we use the future.', 'It is time for Futures Literacy.'],
  autoStart: true,
  deleteSpeed: 50,
  loop: true,
  pauseFor: 1000
  }}
/>
</h1>

        <div className={styles.holder}>
        <a href="https://www.hanze.nl/eng/research/overviews/FutureLiteracyKnowLabs" target="_blank" className={styles.code}> <span style={{marginRight: "8px", textDecoration: "underline"}}>Futures Literacy is launching soon. In the mean time, learn more via Hanze UAS website</span><FiExternalLink /></a>
        </div>
      </main>

      <footer className={styles.footer}>&copy; 2021 Futures Literacy |  <a href="mailto: info@futuresliteracy.net">info@futuresliteracy.net</a></footer>
    </div>
  )
}
