import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Input from '../components/form/Input';
import LocalBundy from "../assets/images/local-Bundy.svg"

import { returnErrors } from '../store/reducers/errAlerts';
import { returnMessages } from '../store/reducers/msgAlerts';
import { axiosInstance } from '../Axios';
import { sendVerificationEmail, tokenConfig, validateEmail } from '../store/reducers/auth';

const EmailVerify = ()=> {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState('');
    const [valid, setValid] = useState(0);
    const params = useParams();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(sendVerificationEmail(Email))
    }

    useEffect(()=>{
        const token = params.token;
        if (token){
            dispatch(validateEmail(token)).then(res=>{
                setValid(res)
            }).catch(err=>{
                console.error(err)
            })
          }
    },[])



    return (
        <React.Fragment>
            {valid===1 ?
                <Navigate to="/login" />:
                valid===3 || valid ===0 ?
                    <div className="bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xl-4 mx-auto my-5 py-5 mt-4 border-3">
                                    <div className="col-lg-12 text-center mb-5"> <img className="img-fluid text-center" src={LocalBundy} width="200" alt="local bundy"/> </div>
                                    <form method='POST' style={{paddingLeft:0}} onSubmit={handleSubmit}>
                                        <Input label="Resend Verification Email" 
                                            id="inputEmail" type="text" 
                                            name="email" 
                                            placeholder="Enter email" 
                                            required autoFocus 
                                            onChange={e=>{
                                            setEmail(e.target.value)}}/>
                                        <button onClick={handleSubmit} className="btn btn-success text-white w-100 mb-2 p-3" >Resend Email</button>
                                    </form>
                                    <footer className=" text-center py-5 font-16 ">@ 2022 local bundy All rights reserved.</footer>
                                </div>
                            </div>
                        </div>
                    </div>:
                    false
            }
        </React.Fragment>
    );
}

  
export default EmailVerify