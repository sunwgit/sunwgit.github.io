import React, { Component } from 'react';
import logo from 'src/common/images/logo.png';

class HomeHeader extends Component {
    state = { isShow: false };
    changeShow = () => {
        this.setState({ isShow: !this.state.isShow });
    };
    handleSelect = e => {
        let value = e.target.dataset.type;
        this.props.chooseLesson(value);
        this.changeShow();
    };
    render() {
        return (
            <div className="home-header">
                <div className="menu">
                    <img src={logo} alt="" />
                    <div onClick={this.changeShow}>
                        {this.state.isShow ? (
                            <i className="iconfont icon-guanbi" />
                        ) : (
                            <i className="iconfont icon-liebiao" />
                        )}
                    </div>
                </div>
                {this.state.isShow ? (
                    <div className="menu-list" onClick={this.handleSelect}>
                        <li data-type="0">全部课程</li>
                        <li data-type="1">React课程</li>
                        <li data-type="2">Vue课程</li>
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default HomeHeader;
