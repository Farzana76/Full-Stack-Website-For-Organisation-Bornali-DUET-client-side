import React, { useState } from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Gallery = (props) => {
    // const {name, session, image1, image2, image3, image4, image5, link, msg} = props.event;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    // console.log(msg)


    const {eventName, session, imageUrl, imageUrl2, imageUrl3, imageUrl4, imageUrl5, link, desc} = props.event;

    const element = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div>
            <div className='mb-5 pb-5'>
                <Col className='mb-5 pb-5'> 
                    <Card border='' className="bg-transparent border-0" style={{minHeight: "400px"}}>
                        <Card.Title>
                            <h1 className="text-center mb-0 mt-1 heading text-dark">{eventName}</h1>
                            <h4 className="text-center">
                                ({session})
                            </h4>
                        </Card.Title>
                            <h6>{desc}</h6>
                            <div className='d-flex flex-wrap'>
                                {
                                    imageUrl &&
                                    <>
                                        <Button variant="" onClick={() => setShow(true)}>
                                            <img src={imageUrl} alt="" width="250px" height="200px" className='m-2'/>
                                        </Button>
                                        <Modal
                                            show={show}
                                            centered={true}
                                            // fullscreen={true}
                                            size=""
                                            onHide={() => setShow(false)}
                                            dialogClassName="modal-20w"
                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <img src={imageUrl} alt="" width="100%" height="100%" className='px-5'/>
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                                {
                                    imageUrl2 &&
                                    <>
                                        <Button variant="" onClick={() => setShow1(true)}>
                                            <img src={imageUrl2} alt="" width="250px" height="200px" className='m-2'/>
                                        </Button>
                                        <Modal
                                            show={show1}
                                            centered={true}
                                            // fullscreen={true}
                                            size=""
                                            onHide={() => setShow1(false)}
                                            dialogClassName="modal-20w"
                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <img src={imageUrl2} alt="" width="100%" height="100%" className='px-5'/>
                                            </Modal.Body>
                                        </Modal>
                                    </>

                                }
                                {
                                    imageUrl3 && 
                                    <>
                                        <Button variant="" onClick={() => setShow2(true)}>
                                            <img src={imageUrl3} alt="" width="250px" height="200px" className='m-2'/>
                                        </Button>
                                        <Modal
                                            show={show2}
                                            centered={true}
                                            // fullscreen={true}
                                            size=""
                                            onHide={() => setShow2(false)}
                                            dialogClassName="modal-20w"
                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <img src={imageUrl3} alt="" width="100%" height="100%" className='px-5'/>
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                                {
                                    imageUrl4 ?
                                    <>
                                        <Button variant="" onClick={() => setShow3(true)}>
                                            <img src={imageUrl4} alt="" width="250px" height="200px" className='m-2'/>
                                        </Button>
                                        <Modal
                                            show={show3}
                                            centered={true}
                                            // fullscreen={true}
                                            size=""
                                            onHide={() => setShow3(false)}
                                            dialogClassName="modal-20w"
                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <img src={imageUrl4} alt="" width="100%" height="100%" className='px-5'/>
                                            </Modal.Body>
                                        </Modal>
                                    </> :
                                    <div style={{visibility: "hidden"}}></div>
                                }
                                {
                                    imageUrl5 ?
                                    <>
                                        <Button variant="" onClick={() => setShow4(true)}>
                                            <img src={imageUrl5} alt="" width="250px" height="200px" className='m-2'/>
                                        </Button>
                                        <Modal
                                            show={show4}
                                            centered={true}
                                            // fullscreen={true}
                                            size=""
                                            onHide={() => setShow4(false)}
                                            dialogClassName="modal-20w"
                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <img src={imageUrl5} alt="" width="100%" height="100%" className='px-5'/>
                                            </Modal.Body>
                                        </Modal>
                                    </>:
                                    <div style={{visibility: "hidden"}}></div>
                                }
                                {
                                    link ?
                                    <Button variant="" ><a className='btn btn-light m-2 d-flex align-items-center justify-content-center' href={link} target="_blank" rel="noreferrer" style={{width: "250px", height:"200px"}}>
                                    <h3 className='heading'>See More {element}</h3> 
                                    </a></Button>:
                                    <div style={{visibility: "hidden"}}></div>
                                }
                                
                            </div>
                            
                            
                    </Card>
                </Col>
            </div>
        </div>








        // <div className='mb-5 pb-5'>
        //     <Col className='mb-5 pb-5'> 
        //         <Card border='' className="bg-transparent border-0" style={{minHeight: '400px'}}>
        //             <Card.Title>
        //                 <h1 className="text-center mb-0 mt-1 heading text-dark">{name}</h1>
        //                 <h4 className="text-center">
        //                     ({session})
        //                 </h4>
        //                 </Card.Title>
        //                 <h6>{msg}</h6>
                        
        //         <div className='d-flex flex-wrap'>
        //             <Button variant="" onClick={() => setShow(true)}>
        //                 <img src={`data:image/png;base64,${image1}`} alt="" width="250px" height="200px" className='m-2'/>
        //             </Button>
        //             <Modal
        //                 show={show}
        //                 centered={true}
        //                 // fullscreen={true}
        //                 size=""
        //                 onHide={() => setShow(false)}
        //                 dialogClassName="modal-20w"
        //                 aria-labelledby="example-custom-modal-styling-title"
        //             >
        //                 <Modal.Header closeButton>
        //                 <Modal.Title id="example-custom-modal-styling-title">
                            
        //                 </Modal.Title>
        //                 </Modal.Header>
        //                 <Modal.Body>
        //                     <img src={`data:image/png;base64,${image1}`} alt="" width="100%" height="100%" className='px-5'/>
        //                 </Modal.Body>
        //             </Modal>
        //             <Button variant="" onClick={() => setShow1(true)}>
        //                 <img src={`data:image/png;base64,${image2}`} alt="" width="250px" height="200px" className='m-2'/>
        //             </Button>
        //             <Modal
        //                 show={show1}
        //                 centered={true}
        //                 // fullscreen={true}
        //                 size=""
        //                 onHide={() => setShow1(false)}
        //                 dialogClassName="modal-20w"
        //                 aria-labelledby="example-custom-modal-styling-title"
        //             >
        //                 <Modal.Header closeButton>
        //                 <Modal.Title id="example-custom-modal-styling-title">
                            
        //                 </Modal.Title>
        //                 </Modal.Header>
        //                 <Modal.Body>
        //                     <img src={`data:image/png;base64,${image2}`} alt="" width="100%" height="100%" className='px-5'/>
        //                 </Modal.Body>
        //             </Modal>
        //             <Button variant="" onClick={() => setShow2(true)}>
        //                 <img src={`data:image/png;base64,${image3}`} alt="" width="250px" height="200px" className='m-2'/>
        //             </Button>
        //             <Modal
        //                 show={show2}
        //                 centered={true}
        //                 // fullscreen={true}
        //                 size=""
        //                 onHide={() => setShow2(false)}
        //                 dialogClassName="modal-20w"
        //                 aria-labelledby="example-custom-modal-styling-title"
        //             >
        //                 <Modal.Header closeButton>
        //                 <Modal.Title id="example-custom-modal-styling-title">
                            
        //                 </Modal.Title>
        //                 </Modal.Header>
        //                 <Modal.Body>
        //                     <img src={`data:image/png;base64,${image3}`} alt="" width="100%" height="100%" className='px-5'/>
        //                 </Modal.Body>
        //             </Modal>
        //             <Button variant="" onClick={() => setShow3(true)}>
        //                 <img src={`data:image/png;base64,${image4}`} alt="" width="250px" height="200px" className='m-2'/>
        //             </Button>
        //             <Modal
        //                 show={show3}
        //                 centered={true}
        //                 // fullscreen={true}
        //                 size=""
        //                 onHide={() => setShow3(false)}
        //                 dialogClassName="modal-20w"
        //                 aria-labelledby="example-custom-modal-styling-title"
        //             >
        //                 <Modal.Header closeButton>
        //                 <Modal.Title id="example-custom-modal-styling-title">
                            
        //                 </Modal.Title>
        //                 </Modal.Header>
        //                 <Modal.Body>
        //                     <img src={`data:image/png;base64,${image4}`} alt="" width="100%" height="100%" className='px-5'/>
        //                 </Modal.Body>
        //             </Modal>
        //             <Button variant="" onClick={() => setShow4(true)}>
        //                 <img src={`data:image/png;base64,${image5}`} alt="" width="250px" height="200px" className='m-2'/>
        //             </Button>
        //             <Modal
        //                 show={show4}
        //                 centered={true}
        //                 // fullscreen={true}
        //                 size=""
        //                 onHide={() => setShow4(false)}
        //                 dialogClassName="modal-20w"
        //                 aria-labelledby="example-custom-modal-styling-title"
        //             >
        //                 <Modal.Header closeButton>
        //                 <Modal.Title id="example-custom-modal-styling-title">
                            
        //                 </Modal.Title>
        //                 </Modal.Header>
        //                 <Modal.Body>
        //                     <img src={`data:image/png;base64,${image5}`} alt="" width="100%" height="100%" className='px-5'/>
        //                 </Modal.Body>
        //             </Modal>

        //             <Button variant="" ><a className='btn btn-light m-2 d-flex align-items-center justify-content-center' href={link} target="_blank" rel="noreferrer" style={{width: "250px", height:"200px"}}>
        //                 <h3 className='heading'>See More {element}</h3> 
        //             </a></Button>
        //             {/* <img src={`data:image/png;base64,${image1}`} alt="" width="250px" height="200px" className='m-3'/>
        //             <img src={`data:image/png;base64,${image2}`} alt="" width="250px" height="200px" className='m-3'/>
        //             <img src={`data:image/png;base64,${image3}`} alt="" width="250px" height="200px" className='m-3'/>
        //             <img src={`data:image/png;base64,${image4}`} alt="" width="250px" height="200px" className='m-3'/>
        //             <img src={`data:image/png;base64,${image5}`} alt="" width="250px" height="200px" className='m-3'/> */}
        //         </div>
                    
        //         </Card>
        //     </Col>
        // </div>
    );
};

export default Gallery;