import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const AddBook = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://floating-hamlet-78764.herokuapp.com/books', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Book added successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="row">
                    <div className="w-50 m-auto p-3 mb-3 add-service">
                        <h1 className="mb-3 heading fw-normal">Upload Books</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("title", { required: true })} placeholder="Book Title" className='w-75'/>
                            {errors.title?.type === 'required' && "Book title is required"}

                            <input {...register("writer", { required: true })} placeholder="Book Writer" className='w-75'/>
                            {errors.writer?.type === 'required' && "Book Writer is required"}

                            <input {...register("quantity", { required: true })} placeholder="Book Quantity" className='w-75'/>
                            {errors.quantity?.type === 'required' && "Book Quantity is required"}

                                    
                            <input type="submit" className="btn text-light heading btn-lg w-50 fw-normal" style={{backgroundColor: 'rgb(59, 96, 133)'}} value="Upload Book"/>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default AddBook;