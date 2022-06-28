import React, { Component } from 'react';
import './NotFound.css'

class NotFound extends Component {
    render() {
        return (
            <div id='not-found-container'>
                <h1>404: Not Found</h1>
                <img src='' alt='' />
                <button>Home</button>
            </div>
        );
    }
}

export default NotFound;