import React, { useState } from 'react';
import './App.css';
import Challenge001 from './challenges/challenge_001';
import Challenge002 from './challenges/challenge_002';
import Challenge003 from './challenges/challenge_003';
import Challenge004 from './challenges/challenge_004';

const App = () => {
  const [challenge, setChallenge] = useState(4)
  const handleClick = () => {
    
  }

  return (
    <div className="App">
    <div className="buttons">
      <button>Challenge 001</button>
      <button>Challenge 002</button>
      <button>Challenge 003</button>
      <button>Challenge 004</button>
    </div>
    <div className="challenges">
      {{
        1: <Challenge001 />,
        2: <Challenge002 />,
        3: <Challenge003 />,
        4: <Challenge004 />,
      }[challenge]}
    </div>
    </div>
  );
}

export default App;
