import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Gallery = (props) => {
    const {name, session, image1, image2, image3, image4, image5, msg} = props.event;
    return (
        <div className='mb-5 pb-5'>
            <Col className='mb-5 pb-5'> 
                <Card border='' className="bg-transparent border-0" style={{minHeight: '400px'}}>
                    <Card.Title>
                        <h2 className="text-center mb-0 mt-1">{name}</h2>
                        <h4 className="text-center">
                            ({session})
                        </h4>
                        </Card.Title>
                        <Card.Text className='px-5'>
                        {msg}
                    </Card.Text>
                <div className='d-flex flex-wrap'>
                    <img src={`data:image/png;base64,${image1}`} alt="" width="250px" height="200px" className='m-3'/>
                    <img src={`data:image/png;base64,${image2}`} alt="" width="250px" height="200px" className='m-3'/>
                    <img src={`data:image/png;base64,${image3}`} alt="" width="250px" height="200px" className='m-3'/>
                    <img src={`data:image/png;base64,${image4}`} alt="" width="250px" height="200px" className='m-3'/>
                    <img src={`data:image/png;base64,${image5}`} alt="" width="250px" height="200px" className='m-3'/>
                </div>
                    
                </Card>
            </Col>
        </div>
    );
};

export default Gallery;