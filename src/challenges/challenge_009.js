import React, { useState, useEffect, Fragment, useContext } from 'react';
import RenderCount from '../components/RenderCount';
import Context from '../components/Context';

const fetchClient = () => {
    return Promise.resolve('data');
};

const FetchComponent = () => {
    const { themes } = useContext();

    return (
        <button style={themes.dark}>Context</button>
    )
};

export default FetchComponent;