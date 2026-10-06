"use client";

import React, { useState } from "react";
import Image from "next/image";
import { auth } from "../firebase/init";
import landing from "../assets/landing.png";
import { useDispatch } from "react-redux";
import { openAuthModal } from "@/src/redux/authModalSlice";

export default function LandingSection() {
  const dispatch = useDispatch();

  const handleBookClick = () => {
    if (!auth.currentUser) {
      dispatch(openAuthModal());
      return;
    }
  };

  return (
    <section
      id="landing"
      className="w-full bg-white px-4 py-8 md:px-6 md:py-12"
    >
      <div className="mx-auto w-full max-w-300">
        <div className="flex flex-col items-center gap-10 tablet:flex-row tablet:justify-between tablet:gap-12">
          <div className="flex w-full flex-1 flex-col items-center gap-4 text-center tablet:items-start tablet:text-left">
            <p className="text-4xl font-bold text-brand-darkteal tablet:text-5xl desktop:text-6xl">
              Gain more knowledge in less time
            </p>

            <p className="mt-2 max-w-lg text-xl font-light leading-relaxed text-brand-darkteal tablet:mt-4 tablet:text-2xl">
              Great summaries for busy people, individuals who barely have time
              to read, and even people who don't like to read.
            </p>

            <button
              onClick={handleBookClick}
              className="mt-4 inline-flex w-full max-w-88 items-center justify-center rounded-md bg-brand-green p-4 text-lg font-medium text-brand-darkteal transition-colors hover:brightness-95 tablet:mt-6 tablet:max-w-140 tablet:text-xl"
            >
              Login
            </button>
          </div>

          <div className="hidden h-100 w-100 flex-1 justify-center tablet:flex">
            <Image
              src={landing}
              alt="Landing image"
              width={600}
              height={600}
              priority
              className="h-full w-full max-w-100 tablet:max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
