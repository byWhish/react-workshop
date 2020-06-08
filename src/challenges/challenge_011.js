import React, { useState, useEffect } from 'react';
import RenderCount from '../components/RenderCount';

const ContextComponent = () => {
    const [data, setData] = useState('Rhodesia');

    useEffect(() => {
        setTimeout(() => setData('Tita'), 100)
    }, [])

    useEffect(() => {
        setTimeout(() => setData('Nugaton'), 200)
    }, [])

    useEffect(() => {
        setTimeout(() => setData('Toffi'), 300)
    }, [])

    useEffect(() => {
        setTimeout(() => setData('Holanda'), 400)
    }, [])

    useEffect(() => {
        setTimeout(() => setData('Marroc'), 500)
    }, [])

    return (
        <div className="container">
            <RenderCount />
            <div className="output">{data}</div>
        </div>
    )
};

export default ContextComponent;