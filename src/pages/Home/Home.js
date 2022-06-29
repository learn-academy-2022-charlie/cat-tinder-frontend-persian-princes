import React, { Component } from 'react';
import spoingus from '../../assets/spoingus.webp'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <h1>Home</h1>
                <img id="home-cat" src={spoingus}/>
            </div>
        );
    }
}

export default Home;