import Head from 'next/head';

import BaseLayout from '@/containers/BaseLayout';
import styles from '../styles/Home.module.css';

const MainLayout: React.FC<any> = ({ title = '', children }) => {
  return (
    <BaseLayout>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>
          <a href="https://www.planetary.org/worlds/pale-blue-dot">GAL 2021</a>
        </p>
        <p>
          <a href="https://www.planetary.org/worlds/pale-blue-dot">GAL 2019</a>
        </p>
        <p>
          <a href="https://www.planetary.org/worlds/pale-blue-dot">GAL 2018</a>
        </p>
      </footer>
    </BaseLayout>
  );
};

export default BaseLayout;
