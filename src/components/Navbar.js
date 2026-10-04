import Image from "next/image";
import logo from "../assets/logo.png";
import { useState } from "react";
import Auth from "../components/Auth";

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  return (
    <nav className=" flex flex-1 col-span-1 w-full max-w-260 md:flex-1 m-4 md:px-6 md:py-6">
      <div className="flex w-full h-20 items-center justify-between gap-3">
        <Image
          src={logo}
          alt="Summarist logo"
          className=" max-w-50 h-full p-3 md:w-75"
          width={400}
          height={100}
        />

        <div className="flex flex-wrap items-center justify-center gap-6 text-lg pt-4 md:mt-4 md:gap-6 md:text-2xl">
          <Auth
              isLoginOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />
          <button
            onClick={() => setIsLoginOpen(true)}
            className="cursor-pointer text-black/60 transition-colors duration-200 font-medium hover:text-black"
          >

            Login
          </button>
          <a
            href="#"
            className="cursor-not-allowed text-black/60 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="cursor-not-allowed text-black/60 transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#"
            className="cursor-not-allowed text-black/60 transition-colors duration-200"
          >
            Help
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
