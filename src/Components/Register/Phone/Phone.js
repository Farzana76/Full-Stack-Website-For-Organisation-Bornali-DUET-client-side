import React, { useEffect, useState } from 'react';
import img from '../../../img/logo.png';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from '../../../Firebase/firebase.init';

initializeAuthentication();

const Phone = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const { sign, getPhone, getCode, error } = useAuth();
    const auth = getAuth();

    const element = <FontAwesomeIcon icon={faArrowLeft} />

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    
    // window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    // window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    //     'size': 'normal',
    //     'callback': (response) => {
    //       // reCAPTCHA solved, allow signInWithPhoneNumber.
    //       // ...
    //     },
    //     'expired-callback': () => {
    //       // Response expired. Ask user to solve reCAPTCHA again.
    //       // ...
    //     }
    //   }, auth);

    //   window.recaptchaVerifier.render().then((widgetId) => {
    //     window.recaptchaWidgetId = widgetId;
    //   });

    window.recaptchaVerifier = new RecaptchaVerifier('sign-in', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          submitPhoneNumberAuth();
        },
        'expired-callback': () => {
                  // Response expired. Ask user to solve reCAPTCHA again.
                  // ...
                }
      }, auth);
   
        
        const submitPhoneNumberAuth = e => {
            // We are using the test phone numbers we created before
            // var phoneNumber = document.getElementById("phoneNumber").value;
            var phoneNumber = document.getElementById("phoneNumber").value;
            e.preventDefault();
            var appVerifier = window.recaptchaVerifier;
            console.log(phoneNumber);
            // signInWithPhoneNumber(auth, getPhone, appVerifier)
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(phoneNumber);
                // ...
              }).catch((error) => {
                // Error; SMS not sent
                // ...
              });
        }

        // window.recaptchaVerifier.render().then(function (widgetId) {
        //     window.recaptchaWidgetId = widgetId;
        //   });

        const submitPhoneNumberAuthCode = (confirmationResult) => {
            // We are using the test code we created before
            // var code = document.getElementById("code").value;
            var code = document.getElementById("code").value;
            confirmationResult.confirm(code).then((result) => {
                // confirmationResult.confirm(code).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user);
                setUser(result.user);
                history.push(redirect_url);
                // setError('');
                // ...
              }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
              });
        }

        useEffect(() => {
            const unsubscribed = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                }
                else {
                    setUser({});
                }
                setLoading(false);
            });
            return () => unsubscribed;
        }, [])

    // const handlePhoneLogin = () => {
    //     recaptcha()
    //         .then(result => {
    //             history.push(redirect_url);
    //         })
    // }

    // const handleCode = () => {
    //     submitPhoneNumberAuthCode()
    //         .then(result => {
    //             history.push(redirect_url);
    //         })
    // }

    return (
        <div className="row mt-3">
            <div className="col-lg-6 col-md-12 col-sm-12" style={{textAlign:"left"}}>
                <div className="margin">
                    <NavLink to="/login" className="items text-dark">
                        <li className="h5">{element} Back</li>
                    </NavLink>
                    <img src={img} alt="Bornali logo" className="w-25 mt-5 ms-5"/>
                    <h1 className="heading text-dark fw-normal mt-3">Welcome to Bornali</h1>
                    <h5 className="heading text-secondary fst-italic fw-light">A Student Welfare Association of Former Students<br></br> of Dhaka Polytechnic Institute at DUET</h5>
                    {/* <h6 className="heading text-primary mt-5">New member? </h6>
                    <p className="mt-1 text-center">
                        <Link to="/registration" className="text-decoration-none heading fw-normal">
                            <button className="btn btn-outline-primary me-2 mt-2 fw-normal w-100">
                                {element5} Register here
                            </button>
                        </Link>
                    </p> */}
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="w-50 p-3 mt-3 border rounded pb-5 mb-3 formbox ms-5">
                    <h1 className="mb-2 heading fw-normal">Phone Number Verification</h1>
                    <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div>
                    <form>
                        <input
                        onChange={getPhone}
                        className="form-control mb-3"
                        type="text"
                        name=""
                        id="phoneNumber"
                        placeholder="Phone Number"
                        />
                        <input
                        onChange={getCode}
                        className="form-control mb-3"
                        type="text"
                        name=""
                        id="code"
                        placeholder="Verification Code"
                        />
                        <input
                        // onChange={sign}
                        id="sign-in"
                        onClick={submitPhoneNumberAuth}
                        className="btn btn-primary mb-3 heading btn-lg text-light fw-normal"
                        type="submit"
                        value="Sign in with Phone"
                        />
                        <input
                        onClick={submitPhoneNumberAuthCode}
                        className="btn btn-primary mb-3 heading btn-lg text-light fw-normal"
                        type="submit"
                        value="Enter Code"
                        />
                        <p>Forgot your password?</p>
                    </form>
                    <hr></hr>
                    <div id="recaptcha-container"></div>
                </div>
            </div>
            <hr className="w-75 mx-auto"></hr>
            <h6 className="heading fw-normal">&copy; Developed by DazingDevs</h6>
        </div>
    );
};

export default Phone;