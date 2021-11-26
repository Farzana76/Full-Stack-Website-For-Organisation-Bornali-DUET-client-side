import React from 'react';
import { FacebookProvider, Page} from 'react-facebook';

const Facebook = () => {
    return (
        <FacebookProvider appId="475608343890593">
          <Page href="https://www.facebook.com/ddac2008"/>
        </FacebookProvider>
    );
};

export default Facebook;