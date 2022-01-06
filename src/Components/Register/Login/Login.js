import React,{useEffect, useState} from 'react';
import { Link, useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../img/logo.png';
import { Button, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faMicrosoft, faYahoo } from '@fortawesome/free-brands-svg-icons';
import {faArrowLeft, faRegistered} from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Login = () => {
    const { signInUsingGoogle, signInUsingMicrosoft, signInUsingYahoo, signInWithEmail, userEmail, userPassword, error, loadOldUser, hudai, setUser, user } = useAuth();
    const [userFoul, setUserFoul] = useState([]);
    const [userLoading, setUserLoading] = useState(true);

    const element = <FontAwesomeIcon icon={faArrowLeft} />
    const element2 = <FontAwesomeIcon icon={faGoogle} />
    const element3 = <FontAwesomeIcon icon={faMicrosoft} />
    const element4 = <FontAwesomeIcon icon={faYahoo} />
    const element5 = <FontAwesomeIcon icon={faRegistered} />

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            setUserLoading(true);
            console.log("data", data);
            setUserFoul(data);
            console.log("userfoul", userFoul);
        })
        .finally(() => setUserLoading(false))
    }, [])

    if (userLoading) {
        return <Spinner animation="border" />
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
            .then(result => {
                setUser(result.user);
                console.log(result.user.email);
                console.log(userFoul)
                const res = userFoul.find(ou => ou.email === result.user.email );
                console.log(res);
                    if(res === undefined){
                        history.push('/phoneLogin');
                    }
                    else{
                        const destination = location?.state?.from || '/home';
                        history.push(destination);
                        
                        // console.log(setFindName);
                    }
            // alert("Logged in successfully!");
            })
       
    }

    const handleMicrosoftLogin = () => {
        signInUsingMicrosoft()
            .then(result => {
                history.push('/phoneLogin');
            })
    }

    const handleYahooLogin = () => {
        signInUsingYahoo()
            .then(result => {
                setUser(result.user);
                console.log(result.user.email);
                console.log(userFoul)
                const res = userFoul.find(ou => ou.email === result.user.email );
                console.log(res);
                    if(res === undefined){
                        history.push('/phoneLogin');
                    }
                    else{
                        const destination = location?.state?.from || '/home';
                        history.push(destination);
                        
                        // console.log(setFindName);
                    }
            // alert("Logged in successfully!");
            })
    }

    const handleLoginSubmit = e => {

        signInWithEmail(history);
        e.preventDefault();
    }

    return (
        <div className="row mt-3">
            <div className="col-lg-6 col-md-12 col-sm-12" style={{textAlign:"left"}}>
                <div className="margin">
                    <NavLink to="/home" className="items text-dark">
                        <li className="h5">{element} Home</li>
                    </NavLink>
                    <NavLink to="/home">
                        <img src={img} alt="Bornali logo" className="w-25 mt-5 mx-auto"/>
                    </NavLink>
                    
                    <h1 className="heading text-dark fw-normal mt-3">Welcome to Bornali</h1>
                    <h5 className="heading text-secondary fst-italic fw-light">A Student Welfare Association of Former Students<br></br> of Dhaka Polytechnic Institute at DUET</h5>
                    <h6 className="heading text-primary mt-5">New member? </h6>
                    <p className="mt-1 text-center">
                        <Link to="/registration" className="text-decoration-none heading fw-normal">
                            <button className="btn btn-outline-primary me-2 mt-2 fw-normal w-100">
                                {element5} Register here
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="p-3 mt-3 border rounded pb-5 mb-3 formbox ms-5">
                    <h1 className="mb-2 heading fw-normal">Log in</h1>
                    <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div>
                    <form>
                        <input
                        onChange={userEmail}
                        className="form-control mb-3"
                        type="email"
                        name=""
                        id=""
                        placeholder="E-mail"
                        />
                        <input
                        onChange={userPassword}
                        className="form-control mb-3"
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        />
                        <input
                        onClick={handleLoginSubmit}
                        className="btn btn-primary mb-3 heading btn-lg text-light fw-normal"
                        type="submit"
                        value="Login"
                        />
                        <p>Forgot your password?</p>
                    </form>
                    <hr></hr>
                    <p>Or Login with</p>
                    <button onClick={handleGoogleLogin} className="btn btn-danger me-2 heading text-light mt-2 fw-normal w-75 google">
                        {element2} Google
                    </button>
                    <button onClick={handleYahooLogin} className="btn me-2 heading text-light mt-2 fw-normal w-75 yahoo" style={{backgroundColor: 'rgb(46, 46, 100)'}}>
                        {element4} Yahoo
                    </button>
                    <button onClick={handleMicrosoftLogin} className="btn btn-success me-2 heading text-light mt-2 fw-normal w-75 microsoft">
                        {element3} Microsoft
                    </button>
                </div>
            </div>
            <hr className="w-75 mx-auto"></hr>
            <h6 className="heading fw-normal">&copy; Developed by DazingDevs</h6>
        </div>
    );
};

export default Login;