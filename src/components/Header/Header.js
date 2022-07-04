import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div id="header-container">
                <ul id="header-content">
                    <NavLink className="header-link" to="/deck">
                        <li>Find Your Meowtch</li>
                    </NavLink>
                    <NavLink className="header-link" to="/catindex">
                        <li>See All Cats</li>
                    </NavLink>
                    <NavLink id="header-link" className="header-link" to="/">
                        <h1 className="header-title">Cat Tinder</h1>
                    </NavLink>
                    <NavLink className="header-link" to="/catnew">  
                        <li>Add Your Cat!</li>
                    </NavLink>
                    <NavLink className="header-link" to="/aboutus">  
                        <li>About Us</li>
                    </NavLink>
                </ul>
            </div>
        )
    }
}

export default Header;