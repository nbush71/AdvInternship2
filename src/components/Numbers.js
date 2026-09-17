import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";

function Numbers() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 mt-8 mb-8 gap-8" id="numbers">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="grid grid-cols-1 w-100% mx-w-[1070px]">
          <div className="flex flex-1 mb-12 text-brand-darkteal items-center justify-center text-5xl font-bold place-items-center">Start growing with Summarist now</div>
          <div className="grid grid-cols-3 py-4 px-6 gap-8 content-center">
            <div className="grid grid-cols-1 w-115 h-100 gap-4 text-center rounded-3xl items-center content-center bg-brand-ltBlue">
              <div className="grid items-center justify-center mb-4">
                <BiCrown className=" text-brand-blue size-16 m:size-20 md:size-24" />
              </div>
              <p className="text-6xl font-bold text-center">3 Million</p>
              <p className="text-center text-2xl text-brand-gray">Downloads on all platforms</p>
            </div>            
              <div className="grid grid-cols-1 w-115 h-100 gap-4 rounded-3xl items-center justify-center content-center bg-brand-ltBlue">
                <div className="flex flex-1 items-center justify-center py-4 px-6 gap-2">
                  <BsStarFill className=" text-brand-blue sm:size-4 m:size-6 lg:size-10" />
                  <BsStarFill className=" text-brand-blue sm:size-4 m:size-6 lg:size-10" />
                  <BsStarFill className=" text-brand-blue sm:size-4 m:size-6 lg:size-10" />
                  <BsStarFill className=" text-brand-blue sm:size-4 m:size-6 lg:size-10" />
                  <BsStarHalf className=" text-brand-blue sm:size-4 m:size-6 lg:size-10" />
                </div>  
                  <div className="items-center content-center text-6xl font-bold text-center">4.5 Stars</div>
                  <div className="text-brand-gray text-2xl text-center">Average ratings on iOS and Google <br /> Play
                </div>
            </div>
              <div className="flex flex-1 w-115 h-100 gap-6 rounded-3xl items-center justify-center content-center bg-brand-ltBlue">
              <div className="grid grid-cols-1 py-4 px-6 gap-8">
                <div className="grid items-center justify-center">
                  <RiLeafLine className="content-center text-brand-blue sm:size-16 m:size-18 lg:size-20" />
                </div>
                <div className="content-center text-6xl font-bold text-center">97%</div>
                <div className="text-brand-gray text-2xl text-center">
                  Of Summarist members create a better reading habit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers;