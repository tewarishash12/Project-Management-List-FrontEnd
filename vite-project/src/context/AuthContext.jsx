import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signup = async (email, password, userName) => {
        // Implement your signup logic here
        // For example, call an API to register the user
        // On success, update the user state
        setUser({ email, userName }); // Replace with actual user data from API
    };

    const login = async (email, password) => {
        // Implement your login logic here
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
