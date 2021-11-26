import React from 'react';
import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import './AboutBornali.css';

const AboutBornali = () => {
    return (
        <div>
            <Menu></Menu>
            <div className="box">
                <h1 className="pt-3">About Bornali</h1>
                <hr className="w-50 mx-auto"></hr>
                <h5 className="px-5 mx-5">
                    Bornali is one of the largest student welfare association in Dhaka University Of Engineering & Technology (DUET).  This organization is consisting of the former students of Dhaka Polytechnic Institute (DPI). It established in 2006. Bornali arranges different events (Farewell of outgoing students, fresher reception, Iftar mahfil, Sports events etc) and provides different student welfare services (Digital library, financial assistance for poor members etc) in order to maintain the brotherhood environment in DUET. At present there are around 200 members in Bornali. The inter bonding between the members of Bornali is so strong that are follow-able to the others. Six honorable teachers of DUET act as the advisers of Bornali. Overall Bornali is a well-organized association and it has played many vital roles in different sectors to keep the peaceful environment in DUET.
                </h5>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutBornali;