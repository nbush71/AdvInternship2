"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"
import logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiBallPenLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const sizes = [
  { label: 'Aa', className: 'text-xl' },
  { label: 'Aa', className: 'text-2xl' },
  { label: 'Aa', className: 'text-[28px]' },
  { label: 'Aa', className: 'text-[29px]' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const [selected, setSelected] = useState(0);

    return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-brand-smoke z-10 duration-[0.4s] ease-in-out transition-normal opacity-0 pointer-events-none "></div>
      <div className=" translate-x bg-brand-sidebar w-60 min-w-50 fixed top-0 left-0 h-screen z-1000 transition-all duration-0.3s">
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
                aria-current={isActive("/for-you") ? "page" : undefined}
                className={`flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover cursor-pointer ${isActive("/for-you") ? "bg-brand-hover" : ""}`}
              >
                <div className={`${isActive("/for-you") ? "bg-brand-green" : "hover:bg-brand-green"} w-1 h-full mr-4`} />
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
                aria-current={isActive("/Library") ? "page" : undefined}
                className={`flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-pointer ${isActive("/Library") ? "bg-brand-hover" : ""}`}
              >
                <div className={`${isActive("/Library") ? "bg-brand-green" : "hover:bg-brand-green"} w-1 h-full mr-4`} />
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
                aria-current={isActive("/highlights") ? "page" : undefined}
                className={`flex items-center h-14 text-brand-icons transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-not-allowed ${isActive("/highlights") ? "bg-brand-hover" : ""}`}
              >
                <div className={`${isActive("/highlights") ? "bg-brand-green" : "hover:bg-brand-green"} w-1 h-full mr-4`} />
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
                <div className="flex-none w-6 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-not-allowed text-brand-darkteal w-6 h-6 text-[14px]">
                  <IoIosSearch className="w-full h-full" />
                </div>
                <div className="m-0 p-0 text-brand-darkteal cursor-not-allowed ">
                  Search
                </div>
              </div>
            </div>

            {/* Aa Aa Aa Aa - /BookSummary */}
            <div className="flex gap-3 w-50 h-full top-1 mt-8 justify-center text-brand-darkteal cursor-pointer">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelected(index)}
                  className={`flex items-center justify-center cursor-pointer w-8 h-8 border-solid ${selected === index ? "border-b border-b-brand-green" : "border-transparent"}`}
                >
                  <span className={`text-brand-darkteal font-semibold ${size.className}`}>
                    {size.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Links */}
            {/* Link Settings */}
            <div className="flex w-full">
              <Link
                href="/Settings"
                aria-current={isActive("/Settings") ? "page" : undefined}
                className={`flex items-center h-14 w-full mb-2 cursor-pointer transition-colors duration-200 hover:bg-brand-hover ${isActive("/Settings") ? "bg-brand-hover" : ""}`}
              >
                <div className={`${isActive("/Settings") ? "bg-brand-green" : "hover:bg-brand-green"} w-1 h-full mr-4`} />
                <GoGear className="w-6 h-6 mr-2 text-brand-icons" />
                <div className="cursor-pointer text-brand-darkteal">
                  Settings
                </div>
              </Link>
            </div>
            {/* Link Help & Support */}
            <div className="flex w-full">
              <Link
                href="#"
                className="flex items-center h-14 w-full mb-2 cursor-not-allowed transition-colors duration-200 hover:bg-brand-hover"
              >
                <div className="hover:bg-brand-green w-1 h-full mr-4" />
                <IoMdHelpCircleOutline className="w-6 h-6 mr-2 text-brand-icons" />
                <div className="text-brand-darkteal">
                  Help & Support
                </div>
              </Link>
            </div>
            {/* Link Login */}
            <div className="flex w-full">
              <Link
                href="/Auth"
                aria-current={isActive("/Auth") ? "page" : undefined}
                className={`flex items-center h-14 w-full transition-colors duration-200 hover:bg-brand-hover mb-2 cursor-pointer decoration-0 ${isActive("/Auth") ? "bg-brand-hover" : ""}`}
              >
                <div className={`${isActive("/Auth") ? "bg-brand-green" : "hover:bg-brand-green"} w-1 h-full mr-4`} />
                <LuLogOut className="w-6 h-6 mr-2 text-brand-icons" />
                <div className="cursor-pointer text-brand-darkteal">Login</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
