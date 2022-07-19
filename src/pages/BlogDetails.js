import React, { useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import { useParams } from "react-router-dom";


import BlogCard from "../components/Home/BlogCard";

import Ad from "../assets/images/ad.jpg"
import { getBlog, likeBlog, loveBlog } from '../store/reducers/blog';



function BlogDetails() {

    const dispatch = useDispatch()
    const [Blog, setBlog] = useState([]);

    let params = useParams();


    const loadBlog = ()=>{
        if(params.blogId)
        dispatch(getBlog(params.blogId)).then(data=>{
            console.log(data)
            if(data.success) {
                setBlog([data.data]);
            }
            else console.log("No Blog currently")
        })
    }

    const handleLike = (id)=>{
        dispatch(likeBlog(id)).then(data=>{
            if(data.success){
                loadBlog();
            }
        });
    }

    const handleLove = (id)=>{
        dispatch(loveBlog(id)).then(data=>{
            if(data.success){
                loadBlog();
            }
        });
    }

    useEffect(()=>{
        console.log("Blog details")
        loadBlog();
    },[])

    return (
        <div className="row justify-content-center align-items-start">
            <div className="col-xl-9 col-sm-12 col-12">
                {Blog.map(data=>
                        <BlogCard 
                            handleLike={handleLike} 
                            handleLove={handleLove}
                            key={data.id} 
                            data={data}
                            detailView
                            />) 
                            }
            </div>
            <div className="col-lg-3 col-sm-12 col-12 mt-4 mb-5 text-center"> 
                <img className="img-fluid" src={Ad} width="269" height="1051" alt="banner"/>
            </div>
        </div>
    );
}

export default BlogDetails;