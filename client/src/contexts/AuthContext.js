import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (for now just checking if token exists)
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, you would verify the token with your backend
      setIsAuthenticated(true);
      // Mock user data
      setUser({
        id: 1,
        name: 'Demo User',
        email: 'demo@example.com'
      });
    }
    setLoading(false);
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        login,
        logout,
        setIsAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};