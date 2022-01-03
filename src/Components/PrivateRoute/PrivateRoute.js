import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const [oldUser, setOldUser] = useState({});
    const [userLoading, setUserLoading] = useState(true);


    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            setUserLoading(true);
            console.log("data", data);
            setOldUser(data);
            console.log("oldUser", oldUser);
        })
        .finally(() => setUserLoading(false))
    }, [])

    if (userLoading) {
        return <Spinner animation="border" />
    }

    const res = oldUser.find(ou => ou.email === user.email );

    // if (loading) {
    //     return <Spinner animation="border" />
    // }
    
    return (
        <Route
            {...rest}
            render={({ location }) => res ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;