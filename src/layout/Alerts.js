import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearErrors } from '../store/reducers/errAlerts';
import { clearMessages } from '../store/reducers/msgAlerts';
import Alert from "react-bootstrap/Alert";

const Alerts = () => {

    const dispatch = useDispatch();

    const error = useSelector(state=>state.error);
    const message = useSelector(state=>state.message);
    const [alertErrMsg, setErrAlertMsg] = useState('');
    const [alertMsg, setAlertMsg] = useState('');

    const handleDismissErr = ()=>{
        setErrAlertMsg('');
        dispatch(clearErrors());
    }

    const handleDismissMsg = ()=>{
        setAlertMsg('');
        dispatch(clearMessages());
    }

    useEffect(()=>{
        if (error.msg.name) setErrAlertMsg(`Name: ${error.msg.name}`);
        if (typeof error.msg ==='object' && "success" in error.msg) setErrAlertMsg(`Error: ${error.msg.message}`);
        if (error.msg.email) setErrAlertMsg(`Email: ${error.msg.email}`);
        if (error.msg.message) setErrAlertMsg(`Message: ${error.msg.message}`);
        if (error.msg.non_field_errors) setErrAlertMsg(error.msg.non_field_errors);
        if (error.msg.username) setErrAlertMsg(error.msg.username);
        if(typeof error.msg === 'string') setErrAlertMsg(error.msg);
    },[error.msg, error.status])

    useEffect(()=>{
        if(typeof message.msg ==='object' && "success" in message.msg) setAlertMsg(`${message.msg.message}`);
        if(typeof message.msg === 'string') setAlertMsg(message.msg);
    },[message.msg, message.status])

    return (
        <Fragment>
            {alertErrMsg?
            <Alert key={"danger"} variant={"danger"} onClose={handleDismissErr} dismissible>
                {alertErrMsg}
            </Alert>:false}
            {alertMsg?<Alert key={"info"} variant={"info"} onClose={handleDismissMsg} dismissible>
                {alertMsg}
            </Alert>:false}
        </Fragment>
    );
}

export default Alerts