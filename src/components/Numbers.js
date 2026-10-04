"use client";

import React from "react";
import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";

function StatCard({ icon, value, label }) {
  return (
    <div className="flex min-h-56 w-70 flex-col items-center justify-center gap-3 rounded-3xl bg-brand-ltBlue px-6 py-8 text-center md:min-h-64">
      <div className="flex h-12 items-center justify-center md:h-14">
        {icon}
      </div>
      <p className="text-2xl font-bold text-black md:text-3xl">{value}</p>
      <p className="max-w-[16rem] text-sm text-brand-darkteal md:text-[16px]">
        {label}
      </p>
    </div>
  );
}

export default function NumbersSection() {
  return (
    <section
      id="numbers"
      className=" container flex w-full col-span-1 bg-white px-4 py-10 md:px-6 md:py-16"
    >
      <div className="mx-auto flex flex-col md:flex-col flex-1 gap-8 md:gap-12">
        <p className="flex text-center text-3xl font-bold items-center justify-center text-brand-darkteal sm:text-3xl md:text-3xl">
          Start growing with Summarist now
        </p>

        <div className="flex items-center justify-center gap-6 md:grid-cols-3 md:flex-row md:gap-8">
          <StatCard
            icon={<BiCrown className="size-12 text-brand-blue md:size-14" />}
            value="3 Million"
            label="Downloads on all platforms"
          />

          <StatCard
            icon={
              <div className="flex items-center gap-1.5 text-brand-blue">
                {[0, 1, 2, 3].map((i) => (
                  <BsStarFill key={i} className="size-6 lg:size-7" />
                ))}
                <BsStarHalf className="size-6 lg:size-7" />
              </div>
            }
            value="4.5 Stars"
            label="Average ratings on iOS and Google Play"
          />

          <StatCard
            icon={<RiLeafLine className="size-12 text-brand-blue md:size-14" />}
            value="97%"
            label="Of Summarist members create a better reading habit"
          />
        </div>
      </div>
    </section>
  );
}
