import Head from 'next/head';
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

        <p className={styles.description}>
          We can't thank you enough. Check out our posts!
        </p>

        <p className={styles.description}>This is not an official starter!</p>
      </main>

      <footer className={styles.footer}>
        Putting unthinkable size, numbers, and complexity into a form you can
        wrap your head around
      </footer>
    </div>
  );
}
