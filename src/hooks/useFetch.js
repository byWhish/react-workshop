const { useState } = require('react');

const fetchClient = () => {
    return Promise.resolve('data');
};

const useFetch = () => {
    const [status, setStatus] = useState(null);
    const [data, setData] = useState(null);

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

    return [data, status, fetch];
}

module.exports = useFetch;