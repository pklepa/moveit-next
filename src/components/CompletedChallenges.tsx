import { ReactElement, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CompletedChallenges.module.scss';

interface Props {}

function CompletedChallenges(): ReactElement<Props> {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completed_challenges_container}>
      <span>Completed Challenges</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

export default CompletedChallenges;
