import React, { useState, useEffect } from 'react';

let renders = 0;

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('hola');
  })

  useEffect(() => {
    setText('chau')
  })

  renders+=1;

  return( 
    <div>{text} {renders}</div>
  )
}
