import {Button} from './Button';

interface ButtonBarProps {
  handleStart: () => void,
  handleStop: () => void,
  handleRestart: () => void,
  handleLap: () => void
}

export const ButtonBar: React.FC<ButtonBarProps> = ({ 
  handleStart, handleStop, handleRestart, handleLap 
}) => {
    return (
      <div>
        <Button onClick={handleStart} text="Start"/>
        <Button onClick={handleStop} text="Stop"/>
        <Button onClick={handleRestart} text="Restart"/>
        <Button onClick={handleLap} text="Lap"/>
      </div>
    );
};