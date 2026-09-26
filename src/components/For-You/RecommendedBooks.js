"use client";

import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

// Api Link:
// https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended
// -	Returns an array of book objects


function RecommendedBooks() {
  return (
    <div className="grid grid-cols-1 ">
      <div className="grid text-2xl text-brand-darkteal font-bold mb-4 pl-8">Recommended For You</div>
        <div className="grid text-lg text-brand-subtitle sm: col-span-2 mb-4 pl-8">We think you`ll like these</div>
         <div className="grid pl-8 w-50 h-96.5 ml-8 overflow-x-auto gap-4 scroll snap-x mb-2">
          <Link className="relative scroll snap-start pt-9 pl-3 pb-3 pr-3 decoration-current decoration-solid decoration-line-none decoration-auto rounded-sm max-w-50 w-full" href="/book/5bxl50cz4bt">
            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-win-friends-and-influence-people.mp3?alt=media&amp;token=60872755-13fc-43f4-8b75-bae3fcd73991"></audio>
          </Link>
          {/* Book  image 1 */}
          {/* Image wrapper */}
          <div className="block w-43 h-43 mb-px border">
            <div className="w-full h-full" alt="book" src="{book.imageLink}" />
            </div>
            <p className="grid grid-cols-1 flex-1 text-[16px] text-wrap font-bold text-brand-darkteal ">How to Win Friends and Influence People in the Digital Age</p>
            <p className="text-[14px] text-brand-slate font-light">Dale Carnegie</p>
            <p className="text-[14px] text-brand-subtitle ">Time-tested advice for the digital age</p>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 text-[14px] font-light text-brand-slate">
                <div className="flex w-4 h-4 text-brand-slate">
                  <CiClock2 className=" w-4 h-4" />
                  </div>
                  <div className="text-[14px] font-light text-brand-slate">03:24
                  </div>
                </div>
              <div className="flex items-center gap-1 text-[14px] font-light text-brand-slate">
                <div className="recommended__book--details-icon">
                  <CiStar className="w-4 h-4" />
                </div>
                <div className="text-[14px] font-light text-brand-slate">4.4
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default RecommendedBooks;