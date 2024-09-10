import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const url = 'https://backend-7coa.onrender.com';
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Axios interceptor to automatically include cookies with requests
        axios.defaults.withCredentials = true;

        // Check for an existing session by calling the profile route
        const checkUserLoggedIn = async () => {
            try {
                const response = await axios.get(`${url}/auth/profile`);
                setUser(response.data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkUserLoggedIn();
    }, []);

    const login = async (email, password, role) => {
        try {
            const response = await axios.post(`${url}/auth/login`, { email, password, role });
            const { user } = response.data;

            setUser(user);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            setUser(null);
        }
    };

    const signup = async (username, email, password, role) => {
        try {
            const response = await axios.post(`${url}/auth/signup`, { username, email, password, role });
            const { user } = response.data;

            setUser(user);
            navigate('/dashboard');
        } catch (error) {
            console.error('Signup failed:', error.response?.data?.message || error.message);
            setUser(null);
        }
    };

    const logout = async () => {
        try {
            await axios.post(`${url}/auth/logout    `);
            setUser(null);
            navigate('/auth/login');
        } catch (error) {
            console.error('Logout failed:', error.response?.data?.message || error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
