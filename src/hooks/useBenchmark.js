import { useRef } from 'react';

const useBenchmark = () => {
    const renders = useRef(0);
    
    renders.current++;

    return renders.current;
};

export default useBenchmark;