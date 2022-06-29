import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './NotFound.css'

class NotFound extends Component {
    render() {
        return (
            <div id='not-found-container'>
                <h1>404: Not Found</h1>
                <img src='' alt='' />
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>
            </div>
        )
    }
}

export default NotFound;