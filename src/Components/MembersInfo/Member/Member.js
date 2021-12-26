import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Member.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

const Member = (props) => {
    const {sid, session, dept, blood, name, email, phone, image, position} = props.member;

    const element = <FontAwesomeIcon icon={faEnvelope} />
    const element2 = <FontAwesomeIcon icon={faPhone} />

    return (
        <div>
            <Col>
             <Card border='dark' className="card border-0 bg-dark">
                    <div className="image">
                        <Card.Img variant="top" className="" src={`data:image/png;base64,${image}`} />
                        
                    </div>
                    <Card.Title>
                                <h1 className="m-0 pt-1 h5 text-light">{name}</h1>
                            </Card.Title>
                    <div className="details">
                        <div class="center">
                            <Card.Title>
                                <h1 className="display-6">{name}</h1>
                                <h6 className="h6 fw-normal fst-italic">{position}</h6>
                            </Card.Title>
                            <Card.Text className="text-left">
                                <h6 className="h6">Department: {dept}</h6>
                                <h6 className="h6">Session: {session}</h6>
                                <h6 className="h6">{element} {email}</h6>
                                <h6 className="h6">{element2} {phone}</h6>
                                <h4 className="h6 text-danger text-center">Blood Group: {blood}</h4>
                            </Card.Text>
                        </div>
                    </div>
            </Card>
            </Col>
        </div>
    );
};

export default Member;