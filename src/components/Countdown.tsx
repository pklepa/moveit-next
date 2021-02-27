import { ReactElement, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.scss';

interface Props {}

function Countdown(): ReactElement<Props> {
  const {
    minutes,
    seconds,
    hasFinished,
    isTimerActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
