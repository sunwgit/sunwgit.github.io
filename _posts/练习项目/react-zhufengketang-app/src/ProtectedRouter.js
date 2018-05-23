import React, { Component } from 'react';
import { validate } from 'src/api/session';
import 'babel-polyfill';
import { withRouter } from 'react-router-dom';
@withRouter
class ProtectedRouter extends Component {
    constructor() {
        super();
    }
    async componentDidMount() {
        let { user } = await validate();
        if (!user) {
            this.props.history.push('/login');
        }
    }
    render() {
        let C = this.props.component;
        return <C />;
    }
}

export default ProtectedRouter;
