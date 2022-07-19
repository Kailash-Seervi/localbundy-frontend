import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import LocalBundy from "../assets/images/local-Bundy.svg"
import { logout } from '../store/reducers/auth';

function Header() {

    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="bg-dark-1">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className=" container"> 
                    <Link to="/blogs">
                        <img className="img-fluid" src={LocalBundy} width="190" alt="local bundy"/> 
                    </Link>
                    <div className="navbar-collapse" id="navbarSupportedContent" style={{gap:"10px"}}>
                        <div className="col-xl-5 col-sm-8 col-12 ms-auto">
                            <div className="row me-5">
                                <div className="input-group  mt-1 mb-1 ">
                                <input type="text" className="form-control" placeholder="Serach" aria-label="Search" aria-describedby="basic-addon2"/>
                                <span className="input-group-text" id="basic-addon2">Find</span> </div>
                            </div>
                        </div>
                        {isAuthenticated?(
                            <div className="d-flex col-lg-4" style={{gap:"10px"}}>
                                <Link to="/create-blog" className="d-block" style={{maxWidth:"120px"}}>
                                    <div className="col-lg-10  mx-3  mt-1" >
                                        <div className="row"> 
                                            <button className="btn btn-success text-white mb-2" role="button" >Create Blog</button> 
                                        </div>
                                    </div>
                                </Link>
                                <div className="col-lg-2  mx-3  mt-1" style={{maxWidth:"60px"}}>
                                    <div className="row"> 
                                        <button onClick={handleLogout} className="btn btn-dark text-white mb-2" role="button" >Logout</button> 
                                    </div>
                                </div>
                            </div>
                            ):(
                            <React.Fragment>
                                <div className="col-lg-2  mx-3  mt-1" style={{maxWidth:"60px"}}>
                                    <div className="row"> 
                                        <Link to="/login" className="btn btn-dark text-white mb-2" role="button" >Sign In</Link> 
                                    </div>
                                    </div>
                                <div className="col-lg-2 mx-3  mt-1" style={{maxWidth:"60px"}}>
                                    <div className="row">
                                        <Link to="/signup" className="btn btn-success text-white   mb-2" role="button">Sign Up</Link> 
                                    </div>
                                </div>
                            </React.Fragment>
                            )
                        }
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;