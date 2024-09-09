import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or screen
    }

    return user ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
