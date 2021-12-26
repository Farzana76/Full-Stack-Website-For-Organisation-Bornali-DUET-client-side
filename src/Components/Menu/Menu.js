import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from "../../img/logo.png";
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUser} />

const Menu = () => {
    const { user, logOut, loading, admin, findName} = useAuth();
    const [oldUser, setOldUser] = useState({});
    // const [findName, setFindName] = useState({});

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            setOldUser(data);
            
        });
    }, [])

    
    // const history = useHistory();
    if (loading) {
        return <Spinner animation="border" />
    }
    
    const fn = () => {
        const res = oldUser.find(ou => ou.email === user.email );
        console.log(res.name)
        return res.name;
    }
    // user.displayName= findName;
    // const handleMyOrder = () => {
    //     history.push(`/myOrders/${user.email}&&${user.displayName}`);
    // }

    // window.onscroll = function() {scrollFunction()};

    // var nav = document.getElementById("navbar");
    
    // function scrollFunction() {
    // if(typeof nav !== 'undefined' && nav !== null){
    //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //         // document.getElementById("navbar").style.backgroundColor = "rgb(170, 212, 247)";
    //         document.getElementById("navbar").style.position = "fixed";
    //         document.getElementById("navbar").style.width = "100%";
    //         document.getElementById("navbar").style.padding = "0px 0px";
    //         document.getElementById("logo").style.width = "50px";
    //         // document.getElementById("items").style.fontSize = "20px";
    //     } else{
    //         document.getElementById("logo").style.width = "70px";
    //         // document.getElementById("navbar").style.padding = "0px 0px";
    //         // document.getElementById("items").style.fontSize = "25px";
    //         // document.getElementById("navbar").style.color = "#ffffff";
    //         // document.getElementById("navbar").style.fontSize = "25px";
    //         // document.getElementById("navbar").style.background = "transparent";
    //     }
    // }}

    // const out = () => {
    //     const find = oldUser.find(ou => ou.email === user.email);
    //     setFindName(find);
    // }
    
    return (
        <Navbar expand="lg" className="navbar p-0" id="navbar" style={{zIndex: '100', position: "fixed", width: "100%"}}>
            <Container>
                <Navbar.Brand>
                    <img src={logo} id="logo" alt="" width="70"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/home" className="items" id="items">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/library" className="items" id="items">
                        <li>Library</li>
                    </NavLink>
                    <NavLink to="/members" className="items" id="items">
                        <li>Members</li>
                    </NavLink>
                    <NavLink to="/gallery" className="items" id="items">
                        <li>Gallery</li>
                    </NavLink>
                    <NavLink to="/jobs" className="items" id="items">
                        <li>Jobs</li>
                    </NavLink>
                    <Dropdown className="">
                            <Dropdown.Toggle variant="" className="ps-0 items" as="div">
                                <NavLink to="#" className="items m-0">
                                    More
                                </NavLink>
                            </Dropdown.Toggle>
                            {/* <Dropdown.Toggle variant="" id="dropdown-basic" className="items">
                                More
                            </Dropdown.Toggle> */}

                            <Dropdown.Menu>
                                <NavLink to="/aboutBornali" className="text-decoration-none">
                                    <Dropdown.Item href="#/action-2">Bornali</Dropdown.Item>
                                </NavLink>
                                <NavLink to="/aboutDDAC" className="text-decoration-none">
                                    <Dropdown.Item href="#/action-2">DDAC</Dropdown.Item>
                                </NavLink>
                                <NavLink to="/aboutDUET" className="text-decoration-none">
                                    <Dropdown.Item href="#/action-2">DUET</Dropdown.Item>
                                </NavLink>
                            </Dropdown.Menu>
                    </Dropdown>
                    
                    
                    {user.email ?
                        <div className="">
                            {admin ? 
                                // <NavLink to="/makeAdmin" className="items">Dashboard</NavLink> :
                                // <NavLink to="/makeAdmin" className="items">Dashboard</NavLink>}
                                // <div className="d-flex">
                                //     <button onClick={logOut} className="button btn">Log out</button>
                                //     <span className="item1 text-muted mt-2">Welcome, {user.displayName}</span>
                                // </div>
                                
                                <Dropdown className="dropdown b-0 items">
                                    <Dropdown.Toggle variant="" className="ps-0 items p-0 border rounded px-2 me-0" as="div">
                                        <NavLink to="#" className="items m-0 p-0">
                                            {element}
                                        </NavLink>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className='text-muted'>{user.displayName}</Dropdown.Item>
                                        <NavLink to="/makeAdmin" className="text-decoration-none">
                                            <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
                                        </NavLink>
                                        
                                            <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                </Dropdown> :
                                    <Dropdown className="dropdown b-0 items">
                                        <Dropdown.Toggle variant="" className="ps-0 items p-0 border rounded px-2 me-0" as="div">
                                            <NavLink to="#" className="items m-0 p-0">
                                                {element}
                                            </NavLink>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item className='text-muted'>{user.displayName}</Dropdown.Item>
                                            <NavLink to="/jobForm" className="text-decoration-none">
                                                <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
                                            </NavLink>
                                            
                                            <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
                                            
                                        </Dropdown.Menu>
                                    </Dropdown>}
                        </div>
                        :
                        <div className="d-flex">
                            <NavLink to="/login" className="items">Login/Register</NavLink>
                        </div>
                       
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;