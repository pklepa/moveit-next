import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isTimerActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const DEFAULT_TIME: number = 0.1;
  let countdownTimeout: NodeJS.Timeout;

  const [time, setTime] = useState(DEFAULT_TIME * 60);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsTimerActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsTimerActive(false);
    setHasFinished(false);
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
      startNewChallenge();
    }
  }, [isTimerActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isTimerActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
