import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>reset</button>
    </>
  );
};

export default App;
