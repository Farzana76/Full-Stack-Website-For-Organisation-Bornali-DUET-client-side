import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import Dashboard from '../../../Dashboard/Dashboard/Dashboard';

const PresidentSecretaryForm = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [session, setSession] = useState('');
    const [image, setImage] = useState(null);
    const [phn, setPhn] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = e => {
        // e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('designation', designation);
        formData.append('session', session);
        formData.append('image', image);
        formData.append('phn', phn);
        formData.append('email', email);

        fetch('http://localhost:5000/ps', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added successfully')
                    console.log('message added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">{user.displayName}'s dashboard</h2>

                <div className="w-50 m-auto p-3 mt-5 border rounded mb-3 border-info add-service">
                    <h1 className="mb-3 heading fw-normal">Please add a message</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true })} placeholder="President/Secretary Name" onChange={e => setName(e.target.value)}/>
                        {errors.name?.type === 'required' && "Name is required"}

                        <input {...register("designation", { required: true })} placeholder="Designation, i.e President/Secretary" onChange={e => setDesignation(e.target.value)}/>
                        {errors.designation && "Designation is required"}
                        
                        <input {...register("session", { required: true })} placeholder="Session, i.e 2020-2021" onChange={e => setSession(e.target.value)}/>
                        {errors.session && "Session is required"}

                        <input {...register("image", { required: true })} type="file" onChange={e => setImage(e.target.files[0])}/>
                        {errors.img?.type === 'required' && "Image is required"}
                        
                        <input {...register("phn", { required: true })} placeholder="Phone, i.e +880..." onChange={e => setPhn(e.target.value)}/>
                        {errors.phn && "Phone number is required"}

                        <input {...register("email", { required: true })} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        {errors.email && "Email is required"}
                        
                        {/* <input type="submit" className="btn text-light heading btn-lg fw-normal" style={{backgroundColor: 'rgb(59, 96, 133)'}} value="Add message"/> */}
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PresidentSecretaryForm;