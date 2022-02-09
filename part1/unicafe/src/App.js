import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      good: clicks.good + 1,
    }));
  };

  const handleNeutralClick = () => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      neutral: clicks.neutral + 1,
    }));
  };

  const handleBadClick = () => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      bad: clicks.bad + 1,
    }));
  };

  return (
    <>
      <Header text='give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header text='statistics' />
      <Statistics clicks={clicks} />
    </>
  );
};

export default App;
