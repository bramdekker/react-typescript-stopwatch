import React from 'react';
import './TimeDisplay.css';
import { calcMins, calcSecs, calcMs } from './timeConverters';

interface TimeDisplayProps {
  ms: number
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ ms }) => {
  return (
    <div className="timeDisplay">
      {calcMins(ms)}:{calcSecs(ms)}.{calcMs(ms)}
    </div>
  );
};