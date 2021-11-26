import React from 'react';
import { Container, Dropdown, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from "../../img/logo.png";
import './Menu.css';

const Menu = () => {
    const { user, logOut, loading, admin } = useAuth();
    // const history = useHistory();
    if (loading) {
        return <Spinner animation="border" />
    }
    
    // const handleMyOrder = () => {
    //     history.push(`/myOrders/${user.email}&&${user.displayName}`);
    // }

    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" width="80"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/home" className="items">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/library" className="items">
                        <li>Library</li>
                    </NavLink>
                    <NavLink to="/gallery" className="items">
                        <li>Gallery</li>
                    </NavLink>
                    <NavLink to="/jobs" className="items">
                        <li>Jobs</li>
                    </NavLink>
                    {user.email ?
                        <div className="d-flex">
                            {admin ? 
                                <NavLink to="/addProduct" className="items">Dashboard</NavLink> :
                                <NavLink to="/pay" className="items">Dashboard</NavLink>}
                                <div className="d-flex">
                                    <button onClick={logOut} className="button btn">Log out</button>
                                    <span className="item1 text-muted mt-2">Welcome, {user.displayName}</span>
                                </div>
                        </div>
                        :
                        <div className="d-flex">
                            <NavLink to="/login" className="items">Login/Register</NavLink>
                        </div>
                       
                    }
                    <Dropdown className="dropdown b-0">
                            <Dropdown.Toggle variant="" id="dropdown-basic" className="button">
                                More
                            </Dropdown.Toggle>

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
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;