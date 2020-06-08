import React, { useContext } from 'react';
import RenderCount from '../components/RenderCount';
import Context, { useThemeContext } from '../components/Context';

const ContextComponent = () => {
    const { dark, light } = useThemeContext();

    return (
        <div className="container">
            <RenderCount />
            <div className="output" style={dark}>
                <div>Context</div>
            </div>
        </div>
    )
};

export default ContextComponent;