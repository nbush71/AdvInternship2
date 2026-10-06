"use client";

import { createContext, useContext, useState } from "react";
import { useAuth } from "@/src/AuthContext";

const LibraryContext = createContext(null);

export function LibraryProvider({ children }) {
  const { user } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [savedBooks, setSavedBooks] = useState([]);
  const [finishedBooks, setFinishedBooks] = useState([]);

  const handleBookClick = (event) => {
    if (!user) {
      event.preventDefault();
      setIsLoginOpen(true);
    }
  };

  const addSavedBook = (book) => {
    setSavedBooks((currentBooks) =>
      currentBooks.some((savedBook) => savedBook.id === book.id)
        ? currentBooks
        : [...currentBooks, book],
    );
  };

  const markFinished = (book) => {
    setSavedBooks((currentBooks) =>
      currentBooks.filter((savedBook) => savedBook.id !== book.id),
    );
    setFinishedBooks((currentBooks) =>
      currentBooks.some((finishedBook) => finishedBook.id === book.id)
        ? currentBooks
        : [...currentBooks, book],
    );
  };

  return (
    <LibraryContext.Provider
      value={{
        user,
        isLoginOpen,
        setIsLoginOpen,
        savedBooks,
        finishedBooks,
        addSavedBook,
        markFinished,
        handleBookClick,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary must be used within a LibraryProvider");
  }
  return context;
}
