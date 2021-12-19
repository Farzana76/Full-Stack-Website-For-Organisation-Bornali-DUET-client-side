import React from 'react';
import { NavLink } from 'react-router-dom';

const DetailForm = () => {
    return (
        <div>
            <div className="row mt-3">
            <div className="col-lg-6 col-md-12 col-sm-12" style={{textAlign:"left"}}>
                <div className="margin">
                    {/* <NavLink to="/home" className="items text-dark">
                        <li className="h5">{element} Home</li>
                    </NavLink> */}
                    <img src={img} alt="Bornali logo" className="w-25 mt-5 ms-5"/>
                    <h1 className="heading text-dark fw-normal mt-3">Welcome to Bornali</h1>
                    <h5 className="heading text-dark fst-italic fw-light">A Student Welfare Association of Former Students<br></br> of Dhaka Polytechnic Institute at DUET</h5>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="w-50 p-3 mt-3 border rounded mb-2 formbox ms-5">
                    <h1 className="mb-2 heading fw-normal">Please Register</h1>
                    <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div>
                    <form>
                        <input
                        onChange={getName}
                        className="form-control mb-3"
                        type="text"
                        name=""
                        id=""
                        placeholder="Name"
                        />
                        <input
                        onChange={getEmail}
                        className="form-control mb-3"
                        type="email"
                        name=""
                        id=""
                        placeholder="E-mail"
                        />
                        <input
                        onChange={getPassword}
                        className="form-control mb-3"
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        />
                        <input
                        onChange={getPassword}
                        className="form-control mb-3"
                        type="password"
                        name=""
                        id=""
                        placeholder="Confirm Password"
                        />
                        <Link to="/login">
                        <button
                            onClick={userRegistration}
                            className="btn btn-primary text-light heading btn fw-normal btn-lg">Register
                        </button>
                        </Link>
                    </form>
                    <hr></hr>
                    <p>Or Login with</p>
                    <button onClick={handleGoogleLogin} className="btn btn-danger me-2 heading text-light mt-2 fw-normal w-75 google">
                        {element2} Google
                    </button>
                    <button onClick={handleGoogleLogin} className="btn me-2 heading text-light mt-2 fw-normal w-75 yahoo" style={{backgroundColor: 'rgb(46, 46, 100)'}}>
                        {element4} Yahoo
                    </button>
                    <button onClick={handleGoogleLogin} className="btn btn-success me-2 heading text-light mt-2 fw-normal w-75 microsoft mb-3">
                        {element3} Microsoft
                    </button>
                </div>
            </div>
            <hr className="w-75 mx-auto mt-3"></hr>
            <h6 className="heading fw-normal">&copy; Developed by DazingDevs</h6>
        </div>
        </div>
    );
};

export default DetailForm;