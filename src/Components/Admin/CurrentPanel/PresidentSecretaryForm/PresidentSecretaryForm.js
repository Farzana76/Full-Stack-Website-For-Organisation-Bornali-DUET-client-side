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

        fetch('https://floating-hamlet-78764.herokuapp.com/ps', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added successfully');
                    reset();
                    console.log('message added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="row">
                <div className="w-75 m-auto p-3 mt-5 mb-3 add-service">
                    <h2 className="mb-3 heading fw-normal">Add President/Secretary</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Name:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("name", { required: true })} placeholder="President/Secretary Name" onChange={e => setName(e.target.value)}/>
                                {errors.name?.type === 'required' && "Name is required"}
                            </div>
                        </div>
                        
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Designation:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("designation", { required: true })} placeholder="i.e President/Secretary" onChange={e => setDesignation(e.target.value)}/>
                                {errors.designation && "Designation is required"}
                            </div>
                        </div>
                        
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Session:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("session", { required: true })} placeholder="i.e 2020-2021" onChange={e => setSession(e.target.value)}/>
                                {errors.session && "Session is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image", { required: true })} type="file" onChange={e => setImage(e.target.files[0])}/> 
                                {errors.img?.type === 'required' && "Image is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Phone:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("phn", { required: true })} placeholder="i.e +880..." onChange={e => setPhn(e.target.value)}/>
                                {errors.phn && "Phone number is required"}
                            </div>
                        </div>
                        
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Email:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("email", { required: true })} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                                {errors.email && "Email is required"}
                            </div>
                        </div>
                        <button className='mt-3 btn btn-info'>Submit</button>
                    </form>
                </div>
            </div>
    );
};

export default PresidentSecretaryForm;