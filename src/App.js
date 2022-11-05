import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.css';

function App() {
  const landingDate = new Date("Nov 11, 2022 14:45:00 GMT+0200").getTime();
  const NOW = new Date().getTime();

  console.log(new Date("Nov 11, 2022 14:45:00 GMT+0200"));


  return (
    <main>
      <h1>Time until we arrive:</h1>
      <CountdownTimer targetDate={landingDate} />
    </main>
  );
}

export default App;