import React, { useState, useRef } from 'react';
import { ButtonBar } from './ButtonBar';
import { TimeDisplay } from './TimeDisplay';
import { LapDisplay } from './LapDisplay';

type IntervalID = number | undefined;

export const StopwatchWrapper: React.FC = () => {
  const [milliseconds, setMilliseconds] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  const intervalID = useRef<IntervalID>(undefined); 

  const handleStart = () => {
    if (running === true) {
      return;
    }

    setRunning(true);
    const runner = setInterval(setMilliseconds, 10, (prev: number): number => prev + 10);
    intervalID.current = runner;
  }

  const handleStop = () => {
    if (running === false) {
      return;
    }

    setRunning(false);
    clearInterval(intervalID.current);
  }

  const handleRestart = () => {
    setMilliseconds(0);
  }

  const handleLap = () => {
    if (milliseconds === 0) {
      return;
    }
    
    setLaps(laps.concat([milliseconds]));
    setMilliseconds(0);
  }

  const handleClearLaps = () => {
    if (laps === undefined || laps.length === 0) {
      return;
    }
    
    setLaps([]);
  }

  return (
    <>
      <LapDisplay laps={laps} handleClearLaps={handleClearLaps}/>
      <TimeDisplay ms={milliseconds}/>
      <ButtonBar
        handleStart={handleStart}
        handleStop={handleStop}
        handleRestart={handleRestart}
        handleLap={handleLap}
      />
    </>
  );
};