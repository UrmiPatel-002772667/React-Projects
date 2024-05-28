import { useState, useRef } from 'react';

import ResultModal from './ResultModel'
// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTImeRemaining] = useState(targetTime*1000);
  const timeerIsActive = timeRemaining > 0 && timeRemaining< targetTime*1000;
  
  if(timeRemaining <=0){
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset(){
    setTImeRemaining(targetTime*1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTImeRemaining(prevTimeRemaining => prevTimeRemaining -10)
    }, 10);

    setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset = {handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timeerIsActive ? handleStop : handleStart}>
            {timeerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timeerIsActive ? 'active' : undefined}>
          {timeerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}