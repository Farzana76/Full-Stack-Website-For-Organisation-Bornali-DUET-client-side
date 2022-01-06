import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../img/logo.png';

const UserUpdateProfile = () => {
    const { error, user, getEmail, userRegistration, getPassword, signInUsingGoogle } = useAuth();
    // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showSpin, setShowSpin] = useState(true);
    const [members, setMembers] = useState([]);

const [productData, setProductData] = useState();

    const history = useHistory();

    useEffect(() => {
        fetch("https://floating-hamlet-78764.herokuapp.com/users")
        .then(res => res.json())
        .then(data => setMembers(data))
    }, [])

    const handleSubmit = e => {
        console.log(productData);
        const url = `https://floating-hamlet-78764.herokuapp.com/users`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                                console.log(data)
                                if (data.upsertedCount > 0 || data.modifiedCount > 0) {
                                // if(data.insertedId) {
                                    alert('Added successfully');
                                    // reset();
                                    console.log('Details added successfully');
                                    history.push('/home');
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });

    }
    const handleProductImageChange = event => {
        setShowSpin(false);
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2db9680356ab7afbbbca29c97ded20be');
        imageData.append('image', event.target.files[0]);
        console.log("imageData", imageData.values())
        console.log("imageData.getAll image", imageData.getAll("image"))
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const newProductData = { ...productData };
                newProductData.imageUrl = response.data.data.display_url;
                setProductData(newProductData);
                setShowSpin(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleProductPropertyChange = event => {
        const newProductData = { ...productData };
        newProductData[event.target.name] = event.target.value.trim();
        setProductData(newProductData);
    }
    return (
        <div>
            <div className=" mt-1">
            <div className="">
                <div className="d-flex justify-content-between px-5 border-bottom pb-1">
                    <img src={img} alt="Bornali logo" className="" style={{width: "50px"}}/>
                    <h5 className="heading text-dark fw-normal mt-3">Welcome {user.displayName}</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-3 mb-3'>
            <div className="w-75">
                <div className="w-100 p-3 border rounded">
                    <h1 className="heading fw-normal">Detail Information</h1>
                    <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div>
                    {members.filter(member => member.email === user.email).map(o => (
                    <form>

                            <h4>Personal Details</h4>
                            <hr></hr>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className='d-flex align-items-center'>
                                        <input type="file" className='w-100 mb-1 form-control' onChange={handleProductImageChange}/>
                                        
                                    </div>
                                    {!showSpin && <div><Spinner></Spinner><p className="text-center">Please Wait.! Image Uploading...</p></div>}

                                    <input placeholder="Student ID" name="sid" className='w-100 mb-1 form-control' defaultValue={o.sid} onChange={handleProductPropertyChange} required/>

                                    <input defaultValue={o.session} placeholder="Admission session i.e 2016-2017" name="session" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange} required/>

                                    <div className='dropdown1'>
                                        <select name="dept" defaultValue={o.dept} className="form-control mb-1" onChange={handleProductPropertyChange}>
                                            <option value="N/A">Select department</option>
                                            <option value="CSE">CSE</option>
                                            <option value="EEE">EEE</option>
                                            <option value="CE">CE</option>
                                            <option value="ME">ME</option>
                                            <option value="IPE">IPE</option>
                                            <option value="CFE">CFE</option>
                                            <option value="MME">MME</option>
                                            <option value="TE">TE</option>
                                            <option value="Architecture">Architecture</option>
                                        </select>
                                        {/* {errors.bloodGroup?.type === 'required' && "Blood Group is required"} */}
                                    </div>

                                    <div className='dropdown1'>
                                        <select name="bloodGroup" defaultValue={o.bloodGroup} className="form-control" onChange={handleProductPropertyChange}>
                                            <option value="N/A">Select blood group</option>
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="O+">O+</option>
                                            <option value="AB+">AB+</option>
                                            <option value="A-">A-</option>
                                            <option value="B-">B-</option>
                                            <option value="O-">O-</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                        {/* {errors.bloodGroup?.type === 'required' && "Blood Group is required"} */}
                                    </div>
                                   
                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                <input placeholder='Full Name' name="displayName" defaultValue={o.displayName} className='w-100 mb-1 form-control' onChange={handleProductPropertyChange}/>

                                <input name="email" defaultValue={o.email} className='w-100 mb-1 form-control'/>

                                <input name="phone" defaultValue={o.phone} readOnly className='w-100 mb-1 form-control'/>

                                <input defaultValue={o.address} placeholder='Present Address' name="address" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange}/>

                                <input defaultValue={o.city} placeholder='City' name="city" className='w-100 form-control' onChange={handleProductPropertyChange}/>
                                </div>
                            </div>

                            <h4 className='mt-5'>Professional Details</h4>
                            <hr></hr>
                            <div className='row mb-5'>
                                <div className='col-lg-6 col-sm-12'>
                                    <input defaultValue={o.company} placeholder="Organization" name="company" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange}/>
                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <input defaultValue={o.position} placeholder="Position" name="position" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange}/>
                                </div>
                            </div>
                            <Button variant="primary" as="input" type="reset" value="Update" block onClick={handleSubmit} />
                        </form>))}
                </div>
            </div>
            </div>
            <h6 className="heading fw-normal border-top">&copy; Developed by DazingDevs</h6>
        </div>
        </div>
    );
};

export default UserUpdateProfile;