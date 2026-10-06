"use client";

import Pricing from "../../assets/pricing-top.png";
import Image from "next/image";
import { Fragment, useState } from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "../Footer";
import { auth } from "@/src/firebase/init";
import Auth from "../Auth";
import { useRouter } from "next/navigation";

function ChoosePlan() {
  const [selectedPlan, setSelectedPlan] = useState("yearly");
  const [activeId, setActiveId] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();

  const handlePlanClick = () => {
    if (auth.currentUser) {
      router.push("/for-you");
      return;
    }

    setIsLoginOpen(true);
  };

  const toggleFAQ = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  const features = [
    {
      Icon: IoDocumentTextSharp,
      bold: "Key ideas in a few min",
      rest: "with many books to read",
    },
    {
      Icon: RiPlantFill,
      bold: "3 million",
      rest: "people growing with Summarist everyday",
    },
    {
      Icon: FaHandshake,
      bold: "Precise recommendations",
      rest: "collections curated by experts",
    },
  ];

  const plans = [
    { id: "yearly", name: "Premium Plus Yearly", price: "$99.99/year" },
    { id: "monthly", name: "Premium Monthly", price: "$9.99/month" },

  ];

  const faqs = [
    {
      q: "How does Premium billing work?",
      a: "Premium is billed monthly at $9.99, and Premium Plus is billed yearly at $99.99.",
    },
    {
      q: "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
      a: "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
    },
    {
      q: "What's included in the Premium plan?",
      a: "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.",
    },
    {
      q: "Can I cancel my subscription?",
      a: "You can manage your subscription from your account settings.",
    },
  ];

  return (
    <>
      <div className="relative col-span-3 md:col-span-3 h-full overflow-hidden bg-brand-darkteal rounded-b-[16rem] pt-10 text-center max-h-156 md:max-w-full flex-1 flex-col justify-center-safe">
        <div className="absolute inset-x-0 bottom-0 top-0 left-0 -z-10 bg-brand-darkteal rounded-b-[50%_12rem]"></div>
        <div className="w-full">
          <div className=" text-center w-full pt-12 mb-1 ">
            <div className="ml-auto mr-auto text-white pl-6 pr-6">
              <div className="text-5xl text-wite font-bold mb-10">
                Get unlimited access to many amazing <br />
                books to read
              </div>
              <div className="text-12 font-bold mb-10">
                <div className="text-white text-[20px] mb-8">
                  Turn ordinary moments into amazing learning opportunities
                </div>
                <div className="container max-w-90 justify-center ml-auto mr-auto ">
                  <div className="relative mx-auto w-90 h-85 max-w-full max-h-full bg-white rounded-t-[250px] shadow-lg flex justify-center overflow-hidden ">
                    <Image
                      src={Pricing}
                      alt="pricing-top"
                      className="w-full h-full bg-transparent rounded-4xl z-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Features */}
      <div className="container-size justify-center items-center col-span-3 md:col-span-3 w-full py-10">
        {features.map(({ Icon, bold, rest }) => (
          <div key={bold} className="flex flex-col items-center text-center w-full max-w-sm mx-auto px-6">
            <Icon className="w-20 h-20 fill-brand-darkteal mb-3" />
            <p className="text-brand-subtitle text-lg"><b>{bold}</b> {rest}</p>
          </div>
        ))}
      </div>

          {/* Pricing Plans */}
      <div className="container-size col-span-1 md:col-span-3 items-center justify-center gap-4">
        {plans.map(({ id, name, price }, i) => {
        const selected = selectedPlan === id;
        return (
          <Fragment key={id}>
            {i > 0 && (
              <div className="flex items-center gap-2 w-full max-w-60 mx-auto my-6 text-[14px] text-brand-slate before:h-px before:flex-1 before:bg-brand-ltgray before:content-[''] after:h-px after:flex-1 after:bg-brand-ltgray after:content-['']">
                or
              </div>
            )}

            <div
              role="radiogroup"
              aria-checked={selected}
              tabIndex={0}
              onClick={() => setSelectedPlan(id)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedPlan(id)}
              className={`flex items-start gap-6 w-full max-w-170 mx-auto p-6 rounded-sm cursor-pointer bg-brand-graybutton border-4 border-solid ${
                selected ? "border-brand-green" : "border-brand-ltgray"
              }`}
            >
              <div className="w-6 h-6 shrink-0 rounded-full border border-solid border-black flex items-center justify-center">
                {selected && <div className="w-3 h-3 rounded-full bg-black" />}
              </div>
              <div>
                <div className="text-lg font-semibold text-brand-darkteal mb-2">{name}</div>
                <div className="text-2xl font-bold text-brand-darkteal mb-2">{price}</div>
                {id === "monthly" && (
                  <div className="text-[14px] text-brand-slate">
                    No trial included
                  </div>
                )}
                {id === "yearly" && (
                  <div className="text-[14px] text-brand-slate">
                    7-day free trial included
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>          

      <div className="container-size grid col-span-3 md:col-span-3 items-center justify-center gap-4 bg-white sticky bottom-0 z-1 pt-8 pr-0 pl-0 pb-8">
        <span className="flex justify-center items-center">
          <button className="flex items-center justify-center min-w-45 bg-brand-green text-brand-darkteal h-10 rounded-sm text-[16px] cursor-pointer outline-0 border-0 w-75 hover:bg-brand-green/80 transition-colors transition-normal duration-200 ease-in-out" onClick={handlePlanClick}>
            {selectedPlan === "yearly"
              ? "Start your free 7-day trial"
              : "Start your first month"}
          </button>
        </span>
        <Auth
              isLoginOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />
        {selectedPlan === "monthly" && (
          <div className="text-[14px] text-brand-slate text-center">
            30-day money back guarantee, no questions asked.
          </div>
        )}
        {selectedPlan === "yearly" && (
          <div className="text-[14px] text-brand-slate text-center">
            Cancel your trial at any time before it ends, and you won't be charged.
          </div>
        )}
      </div>


        {/* FAQs */}
      <div className="container-size col-span-3 w-full md:col-span-3 p-6 justify-between items-center mx-auto">
        {faqs.map(({ q, a }, i) => {
          const open = activeId === i;
          return (
            <div key={q} className="border-b border-solid border-brand-ltgray">
              <button
                onClick={() => toggleFAQ(i)}
                className="flex w-full justify-between items-center gap-4 py-6 text-left cursor-pointer"
              >
                <span className="font-medium text-lg md:text-2xl text-brand-darkteal">{q}</span>
                <IoIosArrowUp
                  className={`w-6 h-6 shrink-0 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-brand-subtitle">{a}</div>
              </div>
            </div>
          );
        })}
      </div>
      
    
    <Footer />
    </>
  );
}

export default ChoosePlan;
