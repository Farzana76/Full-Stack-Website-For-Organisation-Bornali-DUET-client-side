import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import './Message.css'

const element = <FontAwesomeIcon icon={faQuoteLeft} />
const element2 = <FontAwesomeIcon icon={faQuoteRight} />

const Message = (props) => {
    const {name, session, image, msg} = props.message;
    return (
        <div>
            {/* <SwiperSlide>
                <Row xs={1} md={1} lg={1} className="">
                    <Col> */}
                        <Card border='' className="bg-transparent border-0 card msg">
                                    <Card.Img variant="top" className="mx-auto mt-3" src={`data:image/png;base64,${image}`} style={{width: "100px", borderRadius: "50%"}}/>  
                                    <Card.Title>
                                        <h4 className="text-center mb-0 mt-1">{name}</h4>
                                        <small className="text-center">
                                            President ({session})
                                        </small>
                                    </Card.Title>
                                    <Card.Text className='px-lg-5'>
                                    <h6 className="text-secondary fst-italic justify px-lg-5 mx-lg-5">
                                    {element}<br></br>
                                    
                                    <div className='p-3'>
                                    
                                    {msg}
                                    
                                    </div>
                                    
                                    <div className='text-right'>{element2}</div>
                                    </h6>
                                </Card.Text>
                        </Card>
                    {/* </Col>
                </Row> 
            </SwiperSlide> */}
        </div>
    );
};

export default Message;