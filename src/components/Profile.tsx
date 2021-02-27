import { ReactElement, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.scss';

interface Props {}

function Profile(): ReactElement<Props> {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profile_container}>
      <img src="https://github.com/pklepa.png" alt="Pedro Klepa" />

      <div>
        <strong>Pedro Klepa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
