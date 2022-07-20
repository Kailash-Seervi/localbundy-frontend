import React, { useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import Pagination from '../components/Blog/Pagination';
import BlogCard from "../components/Blog/BlogCard";

import Ad from "../assets/images/ad.jpg"
import { getBlogs, likeBlog, loveBlog } from '../store/reducers/blog';

function Blogs() {

    const dispatch = useDispatch()
    const [Blogs, setBlogs] = useState([]);

    const [paginationOptions, setPaginationOptions] = useState({
        count: 0,
        next: null,
        page_number: 0,
        page_size: 0,
        previous: null
    });

    const loadBlogs = (page)=>{
        dispatch(getBlogs(page)).then(data=>{
            if(data.count) {
                setBlogs([...data.results]);
                const {
                    count,
                    next,
                    page_number,
                    page_size,
                    previous
                } = data;
                setPaginationOptions({
                    count,
                    next,
                    page_number,
                    page_size,
                    previous
                })
            }
            else console.log("No blogs currently")
        })
    }

    const handleLike = (id)=>{
        dispatch(likeBlog(id)).then(data=>{
            if(data.success){
                loadBlogs();
            }
        });
    }

    const handleLove = (id)=>{
        dispatch(loveBlog(id)).then(data=>{
            if(data.success){
                loadBlogs();
            }
        });
    }

    useEffect(()=>{
        loadBlogs();
    },[])

    return (
        <div className="row justify-content-center align-items-start">
            <div className="col-xl-9 col-sm-12 col-12">
                {Blogs.map(data=>
                        <BlogCard 
                            handleLike={handleLike} 
                            handleLove={handleLove}
                            key={data.id} 
                            data={data}/>)}
                <Pagination paginationOptions={paginationOptions} getData={loadBlogs} />
            </div>
            <div className="col-lg-3 col-sm-12 col-12 mt-4 mb-5 text-center"> 
                <img className="img-fluid" src={Ad} width="269" height="1051" alt="banner"/>
            </div>
        </div>
    );
}

export default Blogs;