import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const ImageGalleryFormNew = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, reset, control, watch } = useForm();

    const { fields, append, remove } = useFieldArray({ name: 'tickets', control });

    // watch to enable re-render when ticket number is changed
    const numberOfTickets = watch('numberOfTickets');

    useEffect(event => {
        // update field array when ticket number changed
        const newVal = parseInt(numberOfTickets || 0);
        const oldVal = fields.length;
        const imageData = new FormData();
        imageData.set('key', 'c01893fe74bfd862af43b215adb0d9d1');
        if (newVal > oldVal) {
            // append tickets to field array
            for (let i = oldVal; i < newVal; i++) {
                append({name: ''});
            }
            
            axios.post('https://api.imgbb.com/1/upload',
                imageData)
                .then(function (response) {
                    const newProductData = { ...productData };
                    newProductData.tickets = response.data.data.display_url;
                    setProductData(newProductData);
                    setShowSpin(true);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            // remove tickets from field array
            for (let i = oldVal; i > newVal; i--) {
                remove(i - 1);
            }
        }
    }, [numberOfTickets]);


    const [showSpin, setShowSpin] = useState(true);

const [productData, setProductData] = useState({
    eventName: '',
    session: '',
    tickets: [],
    desc: ''
});

    const history = useHistory();

    const handleSubmit = e => {
        console.log(productData);
        const url = `https://floating-hamlet-78764.herokuapp.com/event`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                                console.log(data)
                                // if (data.upsertedCount > 0 || data.modifiedCount > 0) {
                                if(data.insertedId) {
                                    alert('Added successfully');
                                    // reset();
                                    console.log('Details added successfully');
                                    // history.push('/home');
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
        imageData.set('key', 'c01893fe74bfd862af43b215adb0d9d1');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const newProductData = { ...productData };
                newProductData.tickets = response.data.data.display_url;
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
        <div className="w-75 m-auto p-3 mt-5 mb-3 add-service">
            <h2 className="mb-3 heading fw-normal">Add Image Gallery</h2>
            {/* <h5 className='ps-5 ms-3'>Event Name</h5> */}
            <form>
                <input placeholder="Event Name" name="eventName" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange} required/>

                <input placeholder="Event Year" name="session" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange} required/>

                <textarea placeholder='Description' name="desc" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange}/>
                
                <div className='text-left mb-3 w-75'>
                    <h5 className=''>Select no. of the images:</h5>
                    <select name="numberOfTickets" {...register('numberOfTickets')} className={`form-control ${errors.numberOfTickets ? 'is-invalid' : ''}`}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(i =>
                                <option key={i} value={i}>{i}</option>
                            )}
                    </select>
                </div>

                {fields.map((item, i) => (
                    <div key={i} className="list-group list-group-flush">
                        <div className="list-group-item">
                            <h5 className="card-title">Image {i + 1}</h5>
                            <div className='row'>
                                <div className="form-group col-6">
                                    {/* <label>Name</label> */}
                                    <input name={`tickets[${i}]name`} {...register(`tickets.${i}.name`)} type="file" className={`form-control ${errors.tickets?.[i]?.name ? 'is-invalid' : ''} w-100`}/>
                                    
                                    {/* <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Button variant="primary" as="input" type="reset" value="Submit" block onClick={handleSubmit} />
            </form>
        </div>
    </div>
);

};

export default ImageGalleryFormNew;