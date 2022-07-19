import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import Input from '../components/form/Input';

import LocalBundy from "../assets/images/local-Bundy.svg"
import { register } from '../store/reducers/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email1, setEmail1] = useState('');
    const [Email2, setEmail2] = useState('');
    const [Password, setPassword] = useState('');
    const [Username, setUsername] = useState('');
    const [AgreeTnC, setAgreeTnC] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!Username){
            alert("Username is required")
            return
        }
        if(Username.includes(" ")){
            alert("username shouldn't contain space")
            return
        }
        if(Email1!==Email2){
            alert("Emails don't match");
            return
        }
        if(Password.length<8){
            alert("Password should atleast have 8 characters")
            return
        }
        if(!AgreeTnC){
            alert("Please agree the terms and conditions")
            return
        }
        dispatch(register({username:Username,password:Password, email:Email1})).then(data=>{
            if(data.success){
                alert(`${data.message}. Please verify your email to login.`)
                navigate("/login")
            }
            else{
                alert("Failed!")
            }
        });
    }

    return (
        <div className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xl-4 mx-auto my-5 py-5 mt-4">
                        <div className="col-lg-12 text-center mb-5"> <img className="img-fluid text-center" src={LocalBundy} width="200" alt="local bundy"/> </div>
                            <form style={{paddingLeft:0}} onSubmit={handleSubmit}>
                                <Input 
                                    label="Your Email address" 
                                    id="inputEmail-1" 
                                    type="email" 
                                    name="email1" 
                                    value={Email1}
                                    placeholder="Enter email id" 
                                    onChange={e=>{setEmail1(e.target.value)}}
                                />
                                <Input 
                                    label="Your Name" 
                                    id="inputEmail" 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter Name" 
                                    required 
                                    autoFocus 
                                    onChange={e=>{setUsername(e.target.value)}}
                                />
                                <Input 
                                    label="Confirm Email address" 
                                    id="inputPassword-1" 
                                    type="email" 
                                    name="email2" 
                                    value={Email2}
                                    placeholder="Confirm email address"
                                    required
                                    onChange={e=>{setEmail2(e.target.value)}}
                                />
                                <Input 
                                    label="Password" 
                                    id="inputPassword" 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    value={Password}
                                    required 
                                    onChange={e=>{setPassword(e.target.value)}}
                                />

                                <div className="form-check mt-2 mb-3">
                                    <input 
                                        className="form-check-input mt-1 mr-3" name="check-tnc" type="checkbox" value={AgreeTnC} 
                                        aria-label="I agree all statements in Terms of service"
                                        onClick={e=>setAgreeTnC(!AgreeTnC)}
                                    />
                                    <label className="float-left font-16">I agree all statements in Terms of service</label>
                                </div>
                                <button onClick={handleSubmit} className="btn btn-success w-100 btn-block  mb-2 p-3">Sign Up</button>
                            </form>
                        <footer className=" text-center py-5 font-16 ">@ 2022 local bundy All rights reserved.</footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;