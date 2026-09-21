import Link from "next/link";
import { IoIosPlayCircle } from "react-icons/io";

function SelectedBook() {
  return (
    <div className=" flex-1 w-full p-8 md:col-span-2 md:grid sm:col-span-1">
      <p className="text-2xl font-bold text-brand-darkteal mb-4">Selected just for you</p>
      <div className="flex flex-1 justify-between bg-brand-yellow2 rounded-b-sm p-8 mb-6 gap-6 w-[80%] max-w-175 sm:w-[60%] md:max-w-3xl md:w-full" href="/book/f9gy1gpai">
        <div className="flex- flex-2 text-brand-darkteal text-lg w-full col-span-1 md:col-span-2 sm:col-span-3 md:text-[16px]">
          How Constant Innovation Creates Radically Successful Businesses
        </div>
        <div className=" w-px bg-brand-ltgray md:visible"></div>
        <div className="flex gap-4 w-[60%]">
          <div className="border w-35 h-35 min-w-35">
            <img
              className="block"
              // Book API The Lean Startup {book.ImageLink}
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
                 {/* {book.audio} */}
              </div>
              <div className=" md:flex-col">3 mins 23 secs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedBook;