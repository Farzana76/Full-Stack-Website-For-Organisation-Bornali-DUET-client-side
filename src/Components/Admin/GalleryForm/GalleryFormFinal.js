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
    const [image6, setImage6] = useState(null);
    const [image7, setImage7] = useState(null);
    const [image8, setImage8] = useState(null);
    const [image9, setImage9] = useState(null);
    const [image10, setImage10] = useState(null);
    const [image11, setImage11] = useState(null);
    const [image12, setImage12] = useState(null);
    const [image13, setImage13] = useState(null);
    const [image14, setImage14] = useState(null);
    const [image15, setImage15] = useState(null);
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
        formData.append('image6', image6);
        formData.append('image7', image7);
        formData.append('image8', image8);
        formData.append('image9', image9);
        formData.append('image10', image10);
        formData.append('image11', image11);
        formData.append('image12', image12);
        formData.append('image13', image13);
        formData.append('image14', image14);
        formData.append('image15', image15);
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
                <div className="w-100 m-auto p-3 mt-5 mb-3 add-service">
                    <h2 className="mb-3 heading fw-normal">Upload Image Gallery</h2>
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
                                <h5 className='ps-5 ms-3'>Image6:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image6")} type="file" onChange={e => setImage6(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image7:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image7")} type="file" onChange={e => setImage7(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image8:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image8")} type="file" onChange={e => setImage8(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image9:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image9")} type="file" onChange={e => setImage9(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image10:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image10")} type="file" onChange={e => setImage10(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image11:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image11")} type="file" onChange={e => setImage11(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image12:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image12")} type="file" onChange={e => setImage12(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image13:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image13")} type="file" onChange={e => setImage13(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image14:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image14")} type="file" onChange={e => setImage14(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Image15:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <input {...register("image15")} type="file" onChange={e => setImage15(e.target.files[0])}/>
                            </div>
                        </div>

                        <div className='row w-100'>
                            <div className='col-lg-2'>
                                <h5 className='ps-5 ms-3'>Description:&nbsp;</h5>
                            </div>
                            <div className='col-lg-10'>
                                <textarea defaultValue="" {...register("msg")} placeholder="Description" onChange={e => setMsg(e.target.value)}/>
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