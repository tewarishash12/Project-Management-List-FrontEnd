import React, { createContext, useContext, useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const url = "https://backend-7coa.onrender.com";

    // Check if user is already logged in on initial render
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            // You might want to verify the token or get the user data from the token here
            setUser({ token });
        }
    }, []);

    const signup = async (username, email, password, role) => {
        try {
            const res = await fetch(`${url}/auth/signup`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ username, email, password, role })
            });
            if (!res.ok) throw new Error("Failed to Sign Up");

            const data = await res.json();
            console.log("Successfully registered user", data);
            localStorage.setItem("authToken", data.token);
            setUser({ email, username });
            return data;
        } catch (err) {
            console.log("Error Message:", err.message);
        }
    }

    const login = async (email, password, role) => {
        try {
            const res = await fetch(`${url}/auth/login`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email, password, role })
            });
            if (!res.ok) throw new Error("Login failed");

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

// PrivateRoute component
// export const PrivateRoute = ({ component: Component, ...rest }) => {
//     const { user } = useAuth();

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 user ? (
//                     <Component {...props} />
//                 ) : (
//                     <Navigate to="/auth/login" />
//                 )
//             }
//         />
//     );
// };
