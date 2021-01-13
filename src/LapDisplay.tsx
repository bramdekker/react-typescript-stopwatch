import React, { ReactElement } from 'react';
import { calcMins, calcSecs, calcMs } from './timeConverters';
import { Button } from './Button';
import './LapDisplay.css';
 
interface LapDisplayProps {
  laps: number[],
  handleClearLaps: () => void
};

const makeLapContent = (laps: number[]) => {
  if (laps === undefined || laps.length === 0) {
    return (<p>No laps yet.</p>);
  }

  return laps.map((ms: number, idx: number): ReactElement => {
    return <p><b>Lap {idx}:</b>&emsp;{calcMins(ms)}:{calcSecs(ms)}.{calcMs(ms)}</p> 
  })
}

export const LapDisplay: React.FC<LapDisplayProps> = ({ laps, handleClearLaps }) => {
    return (
      <div className="lapDisplay">
        <Button onClick={handleClearLaps} text="Clear laps"/>
        <h3>Laps</h3>
        {makeLapContent(laps)}
      </div>
    );
};