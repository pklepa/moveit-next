import { ReactElement } from 'react';

import styles from '../styles/components/Countdown.module.scss';

interface Props {}

function Countdown(): ReactElement<Props> {
  return (
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
  );
}

export default Countdown;
