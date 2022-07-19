import { axiosInstance } from "../../Axios";
import { tokenConfig } from "./auth";
import { returnErrors } from "./errAlerts";
import { returnMessages } from "./msgAlerts";

export const getBlogs = (page) => async (dispatch, getState) => {
    try {
        const link = page?`/microblog/list/?page=${page}`:`/microblog/list/`
        const { data } = await axiosInstance.get(link, tokenConfig(getState));
        console.log(data)
        return data
        
    } catch (error) {
        console.error("Get blog error", error)
    }
};

export const getBlog = (id) => async (dispatch, getState) =>{
    try {
        const { data } = await axiosInstance.get(`/microblog/get/${id}/`, tokenConfig(getState));
        console.log(data)
        return data
        
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
    }
}

export const likeBlog = (id) => async (dispatch, getState) =>{
    try {
        const { data } = await axiosInstance.get(`/microblog/like/${id}/`, tokenConfig(getState));
        console.log(data)
        if(data.success){
            dispatch(returnMessages(data,"success"))
        }
        return data
        
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
    }
}

export const loveBlog = (id) => async (dispatch, getState) =>{
    try {
        const { data } = await axiosInstance.get(`/microblog/love/${id}/`, tokenConfig(getState));
        console.log(data)
        if(data.success){
            dispatch(returnMessages(data,"success"))
        }
        return data
        
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
    }
}

export const createBlog = (formData) => async (dispatch, getState) =>{
    try {
        const { data } = await axiosInstance.post(`/microblog/create/`, formData, tokenConfig(getState));
        console.log(data)
        if(data.success){
            dispatch(returnMessages(data,"success"))
        }
        return data
        
    } catch (error) {
        console.error("Create blog error", error)
        dispatch(returnErrors(error.response.data, error.response.status))
    }
}