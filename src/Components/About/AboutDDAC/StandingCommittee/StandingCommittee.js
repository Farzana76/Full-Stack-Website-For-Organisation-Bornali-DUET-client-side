import React from 'react';
import { Row } from 'react-bootstrap';

const StandingCommittee = (props) => {
    const {designation, tickets} = props.standingCom;
    return (
        <div>
            <h5 className='text-info'>{designation}</h5>
            
                {tickets.map(ticket => 
                    <ul>
                        <li>
                            <h5>{ticket.name}</h5>
                            <small className='text-secondary'>{ticket.sem}</small>
                        </li>
                    </ul>
                    )
                } 
        </div>
    );
};

export default StandingCommittee;