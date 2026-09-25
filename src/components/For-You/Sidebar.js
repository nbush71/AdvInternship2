"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiBallPenLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

function Sidebar() {
  return (
    <>
      <div className="opacity-0 pointer-events-none fixed top-0 left-0 w-full h-full bg-brand-smoke z-10 duration-0.4s ease-in transition-normal"></div>
      <div className=" hidden  bg-brand-sidebar w-60 min-w-50 fixed top-0 left-0 h-screen z-1000 transition-all duration-0.3s">
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
              <Link
                href="/for-you"
                className="flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover cursor-pointer"
              >
                <div className="hover:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-pointer text-brand-darkteal">
                  <AiOutlineHome className="w-6 h-6 text-brand-icons" />
                </div>
                <div className="m-0 p-0 text-brand-darkteal cursor-pointer ">
                  For you
                </div>
              </Link>
            </div>

            {/* Link / */}
            <div className="flex flex-col gap-3">
              <Link
                href="/Library"
                className="flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-pointer"
              >
                <div className="hover:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-pointer text-brand-darkteal w-6 h-6 text-[14px]">
                  <BsBookmark className="w-6 h-6 text-brand-icons" />
                </div>
                <div className="m-0 p-0 text-brand-darkteal cursor-pointer ">
                  My library
                </div>
              </Link>
            </div>
            {/* Link /highlights */}
            <div className="flex flex-col gap-3">
              <Link
                href="/highlights"
                className="flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-not-allowed"
              >
                <div className="hover:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-not-allowed text-brand-darkteal w-6 h-6 text-[14px]">
                  <RiBallPenLine className="w-full h-full" />
                </div>
                <div className="m-0 p-0 text-brand-darkteal cursor-not-allowed ">
                  Highlights
                </div>
              </Link>
            </div>

            {/* Link Search */}
            <div className="flex grow shrink basis-0 mt-1">
              <div className="flex items-center h-14 w-full text-brand-icons transition-colors duration-200 hover:bg-brand-hover cursor-not-allowed">
                <div className="flex-none w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-not-allowed text-brand-darkteal w-6 h-6 text-[14px]">
                  <IoIosSearch  className="w-full h-full"/>

                </div>
                <div className="m-0 p-0 text-brand-darkteal cursor-not-allowed ">
                  Search
                </div>
              </div>
              
            </div>
            {/* Aa Aa Aa Aa - Visible when on Audio player */}
            <div className="nth-last-2[mb-0] flex gap-3 w-50 h-full top-1 mt-8 justify-center text-brand-darkteal cursor-pointer">
              <div className="flex items-center justify-center cursor-pointer w-8 h-8 active:border-b-[3px] active:border-solid active:border-b-brand-green">
                <div className="w-full h-full text-brand-darkteal text-xl font-semibold font-serif-[geometric]">Aa</div>
              </div>
              <div className="flex items-center justify-center cursor-pointer w-8 h-8 active:border-b-[3px] active:border-solid active:border-b-brand-green">
                <div className="w-full h-full text-brand-darkteal text-2xl font-semibold">Aa</div>
              </div>
              <div className="flex items-center justify-center cursor-pointer w-8 h-8 active:border-b-[3px] active:border-solid active:border-b-brand-green">
                <div className="w-full h-full  text-brand-darkteal text-[28px] font-semibold">Aa</div>
              </div>
              <div className="flex items-center justify-center cursor-pointer w-8 h-8 active:border-b-[3px] active:border-solid active:border-b-brand-green">
                <div className="w-full h-full text-brand-darkteal text-[29px] font-semibold ">Aa</div>
              </div>
            </div>
            

            {/* Bottom Links */}
            {/* Link Settings */}
            <div className="flex items-center gap-4 justify-between w-full ml-4 mr-2">
              <Link
                href="/Settings"
                className="flex items-center gap-3 w-full h-14 text-brand-darkteal mb-2 cursor-pointer transition-colors duration-200 hover:bg-brand-hover on-0"
              >
                <GoGear className="w-6 h-6 text-brand-icons" />
                <div className="cursor-pointer text-brand-darkteal">
                  Settings
                </div>
              </Link>
            </div>
            {/* Link Help & Support */}
            <div className="flex items-center gap-4 justify-between w-full ml-4 mr-2">
              <Link
                href="#"
                className="flex items-center gap-3 h-14 text-brand-darkteal mb-2 cursor-not-allowed"
              >
                <IoMdHelpCircleOutline className="w-6 h-6 text-brand-icons" />
                <div className="cursor-not-allowed text-brand-darkteal">
                  Help & Support
                </div>
              </Link>
            </div>
            {/* Link Login */}
            <div className="flex items-center gap-4 justify-between w-full ml-4 mr-2">
              <Link
                href="/Login"
                className="flex items-center gap-3 w-full h-14 text-brand-darkteal transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-pointer decoration-0 "
              >
                <LuLogOut />
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
