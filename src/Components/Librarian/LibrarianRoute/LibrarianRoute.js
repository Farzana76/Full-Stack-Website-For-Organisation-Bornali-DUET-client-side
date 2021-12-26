import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LibrarianRoute = ({ children, ...rest }) => {
    const { user, loading, librarian } = useAuth();
    if (loading) {
        return <Spinner animation="border" />
    }
    
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && librarian ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default LibrarianRoute;