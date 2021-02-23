import { ReactElement } from 'react';
import styles from './styles.module.scss';

interface Props {}

function ExperienceBar(): ReactElement<Props> {
  return (
    <header className={styles['experience-bar']}>
      <span>0 xp</span>
      <div>
        <div
          className={styles['current-xp-bar']}
          style={{ width: '50%' }}
        ></div>
        <span className={styles['current-xp-text']} style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;
