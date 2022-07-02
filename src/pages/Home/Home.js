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
                    <p class="send">Hey, this is a test</p>
                    <p class="receive">Wow, the tails on the messages don't work!</p>
                </div>
            </div>
        );
    }
}

export default Home;