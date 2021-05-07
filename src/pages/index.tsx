import Head from 'next/head';
// @ts-ignore
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>All to scale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Thanks for supporting All to Scale</h1>

        <p className={styles.description}>Check out our posts!</p>

        <div className={styles.timeline}>
          <TwitterTimelineEmbed sourceType="profile" screenName="alltoscale" />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Putting unthinkable size, numbers, and complexity into a form you can
          wrap your head around
        </p>
        <p>
          <a href="https://www.planetary.org/worlds/pale-blue-dot">
            Pale blue dot.
          </a>
        </p>
      </footer>
    </div>
  );
}
