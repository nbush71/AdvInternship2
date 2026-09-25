import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";

function Library() {
  return (
    <div className="block max-w-267.5 w-full mr-auto ml-auto pr-6 pl-6 ">
      <div className="block pt-10 pb-10 w-full ">
        <div className="block text-[22px] font-bold text-brand-darkteal mb-4">Saved Books</div>
          <div className="block font-light text-brand-subtitle mb-4">item s</div>
          <div className="flex flex-1 overflow-x-auto gap-4 scroll-auto snap-x mb-8">
            <div href="" hidden className="relative snap-start pl-3 pr-3 pb-3 pt-8 decoration-0 rounded-sm max-w-50 w-full ">audioLink</div>
            <div className=" w-43 h-43 block mb-2 mbs-4 mbe-4 me-10 ms-10   ">
              <div className="block w-full h-full cursor-pointer border">bookImage
                </div>
                <div className="block text-base font-bold text-brand-darkteal mb-2">title</div>
                <div className="block text-sm text-brand-slate font-light mb-2">author</div>
                <div className="block text-sm text-brand-subtitle mb-2">subTitle</div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 font-light text-brand-slate cursor-pointer">
                    <div className="flex w-full h-full txt-sm text-brand-slate font-light ">
                      <CiClock2 className="w-full h-full fill-brand-slate"/>
                      <div className="block pr-2"> time</div>
                      <div className="flex items-center w-5 h-5 gap-1 text-sm font-light text-brand-slate">
                        <IoMdStarOutline className="w-full h-full fill-brand-slate pr-1" />
                        <div className="">rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Library;