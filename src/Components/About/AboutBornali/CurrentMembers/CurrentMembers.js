import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Col } from 'react-bootstrap';

const CurrentMembers = (props) => {
    const {_id, designation, semester, tickets} = props.currentMember;
    return (
        <div>
            <Accordion.Item eventKey={_id}>
                <Accordion.Header><h5 className='text-info'>{designation}</h5></Accordion.Header>
                <Accordion.Body>
                {tickets.map(ticket => 
                    <ul>
                        <li><h5>{ticket.name} ({semester})</h5></li>
                    </ul>
                    )
                }
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
};

export default CurrentMembers;