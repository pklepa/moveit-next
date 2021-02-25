import Head from 'next/head';

import styles from '../styles/pages/Home.module.scss';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

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
            <CompletedChallenges />

            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
    </>
  );
}
