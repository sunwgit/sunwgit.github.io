import React, { Component } from 'react';
import HomeHeader from 'src/page/Home/HomeHeader';
import './index.less';
import { connect } from 'react-redux';
import actions from 'src/store/actions/home';
import HomeSwiper from './HomeSwiper';
import { loadMore, pullRefresh } from 'src/common/util';
import Loading from 'src/components/Loading/Loading';
import { Link } from 'react-router-dom';
class Home extends Component {
    constructor() {
        super();
        this.content = React.createRef();
    }
    chooseLesson = val => {
        this.props.setLesson(val);
    };
    componentDidMount() {
        if (this.props.slider.list.length === 0) {
            this.props.setSlider();
        }
        if (this.props.lesson.lists.length === 0) {
            this.props.setLessonList();
        }
        //this.content.current
        loadMore(this.content.current, () => this.props.setLessonList());
        //下拉刷新
        pullRefresh(this.content.current, this.props.refresh);
    }

    render() {
        return (
            <div className="full home">
                <HomeHeader chooseLesson={this.chooseLesson} />
                <div className="content" ref={this.content}>
                    {this.props.slider.list.length > 0 ? (
                        <HomeSwiper list={this.props.slider.list} />
                    ) : (
                        <Loading />
                    )}
                    <div className="home-list">
                        {this.props.lesson.lists.length > 0 ? (
                            this.props.lesson.lists.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={{
                                            pathname: '/detail',
                                            state: item
                                        }}
                                    >
                                        <img src={item.url} alt="" />
                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <Loading />
                        )}
                        {this.props.lesson.hasMore ? (
                            <a
                                href="javascript:"
                                className="home-more"
                                // onClick={() => this.props.setLessonList()}
                            >
                                <Loading />
                            </a>
                        ) : (
                            <span className="home-more">没有更多了</span>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.home, actions)(Home);
