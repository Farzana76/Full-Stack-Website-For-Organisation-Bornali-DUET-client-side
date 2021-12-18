import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import './AddMessages.css'

const AddMessages = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [name, setName] = useState('');
    const [session, setSession] = useState('');
    const [image, setImage] = useState(null);
    const [msg, setMsg] = useState(false);

    const onSubmit = e => {
        // e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('session', session);
        formData.append('image', image);
        formData.append('msg', msg);

        fetch('https://floating-hamlet-78764.herokuapp.com/messages', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Message added successfully')
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
                    <h2 className="mb-3 heading fw-normal">Add President's Message</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Name:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("name", { required: true })} placeholder="President's Name" onChange={e => setName(e.target.value)}/>
                                {errors.name?.type === 'required' && "Name is required"}
                            </div>
                        </div>
                        
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Session:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("session", { required: true })} placeholder="Session, i.e 2020-2021" onChange={e => setSession(e.target.value)}/>
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
                                <h5 className='ps-5 ms-3'>Message:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <textarea {...register("msg", { required: true })} placeholder="Message" onChange={e => setMsg(e.target.value)}/>
                                {errors.msg && "Message is required"}
                            </div>
                        </div>
                        <button className='mt-3 btn btn-info'>Submit</button>
                    </form>
            </div>
        </div>
    );
};

export default AddMessages;