import React, { Component } from 'react';
import bg from 'src/common/images/login_bg.png';
import { Link } from 'react-router-dom';
import './index.less';
import { connect } from 'react-redux';
import actions from 'src/store/actions/session';
@connect(state => state.session, actions)
class Profile extends Component {
    componentDidMount() {
        this.props.setValidate();
    }
    render() {
        return (
            <div className="full profile">
                <div>
                    <img src={bg} />
                    {this.props.user ? (
                        <a href="javascript:">{this.props.user}</a>
                    ) : (
                        <Link to="/login">登录</Link>
                    )}
                </div>
            </div>
        );
    }
}

// export default connect(state => state.session, actions)(Profile);
export default Profile;
