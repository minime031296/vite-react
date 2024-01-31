import React, { useState } from 'react';
import Timer from './component/Timer';
import "./App.css"

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleToggle = () => {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <button onClick={handleToggle} id="toggle">{showComponent ? "Hide Timer" : "Show Timer"}</button>
      {showComponent ? <Timer /> : null}
    </div>
  );
}

export default App;
