import React, { useState, useEffect, useLayoutEffect } from 'react';
import RenderCount from '../components/RenderCount';

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('Tita');
  });

  useLayoutEffect(() => {
    setText('Rodesia')
  });

  return( 
    <div className="container">
      <RenderCount />
      <div className="output">{text}</div>
    </div>
  )
}
