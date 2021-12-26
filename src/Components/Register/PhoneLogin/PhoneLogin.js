import React, { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import initializeAuthentication from '../../../Firebase/firebase.init';
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import img from '../../../img/logo.png';

const PhoneLogin = () => {
    const { user } = useAuth();

       // const nextRoute= useParams()
    const [newUser, setNewUser] = useState(null);
    const { signInUsingOTP } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleSubmit = () => {
        console.log(newUser.name);
        console.log(newUser.email);
        console.log(newUser.number);
        signInUsingOTP("+88", newUser.name, newUser.email, newUser.number, "recaptcha-container", location, history);
                            // history.push(redirect_url);
    };
    return (
        <div className='' style={{minHeight: "100vh"}}>
            <div className="mt-1">
            <div className="">
                <div className="d-flex justify-content-between px-5 border-bottom pb-1">
                    {/* <NavLink to="/home" className="items text-dark">
                        <li className="h5">{element} Home</li>
                    </NavLink> */}
                    <img src={img} alt="Bornali logo" className="" style={{width: "50px"}}/>
                    <h6 className="heading text-dark fw-normal mt-3">Welcome {user.displayName}</h6>
                    {/* <h5 className="heading text-dark fst-italic fw-light">A Student Welfare Association of Former Students<br></br> of Dhaka Polytechnic Institute at DUET</h5> */}
                </div>
                {/* <hr style={{border: "1px solid lightgrey"}} className='m-0'></hr> */}
            </div>
            <div className='d-flex justify-content-center mt-3 mb-3'>
            <div className="w-75">
                <div className="w-100 p-3 border rounded">
                    <h1 className="heading fw-normal">Phone Number Verification</h1>
                    {/* <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div> */}
                    <Form className="mt-lg-5 pt-lg-5" onSubmit={(e) => { e.preventDefault(); }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Number, i.e 0155.." autoComplete="off" onBlur={(e) => {
                                const nUser = {};
                                nUser.name = user.displayName;
                                nUser.email = user.email;
                                nUser.number = e.target.value;
                                setNewUser(nUser);
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
            <h6 className="heading fw-normal border-top w-100" style={{position: "absolute", bottom: "0%"}}>&copy; Developed by DazingDevs</h6>
        </div>
        </div>
    );
};

export default PhoneLogin;