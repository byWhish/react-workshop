import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import RenderCount from '../components/RenderCount';

const apiCall = x => alert(x);

export default () => {
    const count = useRef(0);

    const onClickCount = () => {
        count.current++;
    };

    const onClickRequest = () => {
        apiCall(count.current);
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
