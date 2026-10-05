"use client";

import { createContext, useContext, useState } from "react";
import { auth } from 

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleBookClick = (event) => {
    if (!auth.currentUser) {
      // open login modal
      event.preventDefault();
      setIsLoginOpen(true);
  }
};

  return (
    <AuthContext.Provider value={{ handleBookClick }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
