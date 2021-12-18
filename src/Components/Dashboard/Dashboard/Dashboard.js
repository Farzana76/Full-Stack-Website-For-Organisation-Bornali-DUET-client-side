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
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', fontFamily: '"Kodchasan", sans-serif', fontSize: '20px'}}>

            <CDBSidebar textColor="rgb(59, 96, 133)" style={{ backgroundColor: 'rgb(170, 212, 247)', position: 'fixed'}}>
                
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <NavLink exact to="/" activeClassName="activeClicked" className="text-decoration-none" style={{color: 'rgb(59, 96, 133)'}}>
                        Home
                    </NavLink>
                </CDBSidebarHeader>


                {/* {!admin && */}
                {/* <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/pay" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="wallet">Pay</CDBSidebarMenuItem>
                        </NavLink>

                        
                        <CDBSidebarMenuItem icon="table" onClick={handleMyOrders} >My orders</CDBSidebarMenuItem>
                        

                        <NavLink exact to="/review" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="star">Review</CDBSidebarMenuItem>
                        </NavLink>

                        <CDBSidebarMenuItem onClick={logOut} icon="minus-circle">Log Out</CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent> */}
                {/* }
                {admin &&  */}
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/makeAdmin" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Make Admin</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/addEvent" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Add Event</CDBSidebarMenuItem>
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
                {/* } */}
                

                {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <button onClick={logOut} className="btn text-light button p-5 btn-lg">Log out</button>
                </CDBSidebarFooter> */}

            </CDBSidebar>
            <div>
                {/* <h2 style={{backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(86, 142, 167), rgb(124, 182, 112))', width:'200%'}} className="p-3 pb-4 text-center text-light fw-bold">{user.displayName}'s dashboard</h2> */}
            </div>
        </div>
    );
};

export default Dashboard;