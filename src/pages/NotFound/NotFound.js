import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NotFound.css'

class NotFound extends Component {
    render() {
        return (
            <div id='not-found-container'>
                <h1>404: Not Found</h1>
                <img src='' alt='' />
                <Link to='/'>
                    <p>Home</p>
                </Link>
            </div>
        )
    }
}

export default NotFound;