import React, { createContext, useState, useEffect, useContext } from "react";
import { loginUser, registerUser, setAuthToken } from "../services/api";

export const AuthContext = createContext ();

export const useAuth = () => useContext(AuthContext);

const AuthProvider =({ children }) => {
    const [authToken, setAuthTokenState] = useState (null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            authToken(token);
            setAuthToken(token);
            setAuthTokenState(token);
        }
    }, []);

    const login = async (username, password, role) => {
        const { token } = await loginUser (username, password, role);
        localStorage.setItem('token', token);
        setAuthToken(token);
        setAuthTokenState(token);
    
    };
    
    const register = async (username, password, role) => {
        try {
            const {token} = await registerUser (username, password, role);
            localStorage.setItem("token", token);
            setAuthToken(token);
            setAuthTokenState(token);

        } catch (error) {
            console.error("Errore nella registrazione:", error);
        }
    }

    const logout =() => {
        localStorage.removeItem('token');
        setAuthToken(null);
        setAuthTokenState(null);
    };

    const isLoggedIn = !!authToken;
    return (
        <AuthContext.Provider value = {{ authToken, isLoggedIn, login, logout, register}}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
    
    