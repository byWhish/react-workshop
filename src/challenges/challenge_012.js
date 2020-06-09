import React, { createContext, Component } from 'react';
import RenderCount from '../components/RenderCount';
import Context from '../components/Context';

class ContextComponent extends Component {
    render() {
        return (
            <Context.Consumer>
                {({ themes }) => (
                    <div className="container">
                        <RenderCount />
                        <div className="output" style={themes.dark}>
                            Context
                        </div>
                    </div>
                )}
            </Context.Consumer>
        )
    }
};

export default ContextComponent;