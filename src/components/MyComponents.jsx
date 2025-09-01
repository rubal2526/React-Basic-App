import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MyComponents extends Component {
    render() {
        //desrtucring assignment
        const { name,age } = this.props;

        return (
            <div>
                <h2>클래스 타입 컴포넌트</h2>
                <h3>Hello! {name} - {age}</h3>
            </div>
        );
    }
}
MyComponents.defaultProps = {
    name: '리액트JS'
};

MyComponents.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};

export default MyComponents;