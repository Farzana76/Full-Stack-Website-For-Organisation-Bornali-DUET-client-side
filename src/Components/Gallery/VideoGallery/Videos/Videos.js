import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Video from '../Video/Video';

const Videos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/video')
        .then(res => res.json())
        .then(data => {
            setVideos(data);
        })
    }, [])

    return (
        <div className='bg-white mt-4'>
            <Row xs={1} md={1} lg={1} className="g-4 ps-lg-5 pe-lg-5 pb-5 pt-3">
                        {
                            videos.map(video => <Video
                                key = {video._id}
                                video={video}
                                ></Video>)
                        }
                </Row>
        </div>
    );
};

export default Videos;