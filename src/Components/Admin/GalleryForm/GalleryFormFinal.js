import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const GalleryFormFinal = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset} = useForm({
        defaultValues: {
          msg: " "
        }
      });
    const [name, setName] = useState('');
    const [session, setSession] = useState('');
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [msg, setMsg] = useState(false);

    const onSubmit = e => {
        // e.preventDefault();
        // if (!image) {
        //     return;
        // }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('session', session);
        formData.append('image1', image1);
        formData.append('image2', image2);
        formData.append('image3', image3);
        formData.append('image4', image4);
        formData.append('image5', image5);
        formData.append('msg', msg);
        console.log(formData.name);
        fetch('https://floating-hamlet-78764.herokuapp.com/event', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Event added successfully')
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
                                <h5 className='ps-5 ms-3'>Image 1:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image1", { required: true })} type="file" onChange={e => setImage1(e.target.files[0])}/>
                                {errors.image1?.type === 'required' && "Image is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image 2:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image2", { required: true })} type="file" onChange={e => setImage2(e.target.files[0])}/>
                                {errors.image2?.type === 'required' && "Image is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image 3:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image3", { required: true })} type="file" onChange={e => setImage3(e.target.files[0])}/>
                                {errors.image3?.type === 'required' && "Image is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image 4:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image4", { required: true })} type="file" onChange={e => setImage4(e.target.files[0])}/>
                                {errors.image4?.type === 'required' && "Image is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image 5:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image5", { required: true })} type="file" onChange={e => setImage5(e.target.files[0])}/>
                                {errors.image5?.type === 'required' && "Image is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Description:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <textarea {...register("msg")} placeholder="Description" onChange={e => setMsg(e.target.value)}/>
                                {/* {errors.msg && "Message is required"} */}
                            </div>
                        </div>
                        <button className='mt-3 btn btn-info'>Submit</button>
                    </form>
            </div>
            </div>
            
        </div>
    );
};

export default GalleryFormFinal;