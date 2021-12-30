import React, { useState } from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';

const Gallery = (props) => {
    const {name, session, image1, image2, image3, image4, image5, msg} = props.event;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

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
                    <Button variant="" onClick={() => setShow(true)}>
                        <img src={`data:image/png;base64,${image1}`} alt="" width="250px" height="200px" className='m-2'/>
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
                            <img src={`data:image/png;base64,${image1}`} alt="" width="100%" height="100%" className='px-5'/>
                        </Modal.Body>
                    </Modal>
                    <Button variant="" onClick={() => setShow1(true)}>
                        <img src={`data:image/png;base64,${image2}`} alt="" width="250px" height="200px" className='m-2'/>
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
                            <img src={`data:image/png;base64,${image2}`} alt="" width="100%" height="100%" className='px-5'/>
                        </Modal.Body>
                    </Modal>
                    <Button variant="" onClick={() => setShow2(true)}>
                        <img src={`data:image/png;base64,${image3}`} alt="" width="250px" height="200px" className='m-2'/>
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
                            <img src={`data:image/png;base64,${image3}`} alt="" width="100%" height="100%" className='px-5'/>
                        </Modal.Body>
                    </Modal>
                    <Button variant="" onClick={() => setShow3(true)}>
                        <img src={`data:image/png;base64,${image4}`} alt="" width="250px" height="200px" className='m-2'/>
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
                            <img src={`data:image/png;base64,${image4}`} alt="" width="100%" height="100%" className='px-5'/>
                        </Modal.Body>
                    </Modal>
                    <Button variant="" onClick={() => setShow4(true)}>
                        <img src={`data:image/png;base64,${image5}`} alt="" width="250px" height="200px" className='m-2'/>
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
                            <img src={`data:image/png;base64,${image5}`} alt="" width="100%" height="100%" className='px-5'/>
                        </Modal.Body>
                    </Modal>
                    {/* <img src={`data:image/png;base64,${image1}`} alt="" width="250px" height="200px" className='m-3'/>
                    <img src={`data:image/png;base64,${image2}`} alt="" width="250px" height="200px" className='m-3'/>
                    <img src={`data:image/png;base64,${image3}`} alt="" width="250px" height="200px" className='m-3'/>
                    <img src={`data:image/png;base64,${image4}`} alt="" width="250px" height="200px" className='m-3'/>
                    <img src={`data:image/png;base64,${image5}`} alt="" width="250px" height="200px" className='m-3'/> */}
                </div>
                    
                </Card>
            </Col>
        </div>
    );
};

export default Gallery;