import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import React, { useState, useEffect } from "react";

// Defined OUTSIDE the parent so it isn't re-created (and its timer reset) on every render.
function RotatingTextList({ items, align = "left" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div
      className={`flex flex-col gap-1 text-xl font-medium md:text-xl ${
        align === "right" ? "md:text-right" : "md:text-left"
      }`}
    >
      {items.map((item, index) => (
        <div
          key={item}
          className={`py-1 transition-colors duration-500 ${
            index === activeIndex ? "text-brand-green" : "text-brand-slate"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function Stat({ value, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 shrink-0 text-sm font-bold text-brand-blue">
        {value}
      </div>
      <div className="text-[16px] leading-snug text-brand-slate">{children}</div>
    </div>
  );
}

function StatsBox({ children }) {
  return (
    <div className="flex flex-col gap-5 bg-brand-ltgreen p-8 md:p-10">
      {children}
    </div>
  );
}

export default function FeaturesSection() {
  const listOne = [
    "Enhance your knowledge",
    "Achieve greater success",
    "Improve your health",
    "Develop better parenting skills",
    "Increase happiness",
    "Be the best version of yourself!",
  ];

  const listTwo = [
    "Expand your learning",
    "Accomplish your goals",
    "Strengthen your vitality",
    "Become a better caregiver",
    "Improve your mood",
    "Maximize your abilities",
  ];

  const features = [
    {
      Icon: AiFillFileText,
      title: "Read or listen",
      text: "Save time by getting the core ideas from the best books.",
    },
    {
      Icon: AiFillBulb,
      title: "Find your next read",
      text: "Explore book lists and personalized recommendations.",
    },
    {
      Icon: AiFillAudio,
      title: "Briefcasts",
      text: "Gain valuable insights from briefcasts.",
    },
  ];

  return (
    <section id="features" className="w-full bg-white px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-14">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-brand-darkteal md:text-3xl">
          Understand books in few minutes
        </h2>

        {/* Three features */}
        <div className=" mx-auto flex w-full h-full items-center justify-center gap-8 md:flex-row lg:col-span-3">
          {features.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              id={`features${i + 1}`}
              className="flex flex-col items-center gap-2 text-center"
            >
              <Icon className="size-12 text-brand-darkteal md:size-14" />
              <div className="text-[16px] font-bold text-brand-darkteal">{title}</div>
              <div className="max-w-50 text-[16px] text-brand-slate">{text}</div>
            </div>
          ))}
        </div>

        {/* Row 1: list left, stats right */}
        <div className="flex items-center justify-between gap-8 md:flex-row">
          <div className="w-121 md:w-1/2">
            <RotatingTextList items={listOne} align="left" />
          </div>

          <div className="w-121 md:w-1/2" id="features5">
            <StatsBox>
              <Stat value="93%">
                of Summarist members{" "}
                <b className="font-semibold">significantly increase</b> reading
                frequency.
              </Stat>
              <Stat value="96%">
                of Summarist members{" "}
                <b className="font-semibold">establish better</b> habits.
              </Stat>
              <Stat value="90%">
                have made <b className="font-semibold">significant positive</b>{" "}
                change to their lives.
              </Stat>
            </StatsBox>
          </div>
        </div>

        {/* Row 2: stats left, list right */}
        <div
          className=" flex w-full items-center justify-center gap-8 md:w-full"
          id="features6"
        >
          <div className="order-1 w-full md:order-1 md:w-full">
            <StatsBox>
              <Stat value="91%">
                of Summarist members{" "}
                <b className="font-semibold">report feeling more productive</b>{" "}
                after incorporating the service into their daily routine.
              </Stat>
              <Stat value="94%">
                of Summarist members have{" "}
                <b className="font-semibold">noticed an improvement</b> in their
                overall comprehension and retention of information.
              </Stat>
              <Stat value="88%">
                of Summarist members{" "}
                <b className="font-semibold">feel more informed</b> about
                current events and industry trends since using the platform.
              </Stat>
            </StatsBox>
          </div>

          <div className="order-2 w-full text-right md:order-2 md:w-full">
            <RotatingTextList items={listTwo} />
          </div>
        </div>
      </div>
    </section>
  );
}
