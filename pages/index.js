import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import { motion, useMotionValue, useTransform } from "framer-motion"
import styled from "styled-components"


function createMarkup() {
  return {__html: '<div class="sounder-widget" data-url="https://embed.sounder.fm/play/142610" style="min-width: 720px; height: 100%; margin-bottom: 20px;"></div> <script> (function() { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "soun_der", b = "https://embed.sounder.fm"; if (!gi.call(d, id)) { js = ce.call(d, "script"); js.id = id; js.src = b + "/embed.js"; q = gt.call(d, "script")[0]; q.parentNode.insertBefore(js, q);}})(); </script>'};
}


const Sounder = styled.div``
export default function Home() {
  const x = useMotionValue(0)
const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  return (
    <div className={styles.container}>
      <Head>
        <title>Sounder, Beer. What's not to like?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>



<motion.h1 className={styles.title} drag="x" style={{x, opacity,}} animate={{ scale: 0.5 }} >
  <Typewriter
  options={{
  strings: ['Hello.', 'Wanna 🍻?', '...', 'or maybe 🍷?', '...or ☕️ -- sure?', '...', 'Soon 💓'],
  autoStart: true,
  deleteSpeed: 100,
  loop: true,
  pauseFor: 1000
  }}
/>
</motion.h1>
      </main>

      <Sounder>
          <div dangerouslySetInnerHTML={createMarkup()} />
      </Sounder>
      <footer className={styles.footer}>&copy; 2021 | A silly something from Sounder, for Sounder.</footer>
    </div>
  )
}
