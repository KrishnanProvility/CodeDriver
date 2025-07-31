import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("session");
    return saved ? JSON.parse(saved) : null;
  });

  function SetUserDetails(response) {
    const tokenParts = response.token.split(".");
    const tokenInfo = JSON.parse(atob(tokenParts[1]));
    const session = {
      token: response.token,
      exp: tokenInfo.exp,
      userEmail: tokenInfo.email,
      tokenInfo,
    };
    localStorage.setItem("session", JSON.stringify(session));
    setUser(session);
  }

  const login = async (email, password) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/ui/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(email + ":" + password),
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (!res.ok) {
        const errorBody = await res
          .json()
          .catch(() => ({ message: "Login failed" }));
        throw new Error(
          errorBody.message || `HTTP error! status: ${res.status}`,
        );
      }

      const response = await res.json();
      SetUserDetails(response);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("session");
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
