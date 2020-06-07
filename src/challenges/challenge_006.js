import React, { Component, Fragment } from 'react';
import RenderCount from '../components/RenderCount';

const fetchClient = () => {
    return Promise.resolve('data');
};

class FetchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            status: null,
        }
    }

    static getDerivedStateFromProps() {

    }

    componentDidMount() {
        this.fetch()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.fetch()
    }

    componentWillUnmount() {
        this.fetch().cancel()
    }

    fetch = () => {
        this.setState({status: 'loading'});
        fetchClient('/data')
            .then((response) => {
                this.setState({
                    data: respo,
                    status: 'success',
                })
            })
            .catch(() => {
                this.setState({status: 'error'})
            })
    };

    render() {
        const { data, status } = this.state;

        if (status === 'loading') return <div>Loading</div>;

        if (status === 'error') return <div>Loading</div>;

        return (
            <Fragment>
                <button onClick={this.fetch}>Fetch</button>
                <div>{data}</div>
            </Fragment>
        )
    }
}

export default FetchComponent;