
"use client";

import Image from "next/image";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { openAuthModal } from "@/src/redux/authModalSlice";

function Navbar() {
  const dispatch = useDispatch();

  const handleBookClick = () => {
    dispatch(openAuthModal());
  };

  return (
    <nav className=" flex flex-row w-300 justify-end max-w-300 md:flex-1 m-4 md:px-6 md:py-6">
      <div className="flex w-full h-25 ml-10 items-center justify-between gap-3">
        <Image
          src={logo}
          alt="Summarist logo"
          className="h-auto w-52 shrink-0 md:w-60"
          width={495}
          height={114}
        />

        <div className="flex flex-1 gap-2 max-w-300 text-xl font-medium tablet:flex-wrap tablet:justify-end mr-10 tablet:gap-6 tablet:pt-4 md:mt-4 md:gap-6 md:justify-end md:text-2xl">
          
          <button
            onClick={handleBookClick}
            className="shrink-0 cursor-pointer whitespace-nowrap text-brand-darkteal transition-colors duration-200 font-medium hover:text-brand-green"
          >

            Login
          </button>
          <a
            href="#"
            className="hidden cursor-not-allowed text-brand-darkteal transition-colors duration-200 tablet:block"
          >
            About
          </a>
          <a
            href="#"
            className="hidden cursor-not-allowed text-brand-darkteal transition-colors duration-200 tablet:block"
          >
            Contact
          </a>
          <a
            href="#"
            className="hidden cursor-not-allowed text-brand-darkteal transition-colors duration-200 tablet:block"
          >
            Help
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
