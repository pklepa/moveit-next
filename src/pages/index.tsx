import Head from 'next/head';

import styles from '../styles/pages/Home.module.scss';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moveit - Home</title>
      </Head>

      <div className={styles.container}>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
          </div>

          <div></div>
        </section>
      </div>
    </>
  );
}
