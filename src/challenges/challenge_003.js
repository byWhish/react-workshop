import React, { useState, useEffect, useLayoutEffect } from 'react';

let renders = 0;

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('hola');
  })

  useLayoutEffect(() => {
    setText('chau')
  })

  renders+=1;

  return( 
    <div>{text} {renders}</div>
  )
}
