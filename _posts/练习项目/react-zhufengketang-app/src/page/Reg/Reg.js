import React, { Component } from 'react';
import './index.less';
import { connect } from 'react-redux';
import actions from 'src/store/actions/session';
import Header from 'src/components/Header/Header';
class Reg extends Component {
    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }
    render() {
        return (
            <div className="full login">
                <Header>注册</Header>
                <ul className="box-list">
                    <li>
                        <label htmlFor="username">用户名</label>
                        <input type="text" id="username" ref={this.username} />
                    </li>
                    <li>
                        <label htmlFor="password">密码</label>
                        <input type="text" id="password" ref={this.password} />
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                this.props.setReg({
                                    username: this.username.current.value,
                                    password: this.password.current.value
                                })
                            }
                        >
                            注册
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect(state => state.session, actions)(Reg);
