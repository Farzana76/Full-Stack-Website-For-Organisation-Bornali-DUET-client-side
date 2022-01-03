import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Member.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../img/avatar.png'

const Member = (props) => {
    const {sid, session, dept, bloodGroup, displayName, email, phone, imageUrl, position} = props.member;

    const element = <FontAwesomeIcon icon={faEnvelope} />
    const element2 = <FontAwesomeIcon icon={faPhone} />

    return (
        <div>
            <Col>
             <Card border='dark' className="card border-0 bg-dark">
                    <div className="image">
                        {
                            imageUrl ?
                            <Card.Img variant="top" className="" src={imageUrl} /> :
                            <Card.Img variant="top" className="" src={avatar} />
                        }
                        
                        
                    </div>
                    <Card.Title>
                                <h1 className="m-0 pt-1 h5 text-light">{displayName}</h1>
                            </Card.Title>
                    <div className="details">
                        <div class="center">
                            <Card.Title>
                                <h1 className="display-6">{displayName}</h1>
                                <h6 className="h6 fw-normal fst-italic">{position}</h6>
                            </Card.Title>
                            <Card.Text className="text-left">
                                <h6 className="h6">Department: {dept}</h6>
                                <h6 className="h6">Session: {session}</h6>
                                <h6 className="h6">{element} {email}</h6>
                                <h6 className="h6">{element2} {phone}</h6>
                                <h4 className="h6 text-danger text-center">Blood Group: {bloodGroup}</h4>
                            </Card.Text>
                        </div>
                    </div>
            </Card>
            </Col>
        </div>
    );
};

export default Member;