import React, {useContext, useState} from 'react';
import './App.css';
import Challenge000 from './challenges/challenge_000';
import Challenge001 from './challenges/challenge_001';
import Challenge002 from './challenges/challenge_002';
import Challenge003 from './challenges/challenge_003';
import Challenge004 from './challenges/challenge_004';
import Challenge005 from './challenges/challenge_005';

const challenges = Array(6).fill(0);

const App = () => {
  const [challenge, setChallenge] = useState(0);
  
  return (
    <div className="App">
    <div className="buttons">
      {challenges.map((item,idx) => (
        <button onClick={() => setChallenge(idx)}>Challenge 00{idx}</button>
      ))}
    </div>
    <div className="challenges">
      <div>Challenge {challenge}</div>
        {{
          0: <Challenge000 />,
          1: <Challenge001 />,
          2: <Challenge002 />,
          3: <Challenge003 />,
          4: <Challenge004 />,
          5: <Challenge005 />,
      }[challenge]}
      </div>
    </div>
  );
}

export default App;
