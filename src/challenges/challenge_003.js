import React, { useState, useEffect, useLayoutEffect } from 'react';
import RenderCount from '../components/RenderCount';

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('hola');
  });

  useLayoutEffect(() => {
    setText('chau')
  });

  return( 
    <div className="container">
      <RenderCount />
      <div className="output">{text}</div>
    </div>
  )
}
