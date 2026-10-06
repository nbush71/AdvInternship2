
"use client";

import Image from "next/image";
import logo from "../assets/logo.png";
import { auth } from "../firebase/init";
import { useDispatch } from "react-redux";
import { openAuthModal } from "@/src/redux/authModalSlice";

function Navbar() {
  const dispatch = useDispatch();

  const handleBookClick = (event) => {
    if (!auth.currentUser) {
      event.preventDefault();
      dispatch(openAuthModal());
      return;
    }
  };

  return (
    <nav className=" flex flex-1 col-span-2 w-full max-w-260 md:flex-1 m-4 md:px-6 md:py-6">
      <div className="flex w-full h-20 items-center justify-between gap-3">
        <Image
          src={logo}
          alt="Summarist logo"
          className="h-full w-36 max-w-[60%] shrink p-3 tablet:max-w-50 tablet:w-50 md:w-75"
          width={400}
          height={100}
        />

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 text-lg tablet:flex-wrap tablet:justify-center tablet:gap-6 tablet:pt-4 md:mt-4 md:gap-6 md:text-2xl">
          
          <button
            onClick={handleBookClick}
            className="shrink-0 cursor-pointer whitespace-nowrap text-black/60 transition-colors duration-200 font-medium hover:text-black"
          >

            Login
          </button>
          <a
            href="#"
            className="hidden cursor-not-allowed text-black/60 transition-colors duration-200 tablet:block"
          >
            About
          </a>
          <a
            href="#"
            className="hidden cursor-not-allowed text-black/60 transition-colors duration-200 tablet:block"
          >
            Contact
          </a>
          <a
            href="#"
            className="hidden cursor-not-allowed text-black/60 transition-colors duration-200 tablet:block"
          >
            Help
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
