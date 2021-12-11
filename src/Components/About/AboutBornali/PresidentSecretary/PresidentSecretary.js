import React from 'react';
import { Card, Col } from 'react-bootstrap';

const PresidentSecretary = (props) => {
    const {name, designation, session, image, phn, email} = props.p;
    return (
        <div>
            <Col>
             
                 <div className="row my-auto">
                    <div className="col-5">
                        <Card.Img variant="top" className="w-100 rounded-circle mx-auto ps-2" src={`data:image/png;base64,${image}`} />  
                    </div>
                    <div className="col-7 mt-2">
                        <Card.Title>
                            <h1 className="h2 text-left">{name}</h1>
                        </Card.Title>
                        <Card.Text>
                        <h5 className="text-left">{designation} ({session})</h5>
                        <h5 className="">Phone: {phn}</h5>
                        <h5 className="">Email: {email}</h5>
                    </Card.Text>
                    </div>
                 </div>
            
            </Col>
        </div>
    );
};

export default PresidentSecretary;