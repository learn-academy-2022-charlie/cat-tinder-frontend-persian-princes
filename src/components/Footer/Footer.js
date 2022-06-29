import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div id="footer-container">
                <ul className='social-media'>
                    <li>Logan</li>
                    <li><a href=''>Social Media Icon</a></li>
                    <li><a href=''>Social Media Icon</a></li>
                    <li><a href=''>Social Media Icon</a></li>
                </ul>
                <p>© Copyright Logan and Jenner</p>
                <ul className='social-media'>
                    <li>Jenner</li>
                    <li><a href=''>Social Media Icon</a></li>
                    <li><a href=''>Social Media Icon</a></li>
                    <li><a href=''>Social Media Icon</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;