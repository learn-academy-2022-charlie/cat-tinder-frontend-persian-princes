import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <h1 id="home-title">Scratch Right</h1>
                <NavLink id="home-button" to="/deck">
                    Start Hunting!
                </NavLink>
                <div id="message-container">
                    <p className="send">You’ve got to be kitten me!</p>
                    <p className="receive">I think we should get meow-rried someday!</p>
                    <p className="send">I’m so fur-tunate</p>
                    <p className="receive">Purr-haps we can cuddle later</p>

                </div>
            </div>
        );
    }
}

export default Home;