import React, { useState, useEffect, Fragment } from 'react';
import RenderCount from '../components/RenderCount';

const fetchClient = () => {
    return Promise.resolve('data');
};

const FetchComponent = () => {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);

    const fetch = () => {
        setStatus('loading');
        fetchClient('/data')
            .then((response) => {
                setData(response);
                setStatus('success');
            })
            .catch(() => {
                setStatus('error')
            })
    };

    useEffect(fetch);

    if (status === 'loading') return <div>Loading</div>;

    if (status === 'error') return <div>Loading</div>;

    return (
        <Fragment>
            <button onClick={this.fetch}>Fetch</button>
            <div>{data}</div>
        </Fragment>
    )
};

export default FetchComponent;