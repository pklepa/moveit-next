import { ReactElement } from 'react';

import styles from '../styles/components/Countdown.module.scss';

interface Props {}

function Countdown(): ReactElement<Props> {
  return (
    <div>
      <div className={styles.countdown_container}>
        <div>
          <span>2</span>
          <span>5</span>
        </div>

        <span>:</span>

        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>

      <div>
        <button className={styles.countdown_button} type="button">
          Start a cicle
        </button>
      </div>
    </div>
  );
}

export default Countdown;
