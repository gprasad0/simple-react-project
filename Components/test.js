import React, { Component } from 'react';
import CommentDetails from './CommentDetails';

class Test extends Component {
    render() {
        return (
            <div className= "ui container comments" >
                <CommentDetails author='Sam' />
                <CommentDetails author='Samuel' />
                <CommentDetails author='Samosa' />
                <CommentDetails author='Samreen' />
            </div>
        );
    }
}

export default Test;