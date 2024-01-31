import React, { useState, useEffect } from 'react';
import "./Timer.css"

function Timer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running == true) {
      intervalId = setInterval(() => {
        setCount((prev) => {
          if (prev === 0) {
            clearInterval(intervalId);
            setRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  const handleInc = () => {
    setCount((prev) => {
      if (prev === 0) {
        setRunning(true);
        
      }
      return prev + 1
    });
    setRunning(true)
  };

  const handleReset = () => {
    setCount(0);
    setRunning(false);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleResume = () => {
    setRunning(true);
  };

  return (
    <div>
      <p id="countdown">Countdown: {count} </p>
      <button onClick={handleInc} id="inc">Inc</button>
      <button onClick={handleReset} id="reset">Reset</button>
      <button onClick={handlePause} id="pause">Pause</button>
      <button onClick={handleResume} id="resume">Resume</button>
    </div>
  );
}

export default Timer;
