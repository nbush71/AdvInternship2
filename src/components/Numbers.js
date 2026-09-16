import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";

function Numbers() {
  return (
    <section className="grid grid-cols-3 gsp-8" id="numbers">
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-1 mt-8 mb-8">
          <div className="flex flex-1 mb-8 text-brand-darkteal items-center justify-center text-5xl font-bold place-items-center">Start growing with Summarist now</div>
          <div className="grid grid-cols-3 py-4 px-6">
            <div className="grid grid-cols-1 size-100 gap-4 text-center rounded-3xl items-center content-center bg-brand-ltBlue">
              <div className="grid items-center justify-center mb-4">
                <BiCrown className=" text-brand-blue size-16 m:size-20 md:size-24" />
              </div>
              <div className="text-6xl font-bold text-center">3 Million</div>
              <p className="text-center text-2xl text-brand-gray">Downloads on all platforms</p>
            </div>
            <div className="flex flex-1 py-4 px-6">
              <div className=" py-4 px-6 size-100 gap-4  rounded-3xl items-center content-center bg-brand-ltBlue">
                <BsStarFill className=" text-brand-blue size-14 m:size-16 md:size-16" />
                <BsStarHalf className=" text-brand-blue size-14 m:size-16 md:size-16" />
              </div>
              <div className="text-6xl font-bold text-center">4.5 Stars</div>
              <p className="text-2xl text-center">Average ratings on iOS and Google Play
              </p>
            </div>
            <div className="numbers">
              <div className="numbers__icon">
                <RiLeafLine  />
              </div>
              <div className="numbers__title">97%</div>
              <div className="numbers__sub--title">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers;