import React, { Component } from 'react';
import spoingus from '../../assets/spoingus.webp'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <h1 id="home-title">Scratch Right</h1>
                <h3 id="home-button">Start Looking!</h3>
                <div id="message-container">
                    <p class="send">Hey, this is a test</p>
                    <p class="receive">Wow, the tails on the messages don't work!</p>
                </div>
            </div>
        );
    }
}

export default Home;