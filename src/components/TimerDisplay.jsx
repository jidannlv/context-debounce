import React from 'react';
import { useTimer } from '../context/TimerContext';

const TimerDisplay = () => {
  const { timeLeft } = useTimer();

  return (
    <div>
      {timeLeft > 0 ? <h2>Time left: {timeLeft} seconds</h2> : null}
    </div>
  );
};

export default TimerDisplay;
