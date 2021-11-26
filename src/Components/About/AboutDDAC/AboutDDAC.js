import React from 'react';
import Menu from '../../Menu/Menu';
import img from '../../../img/banner1.jpg';
import Facebook from './Facebook/Facebook';
import Youtube from './Youtube/Youtube';
import Iframe from 'react-iframe';
import Footer from '../../Footer/Footer';

const AboutDDAC = () => {
    return (
        <div className="bg1">
            <Menu></Menu>
            <div className="box bgw">
                <h1 className="pt-3">About DDAC</h1>
                <hr className="w-50 mx-auto"></hr>
                <h5 className="px-5 mx-5">
                    Dhaka University of Engineering and Technology (DUET), Gazipur is the only school of diploma engineers to establish itself as an engineer in tackling the challenge of technology dependent globalization. DUET is one of the leading engineering universities in Bangladesh. The sole purpose of DHAKA DUET Admission Coaching (DDAC) is to develop the DUET as a suitable student and to fulfill the dreams of the students.It is the sister concern of BORNALI.
                </h5>
                <h5 className="px-5 mx-5 fw-bold mt-4">
                    What are the features of DHAKA DUET Admission Coaching (DDAC)?
                </h5>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h5 className="ps-5 ms-5">
                            <ul>
                                👉 Classes are conducted by talented, skilled and experienced teachers.<br></br>
                                👉 Ensure problem solving through maximum home nursing outside the classroom.<br></br>
                                👉 Ensuring safe accommodation and round-the-clock supervision of students.<br></br>
                                👉 Completely secure and comfortable accommodation for students.<br></br>
                                👉 Maximum discount of coaching fee for poor and meritorious students.
                            </ul>
                        </h5>
                    </div>
                    <div className="col-lg-6 col-sm-12 ps-0 d-flex justify-content-start">
                        <img src={img} alt="banner" className="pe-5" style={{width: "430px"}}/>
                    </div>
                </div>
                <h5 className="ps-5 ms-5">
                    <ul>
                        👉 Taking maximum number of weekly, unit, pre-model and model tests.<br></br>
                        👉 Giving greeting gifts to 1st, 2nd, 3rd place holders in weekly examination.
                    </ul>
                </h5>
                <hr className="w-50 mx-auto mt-4"></hr>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <h5 className="px-5 mx-5 fw-bold mt-4">
                            Contact:
                        </h5>
                        <h5 className="ps-5 ms-5">
                            <span style={{color: "rgb(21, 146, 155)"}}>Our Head Office: </span>3rd floor, Madhumati Bhaban (behind CTT & MIST), DUET Gate, Gazipur-1707.
                        </h5>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex">
                        <Facebook></Facebook>
                        <Youtube></Youtube>
                    </div>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.4097610333592!2d90.41404251439364!3d24.016611384472625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755da4c3e6318d5%3A0x201a0a5b69ed91ed!2sDhaka%20DUET%20Admission%20Coaching%20(DDAC)!5e0!3m2!1sen!2sbd!4v1637611748625!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></Iframe>
                </div>
            </ div>
            <Footer></Footer>
        </div>
    );
};

export default AboutDDAC;