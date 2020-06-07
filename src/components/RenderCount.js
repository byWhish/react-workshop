import React from 'react';
import useBenchmark from '../hooks/useBenchmark';

const RenderCount = () => {
  const renders = useBenchmark();
  return <div className="renders">Renders count: {renders}</div>  
}

export default RenderCount;