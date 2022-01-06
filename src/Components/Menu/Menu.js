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
    const { user, logOut, loading, admin, librarian, findName} = useAuth();
    const [oldUser, setOldUser] = useState([]);
    const [userLoading, setUserLoading] = useState(true);


    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            setUserLoading(true);
            console.log("data", data);
            setOldUser(data);
            console.log("oldUser", oldUser);
        })
        .finally(() => setUserLoading(false))
    }, [])

    if (userLoading) {
        return <Spinner animation="border" />
    }

    const res = oldUser.find(ou => ou.email === user.email );
    
    return (
        <Navbar expand="lg" className="navbar p-0" id="navbar" style={{zIndex: '100', position: "fixed", width: "100%"}}>
            <Container>
                <Navbar.Brand>
                    <NavLink to="/home">
                        <img src={logo} id="logo" alt="" width="70"/>
                    </NavLink>
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
                    <NavLink to="/allGallery" className="items" id="items">
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
                    
                    
                    {res ?
                        <div className="">
                            {admin ?
                                    <Dropdown className="dropdown b-0 items">
                                    <Dropdown.Toggle variant="" className="ps-0 items p-0 border rounded px-2 me-0" as="div">
                                        <NavLink to="#" className="items m-0 p-0">
                                            {element}
                                        </NavLink>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className='text-muted'>{user.displayName}</Dropdown.Item>
                                        <NavLink to="/allMembers" className="text-decoration-none">
                                            <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
                                        </NavLink>
                                        
                                            <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                </Dropdown> :
                                librarian ?
                                    <Dropdown className="dropdown b-0 items">
                                    <Dropdown.Toggle variant="" className="ps-0 items p-0 border rounded px-2 me-0" as="div">
                                        <NavLink to="#" className="items m-0 p-0">
                                            {element}
                                        </NavLink>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item className='text-muted'>{user.displayName}</Dropdown.Item>
                                        <NavLink to="/bornaliLib" className="text-decoration-none">
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
                                    </Dropdown>
                                    }
                        </div>
                        :
                        <div className="d-flex align-items-center justify-content-center">
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