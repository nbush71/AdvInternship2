"use client";

import React, { useState } from "react";
import Image from "next/image";
import { auth } from "../firebase/init";
import Auth from "./Auth";
import landing from "../assets/landing.png";

export default function LandingSection() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleBookClick = (event) => {
    if (!auth.currentUser) {
      event.preventDefault();
      setIsLoginOpen(true);
    }
  };

  return (
    <section
      id="landing"
      className="w-full bg-white px-4 py-8 md:px-6 md:py-12"
    >
      <div className="mx-auto w-full max-w-300">
        <div className="flex flex-row items-center gap-10 md:flex-row lg:justify-between lg:gap-12">
          <div className="flex w-full flex-1 flex-col gap-4 md:items-start lg:text-left">
            <p className="text-4xl font-bold text-brand-darkteal sm:text-5xl xl:text-6xl">
              Gain more knowledge in less time
            </p>

            <p className="mt-2 max-w-lg text-xl font-light leading-relaxed text-brand-darkteal md:mt-4 md:text-2xl">
              Great summaries for busy people, individuals who barely have time
              to read, and even people who don't like to read.
            </p>

            <button
              onClick={handleBookClick}
              className="mt-4 inline-flex w-full max-w-88 ml-10 items-center justify-center rounded-md bg-brand-green p-4 text-lg font-medium text-brand-darkteal transition-colors hover:brightness-95 md:mt-6 md:text-xl md:max-w-[35rem]"
            >
              Login
            </button>

            <Auth
              isLoginOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />
          </div>

          <div className="flex w-100 h-100 flex-1 justify-center">
            <Image
              src={landing}
              alt="Landing image"
              width={600}
              height={600}
              priority
              className="h-full w-full max-w-100 md:max-w-[42rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
