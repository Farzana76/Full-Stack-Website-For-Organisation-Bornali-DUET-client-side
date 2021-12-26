import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
            setDisplayJobs(data);
        })
    }, [])

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedJobs = jobs.filter(job => job.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayJobs(matchedJobs);
    }

    return (
        <>
            <Menu></Menu>
            <div className='box'>
                <div className='pt-5'>
                    <h1 className='pt-5'>Job Circulars</h1>
                </div>
                <hr className='w-50 mx-auto'></hr>
                <div className="d-flex justify-content-end me-5 ms-5">
                    <input
                        type="text"
                        onChange={handleSearch}
                        placeholder="Search by Job Title" 
                        className='searchbox form-control'/>
                </div>
                <Row xs={1} md={1} lg={1} className="g-4 ps-5 pe-5 pb-5 pt-3">
                        {
                            displayJobs.map(member => <Job
                                key = {member._id}
                                member={member}
                                ></Job>)
                        }
                </Row>
                
            </div>
            <Footer></Footer> 
        </>
        
    );
};

export default Jobs;