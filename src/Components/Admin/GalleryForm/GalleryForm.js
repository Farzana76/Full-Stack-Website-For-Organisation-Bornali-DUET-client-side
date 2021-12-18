import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const GalleryForm = () => {
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
        console.log(formData.image);
        fetch('https://floating-hamlet-78764.herokuapp.com/event', {
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



    // const onSubmit = e => {
    //     // e.preventDefault();
    //     if (!image) {
    //         return;
    //     }
    //     const formData = new FormData();
    //     formData.append('name', name);
    //     formData.append('session', session);
    //     // formData.append('image', image);
    //     formData.append('msg', msg);

    //     // const file = e.target.files[{}];

    //     for (let i = 0; i < image.length; i++) {
    //         formData.append(`image[${i}]`, image[i])
    //     }
    //     console.log(formData)
    //     fetch('https://floating-hamlet-78764.herokuapp.com/event', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 alert('Added successfully');
    //                 reset();
    //                 console.log('message added successfully')
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // //     fetch('https://floating-hamlet-78764.herokuapp.com/event', {
    // //         method: 'POST',
    // //         body: 'multipart/formData'
    // //     })
    // //         .then(res => res.json())
    // //         .then(data => {
    // //             if (data.insertedId) {
    // //                 alert('Event added successfully')
    // //                 console.log('message added successfully')
    // //                 reset();
    // //                 console.log(data)
    // //             }
    // //         })
    // //         .catch(error => {
    // //             console.error('Error:', error);
    // //         });
    // // }

    // // fetch('https://floating-hamlet-78764.herokuapp.com/event', {
    // //         method: 'POST',
    // //         headers: {
    // //             'content-type': 'multipart/formData'
    // //         },
    // //         body: JSON.stringify(data)
    // //     })
    // //         .then(res => res.json())
    // //         .then(data => {
    // //             if (data.insertedId) {
    // //                 alert('Made Admin Successfully');
    // //                 console.log(data);
    // //                 reset();
    // //             }
    // //         })

    //     // e.preventDefault()
    // }

    return (
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">{user.displayName}'s dashboard</h2>
                <div className="w-75 m-auto p-3 mt-5 mb-3 add-service">
                    <h2 className="mb-3 heading fw-normal">Add Events</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Event Name:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("name", { required: true })} placeholder="Event Name" onChange={e => setName(e.target.value)}/>
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
                                <input {...register("image", { required: true })} type="file" multiple onChange={e => setImage(e.target.files[0])}/>
                                {errors.img?.type === 'required' && "Image is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Message:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <textarea {...register("msg", { required: false })} placeholder="Description (Optional)" onChange={e => setMsg(e.target.value)}/>
                            </div>
                        </div>
                        <button className='mt-3 btn btn-info'>Submit</button>
                    </form>
                </div>   
            </div>
        </div>
    );
};

export default GalleryForm;