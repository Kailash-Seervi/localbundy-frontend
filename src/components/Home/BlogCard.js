import React from "react";

import image2 from "../../assets/images/local-bundy-image-5.png"
import PostImage from "../../assets/images/local-bundy-image-2.png"
import LikeIcon from "../../assets/images/icon.svg"
import LoveIcon from "../../assets/images/icon-1.svg"
import { Link } from "react-router-dom";
// import ShareIcon from "../../assets/images/icon-2.svg"


function BlogCard({data, handleLike, handleLove, detailView}) {
    return (
        <div className="col-xl-12 col-sm-12 col-12 mt-4">
            {/* <div className="col-xl-12">
                <div className="d-flex justify-content-between">
                    <h4>Stephan jonh Business timeline public timeline</h4>
                    <p >Entries 1-12 of 12</p>
                </div>
            </div> */}
            <div className="card mb-3 ">
                <div className="card-body p-0">
                    <div className="m-4">
                        <div className="d-flex">
                            <div className="col-lg-1  mt-1"> 
                                <img className="img-fluid" src={image2} width="80" height="80" alt="Sample"/> 
                            </div>
                            <div className="col-lg-11 ms-2">
                            {detailView?
                                (<h5>{data.author} {data.created_at?new Date(data.created_at).toLocaleString():false}</h5>):
                                <Link to={`/blogs/${data.id}`}>
                                    <h5>{data.author} {data.created_at?new Date(data.created_at).toLocaleString():false}</h5>
                                </Link>}
                                <p className="mb-1 fw-normal">{data.body && data.body}</p>
                                {/* <span className="mb-1  text-primary">https://www.youtube.com/watch?v=taeHDv5Ve-8</span>  */}
                                {data.image && <img className="img-fluid mt-2 w-100" loading="lazy" src={data.image} width="746" height="336"  alt="local bundy"/>}
                                <div className="mt-3 mb-3"> 
                                    <img src={LikeIcon} alt="like" onClick={()=>handleLike(data.id)}/>&nbsp; &nbsp;{data.likes && data.likes}&nbsp;&nbsp; 
                                    <img src={LoveIcon} alt="love" onClick={()=>handleLove(data.id)}/>&nbsp; &nbsp;{data.loves && data.loves} &nbsp;&nbsp; 
                                    {/* <img src={ShareIcon} alt="share"/>&nbsp;&nbsp;30K  */}
                                    <span className="float-end">Views&nbsp;[{data.views && data.views}]</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card">
                <div className="card-body p-0">
                    <div className="m-4">
                        <div className="d-flex">
                            <div className="col-lg-1  mt-1"> 
                                <img className="img-fluid" src={image2} width="80" height="80" alt="Sample"/> 
                            </div>
                            <div className="col-11 ms-2">
                                <h5>Stephan john  @mccoy</h5>
                                <p className="mb-1">Etiam eu molestie eros, commodo hendrerit sapien. Nunc pretium tortor felis, eget cursus magna egetnec imperdiet ornare. hendrerit sapien. </p>
                                <div className="mt-3 mb-3"> 
                                    <img src={LikeIcon} alt="like"/>&nbsp; &nbsp;20K&nbsp;&nbsp; 
                                    <span className="float-end">
                                        <span className="text-primary">Comments&nbsp;[10]</span>&nbsp;&nbsp;Views&nbsp;[100]
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default BlogCard;