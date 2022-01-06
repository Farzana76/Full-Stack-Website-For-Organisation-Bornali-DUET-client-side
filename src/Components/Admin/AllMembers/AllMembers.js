import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import avatar from '../../../img/avatar.png'

const AllMembers = () => {
    const [members, setMembers] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setMembers(data));
    }, [members])

    // DELETE a order
    const handleDeletemembersuct = id => {
        const proceed = window.confirm('Are you sure, you want to delete this member?');
        if (proceed) {
            const url = `https://floating-hamlet-78764.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingmembersucts = members.filter(membersuct => membersuct._id !== id);
                        setMembers(remainingmembersucts);
                    }
                });
        }
    }

    return (
        
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundImage: 'linear-gradient(to right, rgb(0, 0, 0), rgb(86, 142, 167), rgb(124, 182, 112))', fontFamily: '"Kodchasan", sans-serif', position: 'fixed', width: '90%'}} className="p-3 pb-4 text-center text-light fw-bold mb-5">{user.displayName}'s dashboard</h2>
                <div className="mx-5 mb-5 d-flex justify-content-center heading mt-5 pt-5">
                    <Table striped bordered hover variant="transparent" responsive>
                        <thead>
                            <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Student ID</th>
                            <th>Department</th>
                            <th>Admission Session</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                            <th>Profession</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        {members.map(o => (
                                    <tbody>
                                        <tr>
                                        <td>
                                            {
                                                o.imageUrl ?
                                                <img
                                                className="d-block w-100"
                                                src={o.imageUrl}
                                                alt="membersuct"
                                                /> :
                                                <img
                                                className="d-block w-100"
                                                src={avatar}
                                                alt="membersuct"
                                                />
                                            }
                                        </td>
                                        <td>{o.displayName}</td>
                                        <td>{o.email}</td>
                                        <td>{o.phone}</td>
                                        <td>{o.sid}</td>
                                        <td>{o.dept}</td>
                                        <td>{o.session}</td>
                                        <td>{o.bloodGroup}</td>
                                        <td>{o.address}, {o.city}</td>
                                        <td>{o.position}, {o.company}</td>
                                        <td><button onClick={() => handleDeletemembersuct(o._id)} className="btn btn-danger">Delete</button></td>
                                        </tr>
                                    </tbody>  
                                    
                        ))}
                    </Table>
                </div>
            </div>
            
        </div>
    );
};

export default AllMembers;