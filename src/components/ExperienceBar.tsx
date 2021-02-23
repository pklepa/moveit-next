import { ReactElement } from 'react';
import styles from '../styles/components/ExperienceBar.module.scss';

interface Props {}

function ExperienceBar(): ReactElement<Props> {
  return (
    <header className={styles.experience_bar}>
      <span>0 xp</span>
      <div>
        <div className={styles.current_xp_bar} style={{ width: '50%' }}></div>
        <span className={styles.current_xp_text} style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;
