import React, { createContext, useContext, useState } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <TimerContext.Provider value={{ timeLeft, setTimeLeft, isDark, setIsDark }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
