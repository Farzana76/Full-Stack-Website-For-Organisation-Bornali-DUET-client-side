import axios from 'axios';
import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';

const AdvisoryCommitteeForm = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset, control, watch } = useForm();

    const { fields, append, remove } = useFieldArray({ name: 'tickets', control });

    // watch to enable re-render when ticket number is changed
    const numberOfTickets = watch('numberOfTickets');

    useEffect(() => {
        // update field array when ticket number changed
        const newVal = parseInt(numberOfTickets || 0);
        const oldVal = fields.length;
        if (newVal > oldVal) {
            // append tickets to field array
            for (let i = oldVal; i < newVal; i++) {
                append({ name: '', sem: ''});
            }
        } else {
            // remove tickets from field array
            for (let i = oldVal; i > newVal; i--) {
                remove(i - 1);
            }
        }
    }, [numberOfTickets]);

    // const onSubmit = e => {
    //     // e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('designation', designation);
    //     formData.append('numberOfTickets', numberOfTickets);
    //     // formData.append('tickets', 1name);

    //     fetch('http://localhost:5000/currentmembers', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 alert('Members added successfully')
    //                 console.log('Members added successfully')
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }

    const onSubmit = data => {
        console.log(data);
        axios.post('https://floating-hamlet-78764.herokuapp.com/advisor', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
        <div className="w-75 m-auto p-3 mb-3 add-service">
            <h2 className="mb-3 heading fw-normal">Add Advisory Committee</h2>
            <form onSubmit={handleSubmit(onSubmit)}>    
                <div className='text-left mb-3 w-75'>
                    <h5 className=''>Select no. of the members:</h5>
                    <select name="numberOfTickets" value="Advisory Committee" {...register('numberOfTickets')} className={`form-control ${errors.numberOfTickets ? 'is-invalid' : ''}`}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(i =>
                                <option key={i} value={i}>{i}</option>
                            )}
                    </select>
                </div>

                {fields.map((item, i) => (
                    <div key={i} className="list-group list-group-flush">
                        <div className="list-group-item">
                            <h5 className="card-title">Member {i + 1}</h5>
                            <div className='row'>
                                <div className="form-group col-6">
                                    <label>Name</label>
                                    <input name={`tickets[${i}]name`} {...register(`tickets.${i}.name`)} type="text" className={`form-control ${errors.tickets?.[i]?.name ? 'is-invalid' : ''} w-100`} />
                                    <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div>
                                </div>
                                <div className="form-group col-6">
                                    <label>Position/Semester</label>
                                    <input name={`tickets[${i}]sem`} {...register(`tickets.${i}.sem`)} type="text" className={`form-control ${errors.tickets?.[i]?.sem ? 'is-invalid' : ''} w-100`} />
                                    <div className="invalid-feedback">{errors.tickets?.[i]?.sem?.message}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <button className='mt-3 btn btn-info'>Submit</button>
            </form>
        </div>
    </div>

    );
};

export default AdvisoryCommitteeForm;