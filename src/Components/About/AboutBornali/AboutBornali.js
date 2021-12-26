import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Row } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import './AboutBornali.css';
import PresidentSecretary from './PresidentSecretary/PresidentSecretary';
import CurrentMembers from '../AboutBornali/CurrentMembers/CurrentMembers';
import AdvisoryCommittee from './AdvisoryCommittee/AdvisoryCommittee';

const AboutBornali = () => {
    const [president, setPresident] = useState([]);
    const [currentMembers, setCurrentMembers] = useState([]);
    const [advisors, setAdvisors] = useState([]);

    // loading president/secretary data
    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/ps')
        .then(res => res.json())
        .then(data => setPresident(data))
    }, [])

    // loading current panel data
    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/currentmembers')
        .then(res => res.json())
        .then(data => setCurrentMembers(data))
    }, [])

    // loading advisor data
    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/advisor')
        .then(res => res.json())
        .then(data => setAdvisors(data))
    }, [])



    return (
        <div>
            <Menu></Menu>
            <div className="box">
                <div className='pt-5'>
                    <h1 className='pt-5'>About Bornali</h1>
                </div>
                {/* <h1 className="pt-3">About Bornali</h1> */}
                <hr className="w-50 mx-auto"></hr>
                <h5 className="px-2 mx-5">
                    Bornali is one of the largest student welfare association in Dhaka University Of Engineering & Technology (DUET).  This organization is consisting of the former students of Dhaka Polytechnic Institute (DPI). It established in 2006. Bornali arranges different events (Farewell of outgoing students, fresher reception, Iftar mahfil, Sports events etc) and provides different student welfare services (Digital library, financial assistance for poor members etc) in order to maintain the brotherhood environment in DUET. At present there are around 200 members in Bornali. The inter bonding between the members of Bornali is so strong that are follow-able to the others. Six honorable teachers of DUET act as the advisers of Bornali. Overall Bornali is a well-organized association and it has played many vital roles in different sectors to keep the peaceful environment in DUET.
                </h5>
                <h1 className="pt-3">Current Panel</h1>
                <hr className="w-50 mx-auto"></hr>
                <Accordion className='px-lg-5' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5 className='text-info'>Advisory Committee</h5></Accordion.Header>
                        <Accordion.Body>
                <div className='mx-5'>
                    {
                        advisors.map(advisor => <AdvisoryCommittee
                            key = {advisor._id}
                            advisor = {advisor}
                            ></AdvisoryCommittee>)
                    }
                </div>
                </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className='px-lg-5' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5 className='text-info'>President & Secretary</h5></Accordion.Header>
                        <Accordion.Body>
                            <Row xs={1} md={2} lg={2} className="g-1 pb-5 pt-3">
                                {
                                    president.map(p => <PresidentSecretary
                                        key = {p._id}
                                        p = {p}
                                        ></PresidentSecretary>)
                                }
                            </Row> 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className='px-lg-5'>
                    {
                        currentMembers.map(currentMember => <CurrentMembers
                            key = {currentMember._id}
                            currentMember = {currentMember}
                            ></CurrentMembers>)
                    }
                </Accordion>
                <div className='pb-5 pt-4'>
                    <h1 className="">Previous Panel</h1>
                    <hr className="w-50 mx-auto"></hr>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default AboutBornali;