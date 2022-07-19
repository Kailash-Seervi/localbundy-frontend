import { axiosInstance } from "../../Axios";
import { returnErrors } from './errAlerts';
import { returnMessages } from "./msgAlerts";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
};

const authReducer = (state = initialState, action)=> {
    switch (action.type) {
        case "USER_LOADING":
        return {
            ...state,
            isLoading: true,
        };
        case "USER_LOADED":
        return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload,
        };
        case "LOGIN_SUCCESS":
        localStorage.setItem('token', action.payload.access);
        return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
        };
        case "AUTH_ERROR":
        case "LOGIN_FAIL":
        case "LOGOUT_SUCCESS":
        case "REGISTER_FAIL":
        localStorage.removeItem('token');
        return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
        };
        default:
        return state;
    }
}



// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: "USER_LOADING" });

  axiosInstance
    .get('/auth/user/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "AUTH_ERROR",
      });
    });
};

// LOGIN USER
export const login = (email, password) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  axiosInstance
    .post('/auth/api/token/', body, config)
    .then((res) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
        console.log(err)
        
        dispatch(returnErrors(err.response.data,err.response.status))
        
      dispatch({
        type: "LOGIN_FAIL",
      });
    });
};

// REGISTER USER
export const register = ({ username, password, email }) => async (dispatch,getState) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, email, password });

  const { data } = await axiosInstance.post('/auth/signup/', body, config);

  if(data.success){
    returnMessages(data,"success");
    dispatch({
        type: "REGISTER_SUCCESS",
      });
  }
  else{
    dispatch({
      type: "REGISTER_FAIL",
    });
  }
    return data
};

// LOGOUT USER
export const logout = () => (dispatch) => {
    dispatch({
        type: "LOGOUT_SUCCESS",
    });
};

export const tokenConfig = (getState) => {

  const token = getState().auth.access;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
};


export default authReducer;