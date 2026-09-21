import Link from "next/link";
import { IoIosPlayCircle } from "react-icons/io";

function SelectedBook() {
  return (
    <div className=" flex-1 w-full max-w-620 p-8 sm:max-w-620 md:w-lg lg:w-full">
      <div className="text-2xl font-bold text-brand-darkteal mb-4">Selected just for you</div>
      <Link className="flex justify-between bg-brand-yellow2 rounded-b-sm p-8 mb-6 gap-6 w-2xl lg:w-3xl " href="/book/f9gy1gpai">
        <div className="text-brand-darkteal text-lg w-[40%] md:flex-col">
          How Constant Innovation Creates Radically Successful Businesses
        </div>
        <div className="w-px bg-brand-ltgray hidden:sm:w-[575px]"></div>
        <div className="flex gap-4 w-[60%]">
          <div className="border w-35 h-35 min-w-35">
            <img
              className="block"
              //Book API The Lean Startup
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2"
              alt="book"
            />
          </div>
          <div className="w-full">
            <div className="font-bold text-brand-darkteal mb-2 md:flex-col">The Lean Startup</div>
            <div className="text-[14px] text-brand-darkteal mb-4">Eric Ries</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center w-10 min-w-10 h-10">
                <IoIosPlayCircle className="w-10 h-10"/>
              </div>
              <div className="selected__book--duration md-flex-col">3 mins 23 secs</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SelectedBook;