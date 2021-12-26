import React from 'react';
import { Col } from 'react-bootstrap';
import './Video.css'

const Video = (props) => {
    const {title, embed} = props.video;

    return (
        <div>
            <Col>
                <h3>{title}</h3>
                <iframe
                    className='vdo'
                    src={`https://www.youtube.com/embed/${embed}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </Col>
        </div>
    );
};

export default Video;