import React from 'react';
export default function(cb) {
    return class Proxy extends React.Component {
        constructor() {
            super();
            this.state = { component: null };
        }
        async componentDidMount() {
            let { default: component } = await cb();
            this.setState({ component });
        }
        componentWillUnmount() {}
        render() {
            let C = this.state.component;
            return C ? <C /> : null;
        }
    };
}
