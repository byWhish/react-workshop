import React, {useContext, useState} from 'react';
import './App.css';
import Challenge000 from './challenges/challenge_000';
import Challenge001 from './challenges/challenge_001';
import Challenge002 from './challenges/challenge_002';
import Challenge003 from './challenges/challenge_003';
import Challenge004 from './challenges/challenge_004';
import Challenge005 from './challenges/challenge_005';
import Challenge006 from './challenges/challenge_006';
import Challenge007 from './challenges/challenge_007';
import Challenge008 from './challenges/challenge_008';
import Challenge009 from './challenges/challenge_009';

const challenges = Array(10).fill(0);

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
          6: <Challenge006 />,
          7: <Challenge007 />,
          8: <Challenge008 />,
          9: <Challenge009 />,
      }[challenge]}
      <img src='/img/Banner.png' />
      </div>
    </div>
  );
}

export default App;
