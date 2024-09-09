import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const url = "http://localhost:3000";

    useEffect(() => {
        // Axios interceptor to attach the token to all requests
        axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Check for existing token in localStorage and fetch user data
        const checkUserLoggedIn = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/auth/profile'); // Adjust the URL if needed
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkUserLoggedIn();
    }, []);

    const login = async (email, password, role) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password, role });
            const { token, user } = response.data;

            // Store the token in localStorage
            localStorage.setItem('token', token);

            setUser(user);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            setUser(null);
        }
    };

    const signup = async (username, email, password, role) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/signup', { username, email, password, role });
            const { token, user } = response.data;

            // Store the token in localStorage
            localStorage.setItem('token', token);

            setUser(user);
            navigate('/');
        } catch (error) {
            console.error('Signup failed:', error.response?.data?.message || error.message);
            setUser(null);
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:3000/auth/logout');
            setUser(null);
            localStorage.removeItem('token'); // Remove the token from localStorage
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
