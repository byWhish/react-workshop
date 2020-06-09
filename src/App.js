import React, {useContext, useState} from 'react';
import './App.css';
import Banner from './components/Banner';
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
import Challenge010 from './challenges/challenge_010';
import Challenge011 from './challenges/challenge_011';
import Challenge012 from './challenges/challenge_012';
import Challenge013 from './challenges/challenge_013';


const challenges = Array(14).fill(0);

const App = () => {
  const [challenge, setChallenge] = useState(' ');
  
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
          ' ': <Banner />,
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
          10: <Challenge010 />,
          11: <Challenge011 />,
          12: <Challenge012 />,
          13: <Challenge013 />,
      }[challenge]}
      <img src='/img/Banner.png' />
      </div>
    </div>
  );
}

export default App;
