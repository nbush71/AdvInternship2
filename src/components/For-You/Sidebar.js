"use client"

import Image from "next/image"; 
import Link from "next/link";
import logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";


function Sidebar() {
  return (
    //Add Hidden overlay
    <>
      <div className="opacity-0 pointer-events-none fixed t-0 l-0 w-full h-full bg-brand-smoke z-10 duration-0.4s ease-in hidden transition-normal"></div>
      <div className="hidden bg-brand-sidebar w-60 min-w-50 fixed t-0 l-t h-screen z-1000 transition-all duration-0.3s">
      <div className="grid grid-cols-1 bg-brand-sidebar w-60 min-w-50 h-screen z-1000 transition-all p-4">
        {/* Logo */}
          <div className="flex items-center justify-center h-15 pt-4  mx-auto mt-4">
            <Image
            src={logo}
            alt="Summarist logo"
            className="w-auto h-14 px-2 py-2"
            width={495}
            height={114}
            priority
          />
          </div>
          {/* Links Area */}
          <div className="flex flex-col justify-between h-[calc(100vh-100px)] pb-4 text-lg mt-4">
            {/* Top Links */}
            <div className="flex flex-col gap-3">
              {/* Link /for-you */}
              <Link href="/for-you" className="flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover cursor-pointer">
              <div className="hover:bg-brand-green w-1.5 h-full mr-4" /> 
              <div className="flex items-center justify-center mr-2 cursor-pointer text-brand-darkteal">
                  <AiOutlineHome className="w-6 h-6 text-brand-icons" />
                </div> 
                <div className="m-0 p-0 text-brand-darkteal cursor-pointer ">For you</div>
              </Link>              
            </div>
            
            {/* Link /library */}
            <div className="flex flex-col gap-3">
              <Link href="/library" className="flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-pointer">
                <div className="hover:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-pointer text-brand-darkteal w-6 h-6 text-[14px]">
                  <BsBookmark className="w-6 h-6 text-brand-icons" />
                </div> 
                <div className="m-0 p-0 text-brand-darkteal cursor-pointer ">My library</div>
              </Link>              
            </div>
            {/* Link /highlights */}
            <div className="flex flex-col gap-3">
              <Link href="/highlights" className="flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-pointer">
                <div className="hover:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-not-allowed text-brand-darkteal w-6 h-6 text-[14px]">
                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0"  viewBox="0 0 24 24" height="1em" width="1em" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z" ></path><path d="M17.849 11.808l-.707-.707-9.9 9.9H3v-4.243L14.313 5.444l5.657 5.657a1 1 0 0 1 0 1.414l-7.07 7.071-1.415-1.414 6.364-6.364zm-2.121-2.121l-1.415-1.414L5 17.586v1.415h1.414l9.314-9.314zm2.828-7.071l2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.273 15.728 4.03l1.414-1.414a1 1 0 0 1 1.414 0z"></path></g></svg>
                </div> 
                <div className="m-0 p-0 text-brand-darkteal cursor-not-allowed ">Highlights</div>
              </Link>              
            </div>

          {/* Link Search */}
            <div className="flex grow shrink basis-0 mt-1">
              <div className="flex items-center h-14 w-full text-brand-icons transition-colors duration-200 hover:bg-brand-hover cursor-not-allowed">
                <div className="flex-none w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-not-allowed text-brand-darkteal w-6 h-6 text-[14px]">
                  <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                </div> 
                <div className="m-0 p-0 text-brand-darkteal cursor-not-allowed ">Search</div>
              </div>              
            </div>

            {/* Bottom Links */}
            {/* Link Settings */}
            <div className="flex items-center gap-4 justify-between w-full ml-4 mr-2" >
              <Link href="/settings" className="flex items-center gap-3 w-full h-14 text-brand-darkteal mb-2 cursor-pointer transition-colors duration-200 hover:bg-brand-hover on-0">
              <GoGear className="w-6 h-6 text-brand-icons"/>
              <div className="cursor-pointer text-brand-darkteal">Settings</div>
              </Link>
            </div>
            {/* Link Help & Support */}
            <div className="flex items-center gap-4 justify-between w-full ml-4 mr-2">
              <Link href="#" className="flex items-center gap-3 h-14 text-brand-darkteal mb-2 cursor-not-allowed">
              <IoMdHelpCircleOutline className="w-6 h-6 text-brand-icons"/>
              <div className="cursor-not-allowed text-brand-darkteal">Help & Support</div>
              </Link>
            </div>
            {/* Link Login */}
            <div className="flex items-center gap-4 justify-between w-full ml-4 mr-2">
              <Link href="/settings" className="flex items-center gap-3 w-full h-14 text-brand-darkteal transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-pointer decoration-0 ">
              <svg className="w-6 h-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <div className="cursor-pointer text-brand-darkteal">Login</div>
              </Link>
            </div>
          </div>          
      </div>
      </div>
    </>
  );
}

export default Sidebar;