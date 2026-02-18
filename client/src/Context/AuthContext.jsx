import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedRole = localStorage.getItem("role");

    if (storedEmail) {
      setUserEmail(storedEmail);
    }
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const login = (email, userRole) => {
    setUserEmail(email);
    setIsLoggedIn(true);
    setRole(userRole);

    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", userRole);
  };

  const logout = () => {
    setUserEmail(null);
    setIsLoggedIn(false);
    setRole(null);

    localStorage.removeItem("userEmail");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ userEmail, isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
