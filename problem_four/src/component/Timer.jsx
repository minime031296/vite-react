import React from 'react';

function Timer({ c, setCount }) {
  function handleCount() {
    setCount(c + 1);
  }

  return (
    <div>
      <button onClick={handleCount}>INC</button>
    </div>
  );
}

export default Timer;
