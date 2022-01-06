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
    imageUrl: '',
    imageUrl2: '',
    imageUrl3: '',
    imageUrl4: '',
    imageUrl5: '',
    link: '',
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

    const handleProductImageChange2 = event => {
        setShowSpin(false);
        console.log(event.target.files[0]);
        const imageData2 = new FormData();
        imageData2.set('key', '2db9680356ab7afbbbca29c97ded20be');
        imageData2.append('image', event.target.files[0]);
        console.log("imageData", imageData2.values())
        console.log("imageData.getAll image", imageData2.getAll("image"))
        axios.post('https://api.imgbb.com/1/upload',
            imageData2)
            .then(function (response) {
                const newProductData = { ...productData };
                newProductData.imageUrl2 = response.data.data.display_url;
                setProductData(newProductData);
                setShowSpin(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleProductImageChange3 = event => {
        setShowSpin(false);
        console.log(event.target.files[0]);
        const imageData3 = new FormData();
        imageData3.set('key', '2db9680356ab7afbbbca29c97ded20be');
        imageData3.append('image', event.target.files[0]);
        console.log("imageData", imageData3.values())
        console.log("imageData.getAll image", imageData3.getAll("image"))
        axios.post('https://api.imgbb.com/1/upload',
            imageData3)
            .then(function (response) {
                const newProductData = { ...productData };
                newProductData.imageUrl3 = response.data.data.display_url;
                setProductData(newProductData);
                setShowSpin(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleProductImageChange4 = event => {
        setShowSpin(false);
        console.log(event.target.files[0]);
        const imageData4 = new FormData();
        imageData4.set('key', '2db9680356ab7afbbbca29c97ded20be');
        imageData4.append('image', event.target.files[0]);
        console.log("imageData", imageData4.values())
        console.log("imageData.getAll image", imageData4.getAll("image"))
        axios.post('https://api.imgbb.com/1/upload',
            imageData4)
            .then(function (response) {
                const newProductData = { ...productData };
                newProductData.imageUrl4 = response.data.data.display_url;
                setProductData(newProductData);
                setShowSpin(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleProductImageChange5 = event => {
        setShowSpin(false);
        console.log(event.target.files[0]);
        const imageData5 = new FormData();
        imageData5.set('key', '2db9680356ab7afbbbca29c97ded20be');
        imageData5.append('image', event.target.files[0]);
        console.log("imageData", imageData5.values())
        console.log("imageData.getAll image", imageData5.getAll("image"))
        axios.post('https://api.imgbb.com/1/upload',
            imageData5)
            .then(function (response) {
                const newProductData = { ...productData };
                newProductData.imageUrl5 = response.data.data.display_url;
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
                                <div className=''>
                                    <input type="file" className='w-100 mb-1 form-control' onChange={handleProductImageChange} required/>

                                    <input type="file" className='w-100 mb-1 form-control' onChange={handleProductImageChange2}/>

                                    <input type="file" className='w-100 mb-1 form-control' onChange={handleProductImageChange3}/>

                                    <input type="file" className='w-100 mb-1 form-control' onChange={handleProductImageChange4}/>

                                    <input type="file" className='w-100 mb-1 form-control' onChange={handleProductImageChange5}/>
                                        
                                    {!showSpin && <div><Spinner></Spinner><p className="text-center">Please Wait.! Image Uploading...</p></div>}

                                    <input placeholder="Event Name" name="eventName" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange} required/>

                                    <input placeholder="Event Year" name="session" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange} required/>

                                    <textarea placeholder='Drive Link' name="link" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange}/>

                                    <textarea placeholder='Description' name="desc" className='w-100 mb-1 form-control' onChange={handleProductPropertyChange}/>
                            </div>
                            <Button variant="primary" as="input" value="Submit" block onClick={handleSubmit} className='text-white'/>
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