import React from 'react';
import { Col } from 'react-bootstrap';

const Job = (props) => {
    const {title, postedBy, dated, context, responsibilities, education, experience, additional, location, salary} = props.member;
    return (
        <div>
            <Col>
                <h3 className='text-left'>{title}</h3>
                <div className='d-flex justify-content-between border-bottom'>
                <small className='text-muted'>Posted by: {postedBy}</small>
                <small className='text-muted'>Posted date: {dated}</small>
                </div>
                {/* <h5>{markdown}</h5> */}
                {
                    context &&
                    <div>
                        <h5 className='fw-bold mt-3'>Job Context</h5>
                        <h5>{context}</h5>
                    </div>
                    
                }
                {
                    responsibilities &&
                    <div>
                        <h5 className='fw-bold'>Job Responsibilities</h5>
                        <h5>{responsibilities}</h5>
                    </div>
                    
                }
                {
                    education &&
                    <div>
                        <h5 className='fw-bold'>Education</h5>
                        <h5>{education}</h5>
                    </div>
                    
                }
                {
                    experience &&
                    <div>
                        <h5 className='fw-bold'>Experience</h5>
                        <h5>{experience}</h5>
                    </div>
                    
                }
                {
                    additional &&
                    <div>
                        <h5 className='fw-bold'>Additional Requirements</h5>
                        <h5>{additional}</h5>
                    </div>
                    
                }
                {
                    location &&
                    <div>
                        <h5 className='fw-bold'>Location</h5>
                        <h5>{location}</h5>
                    </div>
                    
                }
                {
                    salary &&
                    <div>
                        <h5 className='fw-bold'>Salary</h5>
                        <h5>{salary}</h5>
                    </div>
                    
                }
                <hr></hr>
            </Col>
        </div>
    );
};

export default Job;