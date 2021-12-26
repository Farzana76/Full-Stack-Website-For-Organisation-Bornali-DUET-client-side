import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const ManageLibrary = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [library, setLibrary] = useState([]);
    const [users, setUsers] = useState([]);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://floating-hamlet-78764.herokuapp.com/library', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Library updated successfully');
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/books')
        .then(res => res.json())
        .then(data => {
            setLibrary(data);
        })
    }, [])

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
    }, [])

    return (
        <div>
            <div className="row">
                    <div className="w-50 m-auto p-3 mb-3 add-service">
                        <h1 className="mb-3 heading fw-normal">Manage Library</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5 className='mr-auto fw-bold'>Book Name:</h5>
                            <select name="bookName" {...register('bookName')} className={`form-control ${errors.bookName ? 'is-invalid' : ''}`}>
                                {library.map(lib =>
                                <option key={lib._id} value={lib.title}>{lib.title}</option>
                                )}
                            </select>
                            
                            <h5 className='mr-auto fw-bold mt-3'>Borrower Name:</h5>
                            <select name="user" {...register('user')} className={`form-control ${errors.user ? 'is-invalid' : ''}`}>
                                {users.map(user =>
                                <option key={user._id} value={user.name}>{user.name}</option>
                                )}
                            </select>

                            <h5 className='mr-auto fw-bold mt-3'>Borrow Quantity:</h5>
                            <input {...register("borrowQuantity", { required: true })} placeholder="Quantity" className='w-100'/>
                            {errors.borrowQuantity?.type === 'required' && "Quantity is required"}
                                    
                            <input type="submit" className="btn text-light heading btn-lg w-50 fw-normal mt-2" style={{backgroundColor: 'rgb(59, 96, 133)'}} value="Submit"/>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default ManageLibrary;