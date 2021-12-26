import React from 'react';
import { Col, Fade, Nav, Row, Tab } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import GalleryShow from '../GalleryShow/GalleryShow';
import Videos from '../VideoGallery/Videos/Videos';
import './AllGallery.css'

const AllGallery = () => {
    return (
        <div>
            <Menu></Menu>
            <div className='pb-5 px-5'>
                <div className='pt-5'>
                    <h1 className='pt-5'>Bornali Event Gallery</h1>
                </div>
                <hr className='w-50 mx-auto mb-5'></hr>
                <Tab.Container id="left-tabs-example" defaultActiveKey="gallery" transition={Fade} className="border border-info">
                    <Row>
                        <Col sm={2} className='pe-0 ps-0'>
                        <Nav variant="pills" className="flex-column nav">
                            <Nav.Item>
                            <Nav.Link eventKey="gallery">Image Gallery</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="videos">Video Gallery</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={10} className='ps-0 pe-0'>
                        <Tab.Content>
                            <Tab.Pane eventKey="gallery">
                                <GalleryShow></GalleryShow>
                            </Tab.Pane>
                            <Tab.Pane eventKey="videos">
                                <Videos></Videos>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllGallery;