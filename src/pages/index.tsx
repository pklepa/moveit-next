import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar/ExperienceBar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Moveit - Home</title>
      </Head>

      <ExperienceBar />
    </div>
  );
}
