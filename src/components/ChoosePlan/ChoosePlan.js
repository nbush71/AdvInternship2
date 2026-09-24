import Pricing from "../../assets/pricing-top.png";
import Image from "next/image";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

import Footer from "../Footer";
function ChoosePlan() {
  return (
    <>
      <div className="col-span-3 relative lg:w-full w-full h-full overflow-hidden bg-brand-darkteal rounded-b-[16rem] pt-10 text-center min-h-130 flex-1 flex-col justify-between">
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
                <div className="flex max-w-90 justify-center ml-auto mr-auto ">
                  <div className="relative mx-auto w-sm h-full bg-white pt-16 px-8 rounded-t-[250px] shadow-lg flex justify-center overflow-hidden ">
                    <Image
                      src={Pricing}
                      alt="pricing-top"
                      className="w-full h-full bg-transparent rounded-4xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 icons */}
      <div className="grid grid-cols-3 justify-between items-center">
        <div className="flex max-w-62.5 w-full ml-auto mr-auto p-6   ">
          <div className="flex flex-col pt-10 pb-10 w-62.5 h-full items-center">
            <div className="flex flex-col col-span-1 justify-center text-center max-w-200 ml-auto mr-auto mb-8">
              <div>
                <div className="flex w-62.5 h-20 justify-center fill-brand-darkteal mb-3">
                  <IoDocumentTextSharp className="w-full h-full fill-brand-darkteal" />
                </div>
                <div className="block text-brand-subtitle text-lg text-center justify-center">
                  <b>Key ideas in a few min</b> with many books to read
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block col-span-1 max-w-62.5 w-full ml-auto mr-auto pl-6 pr-6  ">
          <div className="flex flex-col pt-10 pb-10 w-62.5 h-full items-center">
            <div className="flex flex-col col-span-1 justify-center text-center max-w-200 ml-auto mr-auto mb-8">
              <div>
                <div className="flex w-62.5 h-20 justify-center fill-brand-darkteal mb-3">
                  <RiPlantFill className="w-full h-full fill-brand-darkteal" />
                </div>
                <div className="block text-brand-subtitle text-lg text-center justify-center">
                  <b>3 million</b> people growing with Summarist everyday
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block  max-w-62.5 w-full ml-auto mr-auto pl-6 pr-6  ">
          <div className="flex flex-col pt-10 pb-10 w-62.5 h-full items-center">
            <div className="flex flex-col col-span-1 justify-center text-center max-w-200 ml-auto mr-auto mb-8">
              <div>
                <div className="flex w-62.5 h-20 justify-center fill-brand-darkteal mb-3">
                  <FaHandshake className="w-full h-full fill-brand-darkteal" />
                </div>
                <p className="block text-brand-subtitle text-lg text-center justify-center">
                  <b>Precise recommendations</b> collections curated by experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-row col-span-3 w-full h-full items-center justify-center ">
        <p className="flex text-4xl font-bold text-brand-darkteal text-center mb-8 ">
          Choose the plan that fits you
        </p>
      </div>

      {/* $99.99 plan */}
      <div className="flex gap-6 w-170 bg-brand-graybutton p-6 rounded-sm cursor-pointer max-w-170 mr-auto ml-auto border-4 border-solid border-brand-green">
        <div className="relative w-6 h-6 rounded-[50%] border-2 border-solid border-black flex items-center justify-center">
          <div className="block absolute w-1.5 h-1.5 bg-black rounded-[50%]"></div>
        </div>
        <div>
          <div className="text-lg font-semibold text-brand-darkteal mb-2">
            Premium Plus Yearly
          </div>
          <div className="text-6 font-bold text-brand-darkteal mb-2">
            $99.99/year
          </div>
          <div className="block text-brand-slate text-[14px] ">
            7-day free trial included
          </div>
        </div>
      </div>

      <div className="text-[14px] text-brand-slate flex col-span-3 items-center gap-2 max-w-60 mt-6 mr-auto ml-auto mb-6 ">
        or
      </div>

      <div className="flex gap-6 w-170 bg-brand-graybutton p-6 rounded-sm cursor-pointer max-w-170 mr-auto ml-auto border-4 border-solid border-brand-ltgray">
        <div className="relative w-6 h-6 rounded-[50%] border-2 border-solid border-black flex items-center justify-center"></div>
        <div>
          <div className="text-lg font-semibold text-brand-darkteal mb-2">
            Premium Monthly
          </div>
          <div className="text-6 font-bold text-brand-darkteal mb-2">
            $9.99/month
          </div>
          <div className="block text-brand-slate text-[14px] ">
            7-day free trial included
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-3 items-center gap-4 bg-white sticky bottom-0 z-1 pt-8 pr-0 pl-0 pb-8">
        <span className="col-span-1">
          <button className="flex items-center justify-center min-w-45 bg-brand-green text-brand-darkteal h-10 rounded-sm text-[16px] cursor-pointer outline-0 border-0 w-75 hover:bg-brand-green/80 transition-colors transition-normal duration-200 ease-in-out">
            Start your free 7-day trial
          </button>
        </span>
        <div className="text-[14px] text-brand-slate text-center">
          Cancel your trial at any time before it ends, and you won't be
          charged.
        </div>
      </div>

      {/*  FAQ 1 */}
      <div className="block p-6">
        <div className="block border-b border-solid border-brand-vltgray overflow-hidden ">
          <div className="flex justify-between items-center cursor-pointer pt-6 pr-0 pl-0 pb-6 gap-2">
            <div className=" block font-medium p-2 text-2xl relative mb-0 text-brand-darkteal transition-all duration-300 ease-in-out transition-normal cursor-pointer  ">
              How does the 7-day trial work?
            </div>
            <IoIosArrowUp className="w-6 min-w-6 h-6 transition-transform rotate-180 duration-300 ease-in-out delay-0 transition-normal cursor-pointer " />
          </div>
          <div className=" block relative overflow-hidden transition-[height] h-24 duration-300 ease delay-0 transition-normal">
            <div className="block min-h-1 pb-6 text-brand-subtitle">
              Begin your complimentary 7-day trial with a Summarist annual
              membership. You are under no obligation to continue your
              subscription, and you will only be billed when the trial period
              expires. With Premium access, you can learn at your own pace and
              as frequently as you desire, and you may terminate your
              subscription prior to the conclusion of the 7-day free trial.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="block border-b border-solid border-brand-vltgray overflow-hidden">
          <div className="flex justify-between items-center pt-6 pb-6 pr-0 pl-0 gap-2 cursor-pointer ">
            <div className="font-medium text-2xl relative mb-0 text-brand-darkteal transition-all duration-300 ease-in-out tracking-normal delay-0 ">
              Can I switch subscriptions from monthly to yearly, or yearly to
              monthly?
            </div>
            <IoIosArrowUp className=" w-6 min-w-6 h-6 transition-transform rotate-180 duration-300 ease-in-out delay-0 transition-normal cursor-pointer " />
          </div>
          <div className=" block relative overflow-hidden transition-[height] duration-[.35s] ease-in-out delay-0 h-18.25">
            While an annual plan is active, it is not feasible to switch to a
            monthly plan. However, once the current month ends, transitioning
            from a monthly plan to an annual plan is an option.
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="block border-b border-solid border-brand-vltgray overflow-hidden">
          <div className="flex justify-between items-center pt-6 pb-6 pr-0 pl-0 gap-2 cursor-pointer ">
            <div className="font-medium text-2xl relative mb-0 text-brand-darkteal transition-all duration-300 ease-in-out tracking-normal delay-0 ">
              What's included in the Premium plan?
            </div>
            <IoIosArrowUp className=" w-6 min-w-6 h-6 transition-transform rotate-180 duration-300 ease-in-out delay-0 transition-normal cursor-pointer " />
          </div>
          <div className=" block relative overflow-hidden transition-[height] duration-[.35s] ease-in-out delay-0 h-18.25">
            Premium membership provides you with the ultimate Summarist
            experience, including unrestricted entry to many best-selling books
            high-quality audio, the ability to download titles for offline
            reading, and the option to send your reads to your Kindle.
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="block border-b border-solid border-brand-vltgray overflow-hidden">
          <div className="flex justify-between items-center pt-6 pb-6 pr-0 pl-0 gap-2 cursor-pointer ">
            <div className="font-medium text-2xl relative mb-0 text-brand-darkteal transition-all duration-300 ease-in-out tracking-normal delay-0 ">
              Can I cancel during my trial or subscription?
            </div>
            <IoIosArrowUp className=" w-6 min-w-6 h-6 transition-transform rotate-180 duration-300 ease-in-out delay-0 transition-normal cursor-pointer " />
          </div>
          <div className=" block relative overflow-hidden transition-[height] duration-[.35s] ease-in-out delay-0 h-18.25">
            You will not be charged if you cancel your trial before its
            conclusion. While you will not have complete access to the entire
            Summarist library, you can still expand your knowledge with one
            curated book per day.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ChoosePlan;
