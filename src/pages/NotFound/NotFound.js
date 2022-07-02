import React, { Component } from 'react';
import cat from '../../assets/cat-cry.jpeg'
import './NotFound.css'

class NotFound extends Component {
    render() {
        return (
            <div id='not-found-container'>
                <h1>404: Not Found</h1>
                <img src={cat} alt='' />
            </div>
        )
    }
}

export default NotFound;