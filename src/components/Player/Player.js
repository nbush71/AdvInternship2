
import { RiReplay10Fill } from "react-icons/ri";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiForward10Fill } from "react-icons/ri";

function Player() {
  return (
    <div className="fixed flex flex-1 col-span-2 items-center justify-between bg-brand-dark w-full h-20 mt-auto p-6 pt-8 bottom-0 left-0 z-9998">
      audioLink
      <div className="flex gap-3 w-[(100%/3)] ">
        <div className="flex max-w-12 mx-12 my-4 ">
          <div className="block mx-10 my-4 w-12 h-12 min-w-12 border border-white text-white text-xs ">book<br />Image</div>
           </div>
          <div className="flex text-white text-2xl flex-col gap-1 justify-center ">
            <div className="block">
              title - How to Win Friends and Influence People in the Digital Age
            </div>
            <div className="text-sm text-brand-ltgray">author</div>
          </div>
      </div>
      <div className="block w-[(100%/3)]  ">
        <div className="flex items-center justify-between gap-6">
          <button className="flex items-center justify-between outline-0 border-0 bg-transparent rounded-[50%] cursor-pointer">
            <div className="w-8 h-8 fill-white transition-all duration-200 ">
              <RiReplay10Fill className="w-full h-full fill-white"/>
            </div>
          </button>
          <button className="flex items-center justify-center outline-0 border-0 bg-white w-10 h-10 rounded-[50%] cursor-pointer">
            <BiSolidRightArrow  className="w-full h-full transition-all duration-200 ml-1 fill-brand-dark "/>
          </button>
          <button className="w-8 h-8 fill-white transition-all duration-200 ">
            <RiForward10Fill className="w-full h-full fill-white"/>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 w-[(100%/3)] ">
        <div className="block text-white text-sm">00:00
        </div>
        <input className="inline-block range rounded-lg h-1 max-w-75 cursor-pointer outline-0 bg-[linear-gradient(to_right,rgb(43,217,124)_0%,rgb(109,120,125)_0%)] [--range-progress:0%] select-none" />
        <div className="text-white text-[14px]">03:24</div>
        
      </div>
    </div>
  );
}

export default Player;