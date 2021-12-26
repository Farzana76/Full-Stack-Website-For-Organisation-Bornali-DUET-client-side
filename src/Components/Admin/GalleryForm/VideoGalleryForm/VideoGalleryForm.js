import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const VideoGalleryForm = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://floating-hamlet-78764.herokuapp.com/video', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Video embedded successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="row">
                    <div className="w-50 m-auto p-3 mb-3 add-service">
                        <h1 className="mb-3 heading fw-normal">Embed Video</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("title", { required: true })} placeholder="Video Title" className='w-75'/>
                            {errors.title?.type === 'required' && "Video title is required"}

                            <input {...register("embed", { required: true })} placeholder="Embed ID" className='w-75'/>
                            {errors.embed?.type === 'required' && "Embed ID is required"}
        
                            <input type="submit" className="btn text-light heading btn-lg w-50 fw-normal" style={{backgroundColor: 'rgb(59, 96, 133)'}} value="Embed Video"/>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default VideoGalleryForm;