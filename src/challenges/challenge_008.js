import React, { useState, useEffect, useLayoutEffect } from 'react';
import RenderCount from '../components/RenderCount';

const apiCall = x => alert(x);

export default () => {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount(count + 1);
  };

  const onClickRequest = () => {
    apiCall(count);
  };

    return( 
      <div className="container">
        <RenderCount />
        <div className="output">
          <button onClick={onClickCount}>Counter</button>
          <button onClick={onClickRequest}>Submit</button>
        </div>
      </div>
    )
}
