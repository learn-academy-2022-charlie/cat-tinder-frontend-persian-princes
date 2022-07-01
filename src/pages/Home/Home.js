import React, { Component } from 'react';
import spoingus from '../../assets/spoingus.webp'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <h1 id="home-title">Scratch Right</h1>
                <h3 id="home-button">Start Looking!</h3>
            </div>
        );
    }
}

export default Home;