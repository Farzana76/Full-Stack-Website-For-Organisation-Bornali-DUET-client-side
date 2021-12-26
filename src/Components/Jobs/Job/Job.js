import React from 'react';
import { Col } from 'react-bootstrap';

const Job = (props) => {
    const {title, postedBy, dated, desc} = props.member;
    return (
        <div>
            <Col>
                <h3 className='text-left'>{title}</h3>
                <div className='d-flex justify-content-between border-bottom'>
                    <small>Posted by: {postedBy}</small>
                    <small>Posted date: {dated}</small>
                </div>
                <h5>{desc}</h5>
            </Col>
        </div>
    );
};

export default Job;