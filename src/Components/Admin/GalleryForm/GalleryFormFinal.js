import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import img1 from '../../../img/noimg.png';

const GalleryFormFinal = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset} = useForm();
    const [name, setName] = useState('');
    const [session, setSession] = useState('');
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [link, setLink] = useState('');
    const [msg, setMsg] = useState('');

    const onSubmit = e => {
        // e.preventDefault();
        // if (!image) {
        //     return;
        // }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('session', session);
        formData.append('image1', image1);
        console.log(image1)
        formData.append('image2', image2);
        console.log(image2)
        formData.append('image3', image3);
        console.log(image3)
        formData.append('image4', image4);
        console.log(image4)
        formData.append('image5', image5);
        console.log(image5)
        formData.append('link', link);
        formData.append('msg', msg);
        
        fetch('https://floating-hamlet-78764.herokuapp.com/event', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Event added successfully')
                    console.log('message added successfully')
                    reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="row">

                <div className="w-75 m-auto p-3 mt-5 mb-3 add-service">
                    <h2 className="mb-3 heading fw-normal">Add Event Gallery</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Name:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("name", { required: true })} placeholder="Event Name" onChange={e => setName(e.target.value)}/>
                                {errors.name?.type === 'required' && "Name is required"}
                            </div>
                        </div>
                        
                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Year:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("session", { required: true })} placeholder="Year, i.e 2021" onChange={e => setSession(e.target.value)}/>
                                {errors.session && "Session is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image1:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image1", { required: true })} type="file" onChange={e => setImage1(e.target.files[0])}/>
                                {errors.image1?.type === 'required' && "Image is required"}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image2:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image2")} type="file" onChange={e => setImage2(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image3:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image3")} type="file" onChange={e => setImage3(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image4:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image4")} type="file" onChange={e => setImage4(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image5:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image5")} type="file" onChange={e => setImage5(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Link:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input placeholder="Public Drive link"  defaultValue="" {...register("link")} onChange={e => setLink(e.target.value)}/>
                                {/* {errors.msg && "Message is required"} */}
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Description:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <textarea placeholder="Description"  defaultValue="" {...register("msg")} onChange={e => setMsg(e.target.value)}/>
                                {/* {errors.msg && "Message is required"} */}
                            </div>
                        </div>
                        <button className='mt-3 btn btn-info'>Submit</button>
                    </form>
            </div>
            
            
        </div>
    );
};

export default GalleryFormFinal;