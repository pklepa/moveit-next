import { ReactElement, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.scss';

interface Props {}

function ChallengeBox(): ReactElement<Props> {
  const { resetCountdown } = useContext(CountdownContext);
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  function handleChallengeCompleted() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeSkipped() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Earn {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              onClick={handleChallengeSkipped}
              type="button"
              className={styles.challengeSkipBtn}
            >
              Skip
            </button>
            <button
              onClick={handleChallengeCompleted}
              type="button"
              className={styles.challengeDoneBtn}
            >
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
