import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const url = "https://backend-7coa.onrender.com";

    const signup = async (username, email, password) => {

        try {
            const res = await fetch(`${url}/auth/signup`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });
            if (!res.ok)
                throw new Error("Failed to Sign Up");

            const data = await res.json();
            console.log("Successfully registered user", data);
            localStorage.setItem("authToken", data.token);
            setUser({ email, username });
            return data;
        } catch (err) {
            console.log("Error Message:", err.message);
        }
    }

    const login = async (email, password) => {
        try {
            const res = await fetch(`http://localhost:3000/auth/login`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            if (!res.ok)
                throw new Error("Login failed");

            const data = await res.json();
            setUser(data.user);
            localStorage.setItem('authToken', data.token);
            console.log(data.token);
        } catch (error) {
            console.log("Error Message:", error.message);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
