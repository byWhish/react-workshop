import React, { useState, useEffect } from 'react';
import RenderCount from '../components/RenderCount';

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('Tita');
  })

  useEffect(() => {
    setText('Rhodesia');
  }, [])

  useEffect(() => {
    setText('Toblerone');
  }, [])

  return( 
    <div className="container">
      <RenderCount />
      <div className="output">{text}</div>
    </div>
  )
}
