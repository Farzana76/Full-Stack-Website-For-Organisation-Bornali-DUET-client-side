import React from 'react';
import './Footer.css';
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const element = <FontAwesomeIcon icon={faFacebook} />
const element2 = <FontAwesomeIcon icon={faYoutube} />
const element3 = <FontAwesomeIcon icon={faAt} />
const Footer = () => {
    return (
        <div className="footer text-center">
            <div className="row">
                {/* first column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-3">
                    <NavLink to="/home">
                        <img className="w-25 mb-4" src={logo} alt="" />
                    </NavLink>
                    <h4 className="fw-bold footer-heading">Location</h4>
                    <h5 className="footer-heading">DUET, Gazipur</h5>
                </div>
                {/* second column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-3 mt-5 pt-5">
                    <h4 className="footer-heading fw-bold">Around the web</h4>
                    {/* icon links */}
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Bornali.Duet/" className="text-dark me-2 h4 footer-heading">
                        {element}
                    </a> 
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCvoGV5SFuLsmZ9nURSrJKmg" className="text-dark me-2 h4 footer-heading">
                        {element2}
                    </a>
                    {/* <a target="_blank" rel="noreferrer" href="https://myaccount.google.com/profile" className="text-dark h4 footer-heading">
                        {element3}
                    </a> */}
                </div>
                {/* third column */}
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-5 mt-4">
                    <h4 className="footer-heading fw-bold">About</h4>
                    <h6 className="footer-heading fw-normal">A Student Welfare Association of Former Students of Dhaka Polytechnic Institute at DUET </h6>
                </div>
            </div>
            <div className="text-light p-2 h6 mb-0 last bg-dark">
                <p className='m-0'>&copy; 2021 | All rights reserved</p>
                <p className='m-0 text-muted'>Developed by DazingDevs</p>
            </div>
        </div>
    );
};

export default Footer;