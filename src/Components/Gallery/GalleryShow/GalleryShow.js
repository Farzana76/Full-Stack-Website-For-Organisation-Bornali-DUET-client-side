import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import Gallery from '../Gallery';

const GalleryShow = () => {
    const [events, setEvents] = useState([]);

    // loading event data
    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/event')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <Menu></Menu>
            <div className='box'>
                <div className='pt-5'>
                    <h1 className='pt-5'>Bornali Events</h1>
                </div>
                <hr className='w-50 mx-auto'></hr>
                <Row xs={1} md={1} lg={1} className="g-4 ps-3 pe-3 pt-3">
                    {
                        events.map(event => <Gallery
                            key = {event._id}
                            event={event}
                            ></Gallery>)
                    }
                </Row> 
            </div>
        <Footer></Footer>
        </div>
    );
};

export default GalleryShow;