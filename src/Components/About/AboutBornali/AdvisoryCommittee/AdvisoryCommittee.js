import React from 'react';
import { Row } from 'react-bootstrap';

const AdvisoryCommittee = (props) => {
    const {tickets} = props.advisor;
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-3 ps-5 pe-5 pb-5 pt-3">
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
        </div>
    );
};

export default AdvisoryCommittee;