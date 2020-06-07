import React, { createContext, Component } from 'react';
import RenderCount from '../components/RenderCount';

const Context = createContext({});

const themes = {}

const InnerComponent = ({ context }) => {
    return <div style={context.style}></div>
}

class ContextComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Context.Provider value={themes}>
                <Context.Consumer>
                    <InnerComponent />                    
                </Context.Consumer>
            </Context.Provider>
        )
    }
};

export default FetchComponent;