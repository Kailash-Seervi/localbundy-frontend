import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PageBody from '../layout/PageBody';
const PrivateRoute = () => {
    const auth = useSelector(state=>state.auth);

    return auth.isAuthenticated ? <PageBody /> : <Navigate to="/login" />;
};

export default PrivateRoute;