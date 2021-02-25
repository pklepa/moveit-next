import { ReactElement } from 'react';

import styles from '../styles/components/ChallengeBox.module.scss';

interface Props {}

function ChallengeBox(): ReactElement<Props> {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Earn 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>New challenge</strong>
            <p>Get that ass out of the chair and take a 3 minutes walk.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeSkipBtn}>
              Skip
            </button>
            <button type="button" className={styles.challengeDoneBtn}>
              Done
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Complete a cicle to unlock a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}

export default ChallengeBox;
