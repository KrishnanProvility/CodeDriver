// src/auth/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('session');
        return saved ? JSON.parse(saved) : null;
    });

    const login = async (email, password) => {
        try {
            const res = await fetch('https://eumbrdevcloud.ddswireless.net/dpapi/ui/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(email + ':' + password),
                },
                body: JSON.stringify({ username:email, password }),
            });

            if (!res.ok) {
                const errorBody = await res.json().catch(() => ({ message: 'Login failed' }));
                throw new Error(errorBody.message || `HTTP error! status: ${res.status}`);
            }

            const body = await res.json();
            
            const tokenParts = body.token.split('.');
            const tokenInfo = JSON.parse(atob(tokenParts[1]));

            const session = {
                token: body.token,
                exp: tokenInfo.exp,
                userId: tokenInfo.UserId,
                permissions: tokenInfo.permissions,
                tokenInfo,
            };

            localStorage.setItem('session', JSON.stringify(session));
            setUser(session);
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('session');
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
