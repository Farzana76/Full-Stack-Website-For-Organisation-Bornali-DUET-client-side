import React from 'react';
import './Footer.css';
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faFacebook} />
const element2 = <FontAwesomeIcon icon={faInstagram} />
const element3 = <FontAwesomeIcon icon={faAt} />
const Footer = () => {
    return (
        <div className="footer text-center">
            <div className="row">
                {/* first column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-3">
                    <img className="w-25 mb-4" src={logo} alt="" />
                    <h4 className="fw-400 footer-heading">Location</h4>
                    <h5 className="footer-heading">DUET, Gazipur</h5>
                </div>
                {/* second column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-3 mt-5 pt-5">
                    <h4 className="ps-5 footer-heading">Around the web</h4>
                    {/* icon links */}
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/canvasacrylicpaintingsbysnm" className="text-dark me-2 h4 footer-heading">
                        {element}
                    </a> 
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/story_of_canvas_art_by_snm/" className="text-dark me-2 h4 footer-heading">
                        {element2}
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://myaccount.google.com/profile" className="text-dark h4 footer-heading">
                        {element3}
                    </a>
                </div>
                {/* third column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-5 mt-4">
                    <h4 className="footer-heading">About</h4>
                    <h6 className="footer-heading fw-normal">A Student Welfare Association of Former Students of Dhaka Polytechnic Institute at DUET </h6>
                </div>
            </div>
            <div className="text-light p-2 h5 mb-0 last bg-dark">
                <p>&copy; Developed by DazingDevs</p>
            </div>
        </div>
    );
};

export default Footer;