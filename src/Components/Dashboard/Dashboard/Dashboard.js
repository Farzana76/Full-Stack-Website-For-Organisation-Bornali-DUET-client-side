import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const { user, logOut, loading, admin } = useAuth();
    const history = useHistory();

    const handleMyOrders = () => {
        history.push(`/myOrders/${user.email}&&${user.displayName}`);
    }

    return (
        <div style={{height: '100vh', overflow: 'scroll initial', fontFamily: '"Kodchasan", sans-serif', fontSize: '20px'}}>

            <CDBSidebar textColor="rgb(59, 96, 133)" style={{ backgroundColor: 'rgb(170, 212, 247)', position: 'fixed'}}>
                
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <NavLink exact to="/" activeClassName="activeClicked" className="text-decoration-none" style={{color: 'rgb(59, 96, 133)'}}>
                        Home
                    </NavLink>
                </CDBSidebarHeader>


                {!admin &&
                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="/jobForm" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Post Jobs</CDBSidebarMenuItem>
                            </NavLink>

                            <CDBSidebarMenuItem onClick={logOut} icon="minus-circle">Log Out</CDBSidebarMenuItem>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                }
                {admin &&  
                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="/makeAdmin" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user" className="text-decoration-none">Make Admin</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink exact to="/addEvent" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Add Event</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink exact to="/bornaliLib" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Bornali Library</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink exact to="/jobForm" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Post Jobs</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink exact to="/updateBornali" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Bornali Committee</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink exact to="/addStandingCommittee" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">DDAC Committee</CDBSidebarMenuItem>
                            </NavLink>

                            <CDBSidebarMenuItem onClick={logOut} icon="minus-circle">Log Out</CDBSidebarMenuItem>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                } 
            </CDBSidebar>
        </div>
    );
};

export default Dashboard;