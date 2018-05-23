import React, { Component } from 'react';
import './index.less';
import { NavLink } from 'react-router-dom';
class TabBar extends Component {
    render() {
        return (
            <div className="tab-bar">
                <li>
                    <NavLink to="/home">
                        <i className="iconfont icon-xingqiu" />首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lesson">
                        <i className="iconfont icon-react" />我的课程
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <i className="iconfont icon-xiaolian" />个人中心
                    </NavLink>
                </li>
            </div>
        );
    }
}

export default TabBar;
