import { ReactElement, useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.scss';

interface Props {}

function Countdown(): ReactElement<Props> {
  const DEFAULT_TIME: number = 0.1;

  const [time, setTime] = useState(DEFAULT_TIME * 60);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  let countdownTimeout: NodeJS.Timeout;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsTimerActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsTimerActive(false);
    setTime(DEFAULT_TIME * 60);
  }

  useEffect(() => {
    if (isTimerActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isTimerActive && time === 0) {
      setHasFinished(true);
      setIsTimerActive(false);
    }
  }, [isTimerActive, time]);

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

      {hasFinished ? (
        <button
          disabled
          className={`${styles.countdown_button} ${styles.complete}`}
        >
          <div>
            Cicle complete <span></span>
          </div>
        </button>
      ) : (
        <>
          {isTimerActive ? (
            <button
              onClick={resetCountdown}
              className={`${styles.countdown_button} ${styles.active}`}
              type="button"
            >
              <div>
                Abandon cicle <span></span>
              </div>
            </button>
          ) : (
            <button
              onClick={startCountdown}
              className={styles.countdown_button}
              type="button"
            >
              <div>
                Start a cicle <span></span>
              </div>
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Countdown;
