import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

class HomeSwiper extends Component {
    state = { index: 0 };
    render() {
        let opts = {
            continuous: true,
            auto: 1000,
            transitionEnd: index => this.setState({ index })
        };
        return (
            <div className="home-swiper">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    {this.props.list.map((item, index) => (
                        <img src={item} key={index} />
                    ))}
                </ReactSwipe>
                <div className="dots">
                    {this.props.list.map((item, index) => (
                        <span
                            key={index}
                            className={
                                index === this.state.index ? 'active' : ''
                            }
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default HomeSwiper;
