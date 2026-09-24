import Pricing from "../../assets/pricing-top.png";
import Image from "next/image";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";

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
              Get unlimited access to many amazing <br />books to read
              </div>
              <div className="text-12 font-bold mb-10">
                <div className="text-white text-[20px] mb-8">Turn ordinary moments into amazing learning opportunities</div>
                <div className="flex max-w-90 justify-center ml-auto mr-auto ">
                  <div className="relative mx-auto w-sm h-full bg-white pt-16 px-8 rounded-t-[250px] shadow-lg flex justify-center overflow-hidden ">
                    <Image src={Pricing} alt="pricing-top" className="w-full h-full bg-transparent rounded-4xl" />
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
              <div className="block text-brand-subtitle text-lg text-center justify-center" ><b>Key ideas in a few min</b> with many books to read</div>
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
              <div className="block text-brand-subtitle text-lg text-center justify-center" ><b>3 million</b> people growing with Summarist everyday</div>
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
              <p className="block text-brand-subtitle text-lg text-center justify-center" ><b>Precise recommendations</b> collections curated by experts</p>
            </div>
          </div>
        </div>
      </div> 
      </div>
      
      <Footer />
    </>
  );
}

export default ChoosePlan;