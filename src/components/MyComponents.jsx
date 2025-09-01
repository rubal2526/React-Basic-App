import React, { Component } from 'react';

class MyComponents extends Component {
    render() {
        //desrtucring assignment
        const { name } = this.props;

        return (
            <div>
                <h2>클래스 타입 컴포넌트</h2>
                <h3>Hello! {name}</h3>
            </div>
        );
    }
}
MyComponents.defaultProps = {
    
};

export default MyComponents;