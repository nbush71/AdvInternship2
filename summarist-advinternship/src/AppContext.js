"use client";

import { useState } from "react";

const AuthContext = createContext();

export function AppProvider({ children }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthOpen, setIsAuthOpen }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
