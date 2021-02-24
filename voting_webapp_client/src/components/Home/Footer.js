import React from 'react'
import logo from '../../assets/logo.png';
import { Facebook, Twitter, Instagram, ChatLeftText, CalendarEvent, SortNumericUpAlt} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <center>
        <div className="footer">
            <div className="one">
                <div className="links" >
                    <div className="linkul">
                        <h3>Miscellaneous </h3>
                        <ul>
                            <li><a href=""><ChatLeftText /> Contact us</a></li>
                            <li><a href="/"><CalendarEvent /> Previous electoral events</a></li>
                            <li><a href=""><SortNumericUpAlt /> Statistics and figures</a></li>
                        </ul>
                    </div>

                </div>
                <div className="logopic">
                    <a href="/">
                        <img src={logo} alt="Logo" className="logopic1" />
                    </a>
                    <p className="pa">Central Election Commission - Palestine All rights reserved © 2021</p>
                </div>
                <div className="contact" >
                    <h3>Follow Us </h3>
                    <ul>
                        <li><a href=""><Facebook /> Facebook</a></li>
                        <li><a href=""><Twitter/> Twitter</a></li>
                        <li><a href=""><Instagram/> Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </center>
    )
}

export default Footer;
