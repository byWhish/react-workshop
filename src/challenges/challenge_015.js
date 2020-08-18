import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import RenderCount from '../components/RenderCount';

const apiCall = x => alert(x);

export default () => {
    const [data, setData] = useState(1);
    const [prev, setPrev] = useState(null);
    const [current, setCurrent] = useState(null);

    const onClickRequest = () => {
        setData(x => x + 1);
    };

    useEffect(() => {
        setCurrent(data)
    }, [data])

    useEffect(() => () => {
        setPrev(data)
    }, [data])

    return( 
        <div className="container">
          <RenderCount />
          <div className="output">
              <button>{current}</button>
              <button>{prev}</button>
              <button onClick={onClickRequest}>Submit</button>
          </div>
        </div>
      )
}
