import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../img/logo.png';

const DetailForm = () => {
    const { error, user, getEmail, userRegistration, getPassword, signInUsingGoogle } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [sid, setSid] = useState('');
    const [dept, setDept] = useState('');
    const [session, setSession] = useState('');
    const [blood, setBlood] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [image, setImage] = useState(null);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');

    const history = useHistory();

    const onSubmit = e => {
        // e.preventDefault();
        console.log('hi')
        if (!image) {
            return;
        }
        
        const formData = new FormData();
        formData.append('displayName', name);
        formData.append('dept', dept);
        formData.append('session', session);
        formData.append('image', image);
        formData.append('phone', user.phoneNumber);
        formData.append('email', user.email);
        formData.append('sid', sid);
        formData.append('bloodGroup', blood);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('company', company);
        formData.append('position', position);

        fetch('https://floating-hamlet-78764.herokuapp.com/users', {
            method: 'PUT',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.upsertedCount > 0 || data.modifiedCount > 0) {
                // if(data.insertedId) {
                    alert('Added successfully');
                    reset();
                    console.log('Details added successfully');
                    history.push('/home');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <div className=" mt-1">
            <div className="">
                <div className="d-flex justify-content-between px-5 border-bottom pb-1">
                    {/* <NavLink to="/home" className="items text-dark">
                        <li className="h5">{element} Home</li>
                    </NavLink> */}
                    <img src={img} alt="Bornali logo" className="" style={{width: "50px"}}/>
                    <h5 className="heading text-dark fw-normal mt-3">Welcome</h5>
                    {/* <h5 className="heading text-dark fst-italic fw-light">A Student Welfare Association of Former Students<br></br> of Dhaka Polytechnic Institute at DUET</h5> */}
                </div>
                {/* <hr style={{border: "1px solid lightgrey"}} className='m-0'></hr> */}
            </div>
            <div className='d-flex justify-content-center mt-3 mb-3'>
            <div className="w-75">
                <div className="w-100 p-3 border rounded">
                    <h1 className="heading fw-normal">Detail Information</h1>
                    <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                            <h4>Personal Details</h4>
                            <hr></hr>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className='d-flex align-items-center'>
                                        <input defaultValue={user.photoURL} {...register("image", { required: true })} type="file" id="files" className='w-100 mb-1 form-control' onChange={e => setImage(e.target.files[0])}/>
                                        {/* <label for="files" className='btn btn-secondary d-flex justify-content-start mb-1'>Choose Profile Picture </label><small className='text-muted'>&nbsp;(250*250px, size less than 200KB)</small> */}
                                        {errors.image?.type === 'required' && "Image is required"}
                                    </div>

                                    <input placeholder="Student ID" defaultValue="" {...register("sid", { required: true })} className='w-100 mb-1 form-control' onChange={e => setSid(e.target.value)}/>
                                    {errors.sid?.type === 'required' && "Student ID is required"}

                                    <input placeholder="Session i.e 2015-2019" defaultValue="" {...register("session", { required: true })} className='w-100 mb-1 form-control' onChange={e => setSession(e.target.value)}/>
                                    {errors.session?.type === 'required' && "Session is required"}

                                    <input placeholder="Department" defaultValue="" {...register("dept", { required: true })} className='w-100 mb-1 form-control' onChange={e => setDept(e.target.value)}/>
                                    {errors.dept?.type === 'required' && "Department is required"}

                                    <select name="bloodGroup" {...register('bloodGroup', { required: true })} className={`form-control ${errors.numberOfTickets ? 'is-invalid' : ''}`} onChange={e => setBlood(e.target.value)}>
                                        <option value={null}>Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="O+">O+</option>
                                        <option value="AB+">AB+</option>
                                        <option value="A-">A-</option>
                                        <option value="B-">B-</option>
                                        <option value="O-">O-</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                    <label></label>
                                    {errors.bloodGroup?.type === 'required' && "Blood Group is required"}
                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                <input placeholder='Full Name' {...register("displayName", { required: true })} className='w-100 mb-1 form-control' onChange={e => setName(e.target.value)}/>

                                <input defaultValue={user.email} {...register("email")} readOnly className='w-100 mb-1 form-control'/>

                                <input defaultValue={user.phoneNumber} {...register("phone")} readOnly className='w-100 mb-1 form-control'/>

                                <input placeholder='Present Address' {...register("address", { required: true })} className='w-100 mb-1 form-control' onChange={e => setAddress(e.target.value)}/>

                                <input placeholder='City' {...register("city", { required: true })} className='w-100 form-control' onChange={e => setCity(e.target.value)}/>
                                </div>
                            </div>

                            <h4 className='mt-5'>Professional Details</h4>
                            <hr></hr>
                            <div className='row mb-5'>
                                <div className='col-lg-6 col-sm-12'>
                                    <input placeholder="Organization" defaultValue="" {...register("company")} className='w-100 mb-1 form-control' onChange={e => setCompany(e.target.value)}/>
                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <input placeholder="Position" defaultValue="" {...register("position")} className='w-100 mb-1 form-control' onChange={e => setPosition(e.target.value)}/>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary text-light heading btn-lg w-50" value="Submit"/>
                        </form>
                </div>
            </div>
            </div>
            <h6 className="heading fw-normal border-top">&copy; Developed by DazingDevs</h6>
        </div>
        </div>
    );
};

export default DetailForm;