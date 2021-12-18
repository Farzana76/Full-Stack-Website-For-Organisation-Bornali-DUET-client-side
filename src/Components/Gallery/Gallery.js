import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Gallery = (props) => {
    const {name, session, image1, image2, image3, image4, image5, msg} = props.event;
    return (
        <div>
            {/* <SwiperSlide>
                <Row xs={1} md={1} lg={1} className="">*/}
                    <Col> 
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

                            <div className="row mx-5">
                                <div className="col-lg-4 col-sm-12">
                                    <div className="row mb-3 image">
                                        <img className="img-fluid" style={{width: "240px", height: "240px"}} src={`data:image/png;base64,${image1}`} alt=""/>
                                    </div>
                                    <div className="row image mb-3">
                                        <img style={{width: "240px", height: "135px"}} src={`data:image/png;base64,${image2}`} alt=""/>
                                    </div>
                                </div>
                                {/* middle column */}
                                <div className="col-lg-4 col-sm-12">
                                    <div className="row mb-3 image">
                                        <img style={{width: "240px", height: "135px"}} className="img-fluid" src={`data:image/png;base64,${image4}`} alt=""/>
                                    </div>
                                    <div className="row mb-3 image">
                                        <img style={{width: "240px", height: "240px"}} src={`data:image/png;base64,${image3}`} alt="" className="img-fluid"/>
                                    </div>
                                    {/* <div className="row mb-3">
                                        <div className="col-6 image">
                                            <img src={`data:image/png;base64,${image5}`} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="col-6 image">
                                            <img src={`data:image/png;base64,${image1}`} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3 image">
                                        <img src={`data:image/png;base64,${image1}`} alt="" className="img-fluid"/>
                                    </div> */}
                                </div>
                                {/* last column */}
                                <div className="col-lg-4 col-sm-12">
                                    <div className="row mb-3 image">
                                        <img style={{width: "240px", height: "240px"}} className="img-fluid" src={`data:image/png;base64,${image1}`} alt=""/>
                                    </div>
                                    <div className="row mb-3 image">
                                        <img style={{width: "240px", height: "135px"}} className="img-fluid" src={`data:image/png;base64,${image5}`} alt=""/>
                                    </div>
                                    {/* <div className="row mb-3 image">
                                        <img className="img-fluid" src={`data:image/png;base64,${image1}`} alt=""/>
                                    </div> */}
                                    
                                </div>
                            </div>
                        </Card>
                     </Col>
               {/* </Row> 
            </SwiperSlide> */}
        </div>
    );
};

export default Gallery;