import React from 'react';
import { Accordion, Card, Col } from 'react-bootstrap';

const PresidentSecretary = (props) => {
    const {_id, name, designation, session, image, phn, email} = props.p;
    return (
        <div>
            
               
            <Col>
                 <div className="row my-auto">
                    <div className="col-5">
                        <Card.Img variant="top" className="w-100 rounded-circle mx-auto ps-2" src={`data:image/png;base64,${image}`} />  
                    </div>
                    <div className="col-7 mt-2 p-0">
                        <Card.Title>
                            <h1 className="h4 text-left m-0">{name}</h1>
                        </Card.Title>
                        <Card.Text>
                        <h5 className="text-left text-secondary">{designation} ({session})</h5>
                        <h6 className="text-left">Phone: {phn}</h6>
                        <h6 className="text-left">Email: {email}</h6>
                    </Card.Text>
                    </div>
                 </div>
            </Col>
            
            
        </div>
    );
};

export default PresidentSecretary;