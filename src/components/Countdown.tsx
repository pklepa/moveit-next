import { ReactElement, useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.scss';

interface Props {}

function Countdown(): ReactElement<Props> {
  const [time, setTime] = useState(25 * 60);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsTimeRunning(true);
  }

  useEffect(() => {
    if (isTimeRunning && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isTimeRunning, time]);

  return (
    <div>
      <div className={styles.countdown_container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <div>
        <button
          onClick={startCountdown}
          className={styles.countdown_button}
          type="button"
        >
          Start a cicle
        </button>
      </div>
    </div>
  );
}

export default Countdown;
