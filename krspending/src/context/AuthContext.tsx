// // src/context/AuthContext.js or AuthContext.tsx (if using TypeScript)
// import { createContext, useContext, useState, useEffect } from 'react';
// import { getToken, setToken as saveToken, logout as clearToken } from '../../auth';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

//   const login = (token) => {
//     saveToken(token);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     clearToken();
//     setIsLoggedIn(false);
//   };

//   useEffect(() => {
//     setIsLoggedIn(!!getToken());
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      setUser(JSON.parse(userData)); // Load user from localStorage
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
