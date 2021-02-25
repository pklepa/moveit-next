import { ReactElement, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.scss';

interface Props {}

function ExperienceBar(): ReactElement<Props> {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={styles.experience_bar}>
      <span>0 xp</span>
      <div>
        <div
          className={styles.current_xp_bar}
          style={{ width: `${percentToNextLevel}` }}
        ></div>
        <span
          className={styles.current_xp_text}
          style={{ left: `${percentToNextLevel}` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

export default ExperienceBar;
