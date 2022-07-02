import React, { Component } from 'react';
import './Footer.css'
import github from '../../assets/github.svg'

class Footer extends Component {
    render() {
        return (
            <div id="footer-container">
                <ul className='social-media'>
                    <li>Logan</li>
                    <a href="https://github.com/Renzlawr" target="_blank"><img src={github}/></a>
                </ul>
                <div id="cr">
                    <p>© Copyright</p>
                    <p>Logan and Jenner</p>
                </div>
                <ul className='social-media'>
                    <li>Jenner</li>
                    <a href="https://github.com/jennerdulce" target="_blank"><img src={github}/></a>
                </ul>
            </div>
        )
    }
}

export default Footer;