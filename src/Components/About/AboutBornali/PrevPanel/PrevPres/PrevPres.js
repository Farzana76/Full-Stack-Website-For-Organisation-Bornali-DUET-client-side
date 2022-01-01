import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './PrevPres.css'

const PrevPres = (props) => {
    const {name, session, image, phn, dept, designation} = props.p;
    return (
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
                        {
                            dept ? 
                                <h6 className="text-left">Department: {dept}</h6> : 
                                <h6 className="text-left">Department: N/A</h6>

                        }
                        {
                            phn ? 
                                <h6 className="text-left">Phone: {phn}</h6> : 
                                <h6 className="text-left">Phone: N/A</h6>

                        }
                       
                    </Card.Text>
                    </div>
                 </div>
        </Col>
    );
};

export default PrevPres;