import React from 'react';

import LocalBundy from "../assets/images/local-Bundy.svg"
import TwitterIcon from "../assets/images/twitter.svg"
import FBIcon from "../assets/images/facebook.svg"
import GooglePlusIcon from "../assets/images/google-plus.svg"

function Footer() {
    return (
        <React.Fragment>
            <div className="bg bg-dark-1 text-center p-5">
                <div className="container">
                    <h4>Dont miss our latest post</h4>
                    <p>Etiam eu molestie eros, commodo hendrerit sapien. Nunc pretium tortor felis, eget 
                    cursus magna egetnec imperdiet ornare.</p>
                    <button type="button" className="btn btn-success">Subscribe Local bundy</button>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center mt-2"> 
                    <a className="navbar-brand text-center" href="!#"> 
                        <img className="img-fluid" src={LocalBundy} width="120" alt="local bundy"/> 
                    </a>
                    <p className="text-center p-0 m-0">Home
                        Our Story
                        Events
                        Gallery
                        Travel    Food      Business      Contact
                    </p>
                    <div className="col-xs-12 col-sm-6 text-center p-0"> 
                        <img src={FBIcon} alt="facebook"/>&nbsp; 
                        <img src={TwitterIcon} alt="twitter"/> &nbsp; 
                        <img src={GooglePlusIcon} alt="google"/> 
                    </div>
                    <p className="text-center">Copyright © 2022  The news time. All rights reserved.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;