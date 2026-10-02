"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

// You need to use this api to search for books:
// https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}

function Search() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Handle hamburger menu click
  };

  return (
    <div className="flex flex-col rounded-sm border-b-2 border-brand-searchgray w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-end w-full h-30 px-8">
        <div className="flex items-center gap-6 max-w-85 w-full">
          <div className="flex items-center w-full ">
            <div className="relative gap-2 flex items-center w-75 h-8">
              <input
                className="w-full py-3 outline-0 bg-brand-ltgreen text-brand-slate border-2 border-solid pl-2 border-brand-ltgray rounded-lg placeholder:text-brand-dark/60"
                placeholder="  Search for books"
                type="text"
                name="Search"
              />
              <div className="flex items-center absolute h-full right-2 flex-end">
                <IoIosSearch className="w-7 h-7 bold text-brand-icons" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center cursor-pointer md:flex">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <RxHamburgerMenu className=" w-6 h-6 text-brand-icons" />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
