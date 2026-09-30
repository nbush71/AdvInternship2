"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GrMicrophone } from "react-icons/gr";
import { LuBookOpenText } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { type } from "os";

// You need to use this api to retrieve the book by id:
// https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}
// ${id} = dynamic id of the book

function InsideBook() {
   const [books, setBooks] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const { id } = useParams();

   useEffect(() => {
      const endpoint = id
         ? `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
         : "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected";

      fetch(endpoint)
         .then((response) => {
            if (!response.ok)
               throw new Error(`Request failed (${response.status})`);
            return response.json();
         })
         .then((data) => setBooks(Array.isArray(data) ? data[0] : data))
         .catch((fetchError) => setError(fetchError.message))
         .finally(() => setLoading(false));
   }, [id]);

   if (loading) {
      return (
         <div className="mt-12 pl-8 text-brand-darkteal">
            Loading book details...
         </div>
      );
   }

   if (error || !books) {
      return (
         <div role="alert" className="mt-12 pl-8 text-brand-darkteal">
            Unable to load book details{error ? `: ${error}` : "."}
         </div>
      );
   }

   return (
      <div className="flex max-w-3xl flex-col ">
         <div className="flex flex-col pb-2 gap-2 mt-6 w-240 max-h-full ">
            <div className="flex flex-row w-full pb-2 text-4xl font-bold text-brand-darkteal">
               {books.title}
            </div>
            {/* <div className="text-5xl font-bold text-brand-darkteal">{subscriptionRequired}</div> */}
            <div className="text-base font-bold">{books.author}</div>
            <div className=" flex-1 w-full text-xl font-light text-brand-darkteal">
               {books.subTitle}
            </div>

            <div className="flex flex-col w-150 h-28 pt-4 pb-4 border-b-2 border-t-2 border-brand-linegray">
               <div className="flex flex-1 w-[450] h-[100] gap-3">
                  <div className="flex row-auto">
                     <div className="flex w-8 h-8 gap-2 ">
                        <FaRegStar className="w-6 h-6" />
                     </div>
                     <div className="text-sm pt-1 text-brand-darkteal">{books.averageRating}</div>
                     <div className="pl-1 pt-1 text-sm text-brand-darkteal">
                        ({books.totalRating} ratings)
                     </div>
                  </div>
                  <div className="flex flex-1 max-w-80 gap-y-3">
                     <div className="flex w-6 h-fit mr-1">
                        <FaRegClock className="w-full h-full fill-brand-icons" />
                     </div>
                     <div className="text-sm text-brand-darkteal pt-1 pl-2 mr-1 ">03:23</div>
                  </div>

                  <div className="flex flex-1 w-180 gap-1 max-w-180 h-10 items-center">
                     <div className="flex w-35 h-10 font-medium text-brand-darkteal">
                        <div className="w-10 h-10 flex-start pt-1.20">
                           <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 1024 1024"
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"></path>
                           </svg>
                        </div>
                     <div className=" w-21 h-10 justify-center text-sm text-brand-darkteal ">
                        {books.type}
                     </div>
                  </div>
                  <div className="flex w-38 h-11 gap-2 max-w-50 font-medium text-sm">
                     <div className="flex w-6 h-10  ">
                        <svg
                           stroke="currentColor"
                           fill="none"
                           strokeWidth="0"
                           viewBox="0 0 24 24"
                           className="w-full h-6 place-items-center"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                           ></path>
                        </svg>
                     </div>
                     <div className="flex w-25 text-sm text-brand-darkteal">{books.keyIdeas} Key ideas</div>
                  </div>

                  </div>
               </div>
            </div>
            <div className="flex gap-4 mb-2">
               <div className="flex items-center justify-center w-36 h-12 mt-6 bg-brand-darkteal text-white text-base rounded-sm cursor-pointer gap-2 hover:bg-brand-darkteal/80 opacity duration-200 ease-in-out delay-0 transition-normal transition-colors">
               <LuBookOpenText className="w-6 h-6 "/> Read
               </div>
               <div className="flex items-center justify-center w-36 h-12 mt-6 bg-brand-darkteal text-white text-base rounded-sm cursor-pointer gap-2 hover:bg-brand-darkteal/80 opacity duration-200 ease-in-out delay-0 transition-normal transition-colors">
               <GrMicrophone className="w-5 h-5 "/> Listen
               </div>
            </div>
            <div className="flex items-center gap-2 text-brand-blue font-medium mb-4 transition-colors duration-200 ease-in-out delay-0 transition-normal text-base hover:text-brand-blue/80">
                 <IoBookmarkOutline className="w-6 h-6" /> Add title to My Library
               </div>
            <div className="text-brand-darkteal pt-2 pb-4 text-lg font-bold">What's it about?</div>
             <div className="flex flex-wrap gap-4 mb-4 ">
               <div className="bg-brand-ltgreen pr-4 pl-4 h-12 flex items-center cursor-not-allowed text-brand-darkteal font-medium rounded-sm hover:bg-brand-ltgreen/80 transition-colors duration-200">{books.tags[0]}</div>
               <div className="bg-brand-ltgreen pr-4 pl-4 h-12 flex items-center cursor-not-allowed text-brand-darkteal font-medium rounded-sm hover:bg-brand-ltgreen/80 transition-colors duration-200">{books.tags[1]}</div>
             </div>
             <div className="text-sm text-brand-darkteal w-180 max-w-160 mb-4">{books.bookDescription}</div>
             <div className="text-2xl font-semibold mb-4 ">About the author</div>
             <div className="text-sm text-brand-darkteal w-180 max-w-160 mb-4">{books.authorDescription}</div>
             
         </div>
         <div className=" flex flex-1 col-span-4 lg:flex lg:justify-center w-180 h-180">
               <div className="block w-75 h-75 border">{books.imageLink}</div>
             </div>
      </div>
   );
}

export default InsideBook;
