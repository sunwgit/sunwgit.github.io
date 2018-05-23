import React, { Component } from 'react';
import Header from 'src/components/Header/Header';
class Detail extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="full profile">
                <Header>详情页</Header>
                <video
                    style={{ width: '100%' }}
                    controls={true}
                    autoPlay={true}
                    src={this.props.location.state.video}
                />
            </div>
        );
    }
}

export default Detail;
