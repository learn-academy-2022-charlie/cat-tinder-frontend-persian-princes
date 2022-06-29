import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div id="header-container">
                <h1 className="header-title">Cat Tinder</h1>
            </div>
        );
    }
}

export default Header;