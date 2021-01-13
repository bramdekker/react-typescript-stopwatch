import React from 'react';
import './App.css';
import { StopwatchWrapper } from './StopwatchWrapper';

// Stopwatch mm:ss.msms
// TODO: User can create laps - these will be displayed on the screen
// TODO: User can clear all the laps
function App() {
  return (
    <div className="App">
      <h1 className="title">React Stopwatch</h1>
      <StopwatchWrapper />
    </div>
  );
}

export default App;
