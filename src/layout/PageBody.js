import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Header from "./Header";
import Footer from "./Footer";

import {loadUser} from "../store/reducers/auth";

function PageBody(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadUser());
    },[])

    return (
        <React.Fragment>
            <Header></Header>
            <div className="bg-light">
                <Container>
                    <Outlet/>
                </Container>
            </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default PageBody;