import React from "react";
import Search from "../../src/components/For-You/Search";
import SelectedBook from "../../src/components/For-You/SelectedBook";

 
export default function ForYou() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
      <Search />
      <SelectedBook />
    </div>
  );
}