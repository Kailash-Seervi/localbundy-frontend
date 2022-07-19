import Axios from 'axios';

// Axios.defaults.baseURL = "https://localbundy-backend.herokuapp.com/";
Axios.defaults.baseURL = "http://localhost:8000/";
	

export const axiosInstance = Axios.create({});
