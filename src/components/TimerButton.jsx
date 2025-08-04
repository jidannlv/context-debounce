import React, { useRef } from 'react';
import { useTimer } from '../context/TimerContext';

const TimerButton = () => {
    const { setTimeLeft, setIsDark } = useTimer();
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleClick = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setTimeLeft(5);

        // Start countdown
        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        timeoutRef.current = setTimeout(() => {
            alert("Time's up!");
            setIsDark(prev => !prev);
        }, 5000);
    };

    return (
        <button onClick={handleClick} style={{ padding: '10px', margin: '20px' }}>
            Start 5s Timer
        </button>
    );
};

export default TimerButton;
