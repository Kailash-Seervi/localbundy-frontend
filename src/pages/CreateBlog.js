import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createBlog } from "../store/reducers/blog";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function CreateBlog() {

    const [Img, setImg] = useState('');
    const [Location, setLocation] = useState('');
    const [Body, setBody] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const ImgRef = useRef();

    const getLocationByIP = ()=>{

        const options = {
        method: 'GET',
        url: 'https://spott.p.rapidapi.com/places/ip/me',
        params: {limit: '10', skip: '0', country: 'US,CA', q: 'Sea', type: 'CITY'},
        headers: {
            'X-RapidAPI-Key': '06309ea524msh619184ec3dfd6bfp15d3e3jsn2521e437b5a4',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setLocation(`${response.data.name}, ${response.data.country.name}`)

        }).catch(function (error) {
            console.error(error);
        });
    };


    useEffect(()=>{ 
        getLocationByIP()
    },[])

    const handleUploadImg = (e) => {
        e.preventDefault();
        console.log(e)
        const fileName = e.target.files[0];
        setImg(fileName);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("body", Body);
        formData.append("location", Location);
        if(ImgRef.current.files.length){
            formData.append("image", ImgRef.current.files[0]);
        }
        console.log(formData)
        dispatch(createBlog(formData)).then(data=>{
            if(data && data.success){
                navigate("/blogs");
            }
        });
    }

  return (
    <Row>
        <Col xs lg="8" className="m-auto mt-5 mb-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label>Blog body</Form.Label> */}
                    <Form.Control as="textarea" rows={6} placeholder="Type here..." maxLength={480} onChange={e=>setBody(e.target.value)}/>
                </Form.Group>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Add an image</label>
                    <input 
                    className="form-control" 
                    type="file" 
                    id="formFile" 
                    accept="image/*" 
                    onChange={handleUploadImg}
                    name="img"
                    ref={ImgRef}
                    />
                </div>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>
    </Row>
  );
}

export default CreateBlog;