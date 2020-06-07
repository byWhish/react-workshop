import React, { useContext } from 'react';
import RenderCount from '../components/RenderCount';
import Context from '../components/Context';

const ContextComponent = () => {
    const { themes } = useContext(Context);

    return (
        <div className="container">
            <RenderCount />
            <div className="output" style={themes.dark}>
                <div>Context</div>
            </div>
        </div>
    )
};

export default ContextComponent;