import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import AddBook from '../../Librarian/AddBook/AddBook';
import ManageLibrary from '../../Librarian/ManageLibrary/ManageLibrary';

const BornaliLibrary = () => {
    const { user, loading } = useAuth();

    return (
        <div>
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                    {user.displayName ? 
                        <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">
                        {user.displayName}'s dashboard</h2> :
                        <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">
                        My dashboard</h2>

                    }

                <div className="w-75 m-auto mt-5 border rounded mb-3 border-info add-service">
                    <Tabs defaultActiveKey="addBook" id="uncontrolled-tab-example">
                        <Tab eventKey="addBook" title="Add Book" className="bg-white">
                            <AddBook></AddBook>
                        </Tab>
                        <Tab eventKey="manageLib" title="Manage Library" className="bg-white">
                            <ManageLibrary></ManageLibrary>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BornaliLibrary;