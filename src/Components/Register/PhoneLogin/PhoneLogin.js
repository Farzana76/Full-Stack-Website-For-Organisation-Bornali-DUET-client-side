import React, { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import initializeAuthentication from '../../../Firebase/firebase.init';
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const PhoneLogin = () => {
       // const nextRoute= useParams()
    const [newUser, setNewUser] = useState(null);
    const { signInUsingOTP } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleSubmit = () => {
        signInUsingOTP("+88", newUser.number, "recaptcha-container", location, history);
                            // history.push(redirect_url);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-lg-5 p-md-3 p-2">
                    <Form className="mt-lg-5 pt-lg-5" onSubmit={(e) => { e.preventDefault(); }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Number" autoComplete="off" onBlur={(e) => {
                                const user = {};
                                user.number = e.target.value;
                                setNewUser(user);
                            }} required />
                            <Form.Text className="text-muted">
                                We'll never share your number with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            <div id="recaptcha-container"></div>
                        </Form.Group>
                        <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>Sign Up</button>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default PhoneLogin;