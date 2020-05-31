import React, { useState, useEffect, useLayoutEffect } from 'react';

let renders = 0;

export default () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1)
  } 

  useEffect(() => {
    setCount(count + 1)
  }, [])

  renders+=1;

  return( 
    <button onClick={handleOnClick} >{count} {countPlusOne}</button>
  )
}
