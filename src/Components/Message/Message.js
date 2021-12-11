import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Message = (props) => {
    const {name, session, image, msg} = props.message;
    return (
        <div>
            <Col>
                <Card border='' className="coach my-2">
                            <Card.Img variant="top" className="rounded-3 w-25 rounded-circle mx-auto pt-2" src={`data:image/png;base64,${image}`} />  
                            <Card.Title>
                                <h4 className="text-center mb-0 mt-1">{name}</h4>
                                <small className="text-center">
                                    President {session}
                                </small>
                            </Card.Title>
                            <Card.Text>
                            <h6 className="text-secondary fst-italic justify px-2">
                            {msg}
                            </h6>
                        </Card.Text>
                </Card>
            </Col>
        </div>
    );
};

export default Message;