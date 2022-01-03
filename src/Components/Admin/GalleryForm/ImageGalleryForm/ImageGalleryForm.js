import axios from 'axios';
import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const ImageGalleryForm = () => {
    const { error, user} = useAuth();
    const [showSpin, setShowSpin] = useState(true);


const [productData, setProductData] = useState({
    eventName: '',
    session: '',
    imageUrl: [],
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
                                    console.log('Event added successfully');
                                    // history.push('/allGallery');
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });

    }
    const handleProductImageChange = event => {
        setShowSpin(false);
        console.log(event.target.files[0]);
        console.log("length", event.target.files.length);
        const imageData = new FormData();
        imageData.set('key', 'c01893fe74bfd862af43b215adb0d9d1');
        for (let i = 0; i < event.target.files.length; i++) {
            imageData.append("image", event.target.files[i]);
          }
          console.log("imageData", imageData)
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const newProductData = { ...productData };
                for (let i = 0; i < event.target.files.length; i++) {
                    newProductData[i].imageUrl = response.data.data.display_url;
                    console.log(newProductData[i].imageUrl)
                  }
                
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
            <div className='d-flex justify-content-center mt-3 mb-3'>
            <div className="w-75">
                <div className="w-100 p-3 border rounded">
                    <h1 className="heading fw-normal">Detail Information</h1>
                    <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div>
                    <form enctype="multipart/form-data">

                            <h4>Personal Details</h4>
                            <hr></hr>
                                <div className=''>
                                    <div className='d-flex align-items-center'>
                                        <input type="file" className='w-100 mb-1 form-control' onChange={handleProductImageChange} multiple/>
                                        
                                    </div>
                                    {!showSpin && <div><Spinner></Spinner><p className="text-center">Please Wait.! Image Uploading...</p></div>}

                                    <input placeholder="Event Name" name="eventName" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange} required/>

                                    <input placeholder="Event Year" name="session" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange} required/>

                                    <textarea placeholder='Description' name="desc" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange}/>
                            </div>
                            <Button variant="primary" as="input" value="Submit" block onClick={handleSubmit} />
                        </form>
                </div>
            </div>
            </div>
            <h6 className="heading fw-normal border-top">&copy; Developed by DazingDevs</h6>
        </div>
        </div>




    
    );
};

export default ImageGalleryForm;