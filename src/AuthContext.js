"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged as subscribeToAuthChanges } from "firebase/auth";
import { auth } from "./firebase/init";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    return subscribeToAuthChanges(auth, setUser);
  }, []);

  const handleBookClick = (event) => {
    if (!auth.currentUser) {
      event.preventDefault();
      setIsLoginOpen(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoginOpen, setIsLoginOpen, handleBookClick }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
