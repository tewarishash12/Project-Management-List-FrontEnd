import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth'; // Adjust the path as needed

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            element={user ? <Element /> : <Navigate to="/auth/login" />}
        />
    );
};

export default PrivateRoute;
