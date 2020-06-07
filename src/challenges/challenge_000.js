import React, { useState, useEffect } from 'react';
import RenderCount from '../components/RenderCount';

const apiCall = () => Promise.resolve(); 

export default () => {
  const [text, setText] = useState('');

  useEffect(() => {
    apiCall();
  });

  useEffect(() => {
    apiCall();
  });

  useEffect(() => {
    apiCall();
  });

  useEffect(() => {
    apiCall();
  });

  return( 
    <div className="container">
      <RenderCount />
      <div className="output">{text}</div>
    </div>
  )
}
