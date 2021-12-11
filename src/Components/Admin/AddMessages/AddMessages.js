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

        fetch('http://localhost:5000/messages', {
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
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">{user.displayName}'s dashboard</h2>

                <div className="w-50 m-auto p-3 mt-5 border rounded mb-3 border-info add-service">
                    <h1 className="mb-3 heading fw-normal">Please add a message</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true })} placeholder="President's Name" onChange={e => setName(e.target.value)}/>
                        {errors.name?.type === 'required' && "Name is required"}
                        
                        <input {...register("session", { required: true })} placeholder="Session, i.e 2020-2021" onChange={e => setSession(e.target.value)}/>
                        {errors.session && "Session is required"}

                        <input {...register("image", { required: true })} type="file" onChange={e => setImage(e.target.files[0])}/>
                        {errors.img?.type === 'required' && "Image is required"}
                        
                        <textarea {...register("msg", { required: true })} placeholder="Message" onChange={e => setMsg(e.target.value)}/>
                        {errors.msg && "Message is required"}

                        {/* <input ref={register} type="file" name="picture"/> */}
                        
                        {/* <input type="submit" className="btn text-light heading btn-lg fw-normal" style={{backgroundColor: 'rgb(59, 96, 133)'}} value="Add message"/> */}
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMessages;