import React from 'react';
import { Nav, NavItem, Tab, Tabs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import AddMessages from '../AddMessages/AddMessages';
import AdvisoryCommitteeForm from '../AdvisoryCommitteeForm/AdvisoryCommitteeForm';
import CurrentMembersForm from '../CurrentPanel/CurrentMembersForm/CurrentMembersForm';
import PresidentSecretaryForm from '../CurrentPanel/PresidentSecretaryForm/PresidentSecretaryForm';
import PreviousPresident from '../PreviousPanel/PreviousPresident/PreviousPresident';
import PreviousSecretary from '../PreviousPanel/PreviousSecretary/PreviousSecretary';

const UpdateBornali = () => {
    const { user, loading } = useAuth();

    return (
        <div>
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">{user.displayName}'s dashboard</h2>

                <div className="w-75 m-auto mt-5 border rounded mb-3 border-info add-service">
                    <Tabs defaultActiveKey="addAdvisor" id="uncontrolled-tab-example">
                        <Tab eventKey="addAdvisor" title="Add Advisory Committee" className="bg-white">
                            <AdvisoryCommitteeForm></AdvisoryCommitteeForm>
                        </Tab>
                        <Tab eventKey="addps" title="Add President/Secretary" className="bg-white">
                            <PresidentSecretaryForm></PresidentSecretaryForm>
                        </Tab>
                        <Tab eventKey="addCurrentMembers" title="Add Current Members" className="bg-white">
                           <CurrentMembersForm></CurrentMembersForm>
                        </Tab>
                        <Tab eventKey="prevPresident" title="Add Previous Presidents" className="bg-white">
                           <PreviousPresident></PreviousPresident>
                        </Tab>
                        <Tab eventKey="prevSec" title="Add Previous Secretaries" className="bg-white">
                           <PreviousSecretary></PreviousSecretary>
                        </Tab>
                        <Tab eventKey="addmessage" title="Add President's Message" className="bg-white">
                            <AddMessages></AddMessages>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateBornali;