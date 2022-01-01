import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import Member from '../Member/Member';
import './Members.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [displayMembers, setDisplayMembers] = useState([]);
    const [memberLoading, setMemberLoading] = useState(true)

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            setMemberLoading(true);
            setMembers(data);
            setDisplayMembers(data);
        })
        .finally(() => setMemberLoading(false))
    }, [])

    

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedMembers = members.filter(member => member.name.toLowerCase().includes(searchText.toLowerCase()) || member.blood.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayMembers(matchedMembers);
    }
    return (
        <div>
            <Menu></Menu>
            <div className='pt-5'>
                <h1 className='pt-5'>Bornali Members</h1>
            </div>
            
            <hr className='w-50 mx-auto'></hr>
            <div className="d-flex justify-content-end mx-5 px-lg-5">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search by name or blood group" 
                    className='form-control searchbox'/>
            </div>
            {
                memberLoading &&
                <Loader type="Bars" color="rgb(59, 96, 133)" height={80} width={80}/>
                
            }
            <Row xs={1} md={2} lg={4} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        displayMembers.map(member => <Member
                            key = {member._id}
                            member={member}
                            ></Member>)
                    }
            </Row>
            <Footer></Footer> 
        </div>
    );
};

export default Members;