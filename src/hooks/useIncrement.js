const { useState, useCallback } = require('react');

const useIncrement = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(x => x+1);
    }, [count]);

    return [count, increment];
}

module.exports = useIncrement;