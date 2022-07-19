import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import Input from '../components/form/Input';
import { login } from '../store/reducers/auth';

import LocalBundy from "../assets/images/local-Bundy.svg"

function Login() {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);

    const [Email, setEmail] = useState(false);
    const [Password, setPassword] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(login(Email,Password));
    }
    

    return (
        <React.Fragment>
            {isAuthenticated ? <Navigate to="/blogs"/>:
                (<div className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-xl-4 mx-auto my-5 py-5 mt-4 border-3">
                                <div className="col-lg-12 text-center mb-5"> <img className="img-fluid text-center" src={LocalBundy} width="200" alt="local bundy"/> </div>
                                <form method='POST' style={{paddingLeft:0}} onSubmit={handleSubmit}>
                                    <Input label="Your Email" id="inputEmail" type="text" name="email" placeholder="Enter Name" required autoFocus onChange={e=>{
                                        setEmail(e.target.value)
                                        }}/>
                                    <Input label="Password" id="inputPassword" type="password" name="password" placeholder="Enter Password" required  onChange={e=>{setPassword(e.target.value)}}/>
                                    <div className="form-check mt-2 mb-3">
                                    <label className="float-left font-16"><a href="forgot-password.html">Forget password ?</a></label>
                                    </div>
                                    
                                    <button onClick={handleSubmit} className="btn btn-success text-white w-100 mb-2 p-3" >Sign In</button>
                                </form>
                                    
                                    
                                <p className="mb-4 font-16 ">Don't have an account ? <span className="text-success"><Link to="/signup">Sign up here</Link></span></p>
                                <footer className=" text-center py-5 font-16 ">@ 2022 local bundy All rights reserved.</footer>
                            </div>
                        </div>
                    </div>
                </div>)}
        </React.Fragment>
    );
}

export default Login;