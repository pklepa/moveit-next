import { ReactElement } from 'react';

import styles from '../styles/components/CompletedChallenges.module.scss';

interface Props {}

function CompletedChallenges(): ReactElement<Props> {
  return (
    <div className={styles.completed_challenges_container}>
      <span>Completed Challenges</span>
      <span>5</span>
    </div>
  );
}

export default CompletedChallenges;
