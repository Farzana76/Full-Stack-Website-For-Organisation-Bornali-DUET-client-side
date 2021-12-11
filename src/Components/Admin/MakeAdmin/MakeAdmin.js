import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const MakeAdmin = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Made Admin Successfully');
                    console.log(data);
                    reset();
                }
            })

        // e.preventDefault()
    }

    return (
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">{user.displayName}'s dashboard</h2>

                <div className="w-50 m-auto p-3 border rounded mb-3 border-info add-service">
                    <h1 className="mb-3 heading fw-normal">Make Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", { required: true })} placeholder="Email" />
                        {errors.title?.type === 'required' && "Email is required"}
                                
                        <input type="submit" className="btn text-light heading btn-lg w-50 fw-normal" style={{backgroundColor: 'rgb(59, 96, 133)'}} value="Make Admin"/>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default MakeAdmin;