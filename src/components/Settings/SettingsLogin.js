"use client";

import Image from "next/image";
import { useState } from "react";
import Login from "../../assets/login.png";
import { auth } from "../../firebase/init";
import Auth from "../Auth";

export default function SettingsLogin() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  const handleBookClick = (event) => {
    if (!auth.currentUser) {
      event.preventDefault();
      setIsLoginOpen(true);
    }
  };

  return (
    <div className="flex p-8 w-full max-w-267.5 h-full">
      <div className=" w-full mr-auto ml-auto pr-6 pl-6">
        <div className=" flex flex-col ml-40 text-brand-darkteal w-full text-[32px] font-bold mb-8 text-left border-b-2 border-b-brand-linegray border-solid p-4">
          Settings
        </div>
        <div className="max-w-115 flex flex-col items-center mr-auto ml-auto">
          <Image
            alt="login"
            src={Login}
            className="w-full h-full async loading-lazy bg-transparent aspect-auto"
          />
          <div className="text-2xl font-bold text-brand-darkteal text-center mb-4">
            Log in to your account to see your details.
          </div>
          <Auth
            isLoginOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
          />
          <button
            type="button"
            onClick={handleBookClick}
            className="inline-flex w-full max-w-160 items-center justify-center rounded-md bg-brand-green px-6 py-4 text-lg font-medium text-brand-darkteal shadow-sm transition hover:brightness-95 md:text-xl " href="/SubSettings"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
