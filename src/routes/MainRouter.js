import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {Login, Signup, Home, CreateBlog, BlogDetails} from "../pages";
import PrivateRoute from './PrivateRoute';
import ScrollToTop from './ScrollToTop';

const MainRouter = () => {
    return (
        <Router>
        <ScrollToTop/>
          <Routes>
            <Route  path={"/"} element={<PrivateRoute />}>
              <Route path="blogs" element={<Home/>}/>
              <Route path="blogs/:blogId" element={<BlogDetails />} />
              <Route exact path={"create-blog"} element={<CreateBlog/>} />
            </Route>

            <Route exact path={"/login"} element={<Login/>}/>
            <Route exact path={"/signup"} element={<Signup/>}/>

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />

          </Routes>
        </Router>
    );
  }
  
  export default MainRouter