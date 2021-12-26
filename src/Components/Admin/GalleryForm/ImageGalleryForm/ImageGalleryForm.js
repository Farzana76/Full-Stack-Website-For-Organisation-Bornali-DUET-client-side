import axios from 'axios';
import React from 'react';

const ImageGalleryForm = () => {

    const onSubmit = data => {
        console.log(data);
        axios.post('https://floating-hamlet-78764.herokuapp.com/event', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    // reset();
                }
            })
    }
    return (
        <div>
            <form onSubmit={onSubmit} action="/event" method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" multiple/>
                <button className='mt-3 btn btn-info'>Submit</button>
            </form>
        </div>
    );
};

export default ImageGalleryForm;