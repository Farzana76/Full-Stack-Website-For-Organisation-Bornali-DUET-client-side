import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';

const CurrentMembers = (props) => {
    const {_id, designation, tickets} = props.currentMember;
    return (
        <div>
            <Accordion.Item eventKey={_id}>
                <Accordion.Header><h5 className='text-info'>{designation}</h5></Accordion.Header>
                <Accordion.Body>
                <Row xs={1} md={2} lg={3} className="g-1 ps-5 pe-5 pb-5 pt-3">
                    {tickets.map(ticket => 
                        <ul>
                            <li>
                                <h5>{ticket.name}</h5>
                                <small className='text-secondary'>{ticket.sem}</small>
                            </li>
                        </ul>
                        )
                    }
                </Row> 
                
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
};

export default CurrentMembers;