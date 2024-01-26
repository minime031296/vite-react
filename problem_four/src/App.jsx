import React, { useState,useEffect } from 'react';
import Timer from './component/Timer';
import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [count, setCount] = useState(0);
  

  useEffect(()=>{
    let interval 

    if(count > 0 && showComponent) {
      interval = setInterval(()=>{
        setCount((previous)=>previous-1)
      },1000)
    }
   return (()=>{clearInterval(interval)})
  }, [count, showComponent])

  function handleToggle() {
    setShowComponent(!showComponent);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleToggle}>Toggle button</button>
      {showComponent && <Timer c={count} setCount={setCount} />}
    </>
  );
}

export default App;
