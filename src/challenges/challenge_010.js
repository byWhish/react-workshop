import React, { useState, useEffect } from 'react';
import RenderCount from '../components/RenderCount';

const InnerComponent = ({ drill }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData('Toblerone')
    }, []);
    
    return (
    <div className="container">
        <RenderCount />
        <div className="output">
        {drill}
        </div>
    </div>
  )}
  
  const InnerWrapper = ({ drill }) => (
    <InnerComponent drill={drill} />
  )
  
  const Wrapper = ({ drill }) => (
    <InnerWrapper drill={drill} />
  )
  
  const Container = ({ drill }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => setData('Tita'), 1000)
    }, []);

    return (
        <Wrapper drill={drill} />
        )
    }

const ContextComponent = () => {
    const [drill, setDrill] = useState('Rhodesia');

    return (
        <Container drill={drill} />
    )
};

export default ContextComponent;