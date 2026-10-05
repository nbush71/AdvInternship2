"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import logo from "../../assets/logo.png";
import { auth } from "../../firebase/init";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiBallPenLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useSidebar } from "../For-You/SidebarContext";


const sizes = [
  { label: "Aa", fontSize: 20, className: "text-xl" },
  { label: "Aa", fontSize: 24, className: "text-2xl" },
  { label: "Aa", fontSize: 28, className: "text-[28px]" },
  { label: "Aa", fontSize: 29, className: "text-[29px]" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isSidebarOpen, setIsSidebarOpen, fontSize, setFontSize } = useSidebar();

  const isActive = (href) => pathname === href || pathname.startsWith(href);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-10  transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-20 h-screen w-60 min-w-50 bg-brand-sidebar transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="grid h-screen w-60 min-w-50 grid-cols-1 bg-brand-sidebar p-4 transition-all">
          <div className="mx-auto mt-4 flex h-15 items-center justify-center pt-4">
            <Image
              src={logo}
              alt="Summarist logo"
              className="h-14 w-auto px-2 py-2"
              width={495}
              height={114}
              priority
            />
          </div>

          <div className="mt-4 flex h-[calc(100vh-100px)] flex-col justify-between pb-4 text-lg">
            <div className="flex flex-col gap-3">
              <Link
                href="/for-you"
                aria-current={isActive("/for-you") ? "page" : undefined}
                className={`flex h-14 items-center text-brand-icons transition-colors duration-200 hover:bg-brand-hover ${
                  isActive("/for-you") ? "bg-brand-hover" : ""
                }`}
              >
                <div className={`${isActive("/for-you") ? "bg-brand-green" : "hover:bg-brand-green"} mr-4 h-full w-1`} />
                <div className="mr-2 flex items-center justify-center text-brand-darkteal">
                  <AiOutlineHome className="h-6 w-6 text-brand-icons" />
                </div>
                <div className="m-0 cursor-pointer p-0 text-brand-darkteal">For you</div>
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/Library"
                aria-current={isActive("/Library") ? "page" : undefined}
                className={`mb-2 flex h-14 items-center text-brand-icons transition-colors duration-200 hover:bg-brand-hover ${
                  isActive("/Library") ? "bg-brand-hover" : ""
                }`}
              >
                <div className={`${isActive("/Library") ? "bg-brand-green" : "hover:bg-brand-green"} mr-4 h-full w-1`} />
                <div className="mr-2 flex h-6 w-6 items-center justify-center text-[14px] text-brand-darkteal">
                  <BsBookmark className="h-6 w-6 text-brand-icons" />
                </div>
                <div className="m-0 cursor-pointer p-0 text-brand-darkteal">My library</div>
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/highlights"
                aria-current={isActive("/highlights") ? "page" : undefined}
                className={`mb-2 flex h-14 items-center text-brand-icons transition-colors duration-200 hover:bg-brand-hover ${
                  isActive("/highlights") ? "bg-brand-hover" : ""
                } cursor-not-allowed`}
              >
                <div className={`${isActive("/highlights") ? "bg-brand-green" : "hover:bg-brand-green"} mr-4 h-full w-1`} />
                <div className="mr-2 flex h-6 w-6 cursor-not-allowed items-center justify-center text-[14px] text-brand-darkteal">
                  <RiBallPenLine className="h-full w-full" />
                </div>
                <div className="m-0 cursor-not-allowed p-0 text-brand-darkteal">Highlights</div>
              </Link>
            </div>

            <div className="mt-1 flex shrink grow basis-0">
              <div className="flex h-14 w-full cursor-not-allowed items-center text-brand-icons transition-colors duration-200 hover:bg-brand-hover">
                <div className="mr-4 h-full w-6 flex-none" />
                <div className="mr-2 flex h-6 w-6 cursor-not-allowed items-center justify-center text-[14px] text-brand-darkteal">
                  <IoIosSearch className="h-full w-full" />
                </div>
                <div className="m-0 cursor-not-allowed p-0 text-brand-darkteal">Search</div>
              </div>
            </div>

            <div className="mt-8 flex h-full w-50 justify-center gap-3 top-1 cursor-pointer text-brand-darkteal">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setFontSize(size.fontSize)}
                  aria-label={`Set summary font size to ${size.fontSize} pixels`}
                  aria-pressed={fontSize === size.fontSize}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center border-solid ${
                    fontSize === size.fontSize ? "border-b border-b-brand-green" : "border-transparent"
                  }`}
                >
                  <span className={`font-semibold text-brand-darkteal ${size.className}`}>
                    {size.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex w-full">
              <Link
                href="/Settings"
                aria-current={isActive("/Settings") ? "page" : undefined}
                className={`mb-2 flex h-14 w-full items-center transition-colors duration-200 hover:bg-brand-hover ${
                  isActive("/Settings") ? "bg-brand-hover" : ""
                }`}
              >
                <div className={`${isActive("/Settings") ? "bg-brand-green" : "hover:bg-brand-green"} mr-4 h-full w-1`} />
                <GoGear className="mr-2 h-6 w-6 text-brand-icons" />
                <div className="cursor-pointer text-brand-darkteal">Settings</div>
              </Link>
            </div>

            <div className="flex w-full">
              <Link
                href="#"
                className="mb-2 flex h-14 w-full cursor-not-allowed items-center transition-colors duration-200 hover:bg-brand-hover"
              >
                <div className="mr-4 h-full w-1 hover:bg-brand-green" />
                <IoMdHelpCircleOutline className="mr-2 h-6 w-6 text-brand-icons" />
                <div className="text-brand-darkteal">Help & Support</div>
              </Link>
            </div>

            <div className="flex w-full">
              <button
                type="button"
                onClick={handleLogout}
                className="mb-2 flex h-14 w-full items-center decoration-0 transition-colors duration-200 hover:bg-brand-hover"
              >
                <div className="mr-4 h-full w-1 hover:bg-brand-green" />
                <LuLogOut className="mr-2 h-6 w-6 text-brand-icons" />
                <div className="cursor-pointer text-brand-darkteal">Logout</div>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
