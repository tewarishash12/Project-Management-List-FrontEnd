import { useState, useContext, createContext } from 'react';

// Create an AuthContext to provide authentication state
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State to manage user information

    const login = (email, password) => {
        // Simulate a login process (replace with real authentication logic)
        setUser({ email });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use authentication context
export const useAuth = () => {
    return useContext(AuthContext);
};
