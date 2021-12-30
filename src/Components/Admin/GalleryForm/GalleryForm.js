import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import ImageGalleryForm from './ImageGalleryForm/ImageGalleryForm';
import VideoGalleryForm from './VideoGalleryForm/VideoGalleryForm';
import GalleryFormFinal from './GalleryFormFinal';

const GalleryForm = () => {
    const { user, loading } = useAuth();

    return (
        <div>
        <div className="row">
            <div className="col-2">
                <Dashboard></Dashboard>
            </div>
            <div className="col-10">
                    {user.displayName ? 
                        <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">
                        {user.displayName}'s dashboard</h2> :
                        <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">
                        My dashboard</h2>

                    }

                <div className="w-75 m-auto mt-5 border rounded mb-3 border-info add-service">
                    <Tabs defaultActiveKey="addEvent" id="uncontrolled-tab-example">
                        <Tab eventKey="addEvent" title="Add Image Gallery" className="bg-white">
                            <GalleryFormFinal></GalleryFormFinal>
                        </Tab>
                        <Tab eventKey="embedVideo" title="Embed Video" className="bg-white">
                            <VideoGalleryForm></VideoGalleryForm>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
        </div>
    );
};

export default GalleryForm;