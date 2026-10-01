"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GrMicrophone } from "react-icons/gr";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { LuBookOpenText } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";

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
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(auto,1fr)_auto] gap-12 max-w-4xl">
         <div className="block order-1 lg:order-2 lg:justify-center">
            <div className="relative flex items-center justify-center lg:pt-8">
               <div className="absolute left-0 right-0 top-0 bottom-0 pt-6 pr-10" >
                  <img
                     src={books.imageLink}
                     alt={books.title}
                     className=" w-75 max-w-75 object-contain"
                  />
               </div>
            </div>
         </div>
         <div className="flex flex-col pb-2 gap-2 mt-6 w-240 max-h-full ">
            <div className="flex flex-row w-full pb-2 text-4xl font-bold text-brand-darkteal">
               {books.title}
            </div>
            {/* <div className="text-5xl font-bold text-brand-darkteal">{subscriptionRequired}</div> */}
            <div className="text-base font-bold">{books.author}</div>
            <div className=" flex-1 w-full text-xl font-light text-brand-darkteal">
               {books.subTitle}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-[180px_1fr] max-w-180 gap-y-4 py-4 border-y-2 border-solid border-brand-linegray md:grid-cols-1">
               <div className="flex items-center gap-2 text-sm font-medium text-brand-darkteal ">
                  <FaRegStar className="w-6 h-6" />
                  <span>
                     {books.averageRating} ({books.totalRating} ratings)
                  </span>
               </div>

               <div className="flex items-center gap-2 text-sm font-medium text-brand-darkteal border-">
                  <FaRegClock className="w-6 h-6" />
                  <span>03:23</span>
               </div>

               <div className="flex items-center gap-2 text-sm font-medium text-brand-darkteal">
                  <AiOutlineAudio className="w-6 h-6" />
                  <span>{books.type}</span>
               </div>

               <div className="flex items-center gap-2 text-sm font-medium text-brand-darkteal">
                  <HiOutlineLightBulb className="w-6 h-6" />
                  <span>{books.keyIdeas} Key ideas</span>
               </div>
            </div>
            <div className="flex gap-4 mb-2">
               <div className="flex items-center justify-center w-40 h-12 mt-6 bg-brand-darkteal text-white text-base rounded-sm cursor-pointer gap-2 hover:bg-brand-darkteal/80 opacity duration-200 ease-in-out delay-0 transition-normal transition-colors">
                  <LuBookOpenText className="w-6 h-6 " /> Read
               </div>
               <div className="flex items-center justify-center w-40 h-12 mt-6 bg-brand-darkteal text-white text-base rounded-sm cursor-pointer gap-2 hover:bg-brand-darkteal/80 opacity duration-200 ease-in-out delay-0 transition-normal transition-colors">
                  <GrMicrophone className="w-5 h-5 " /> Listen
               </div>
            </div>
            <div className="flex items-center gap-2 text-brand-blue font-medium mb-4 transition-colors duration-200 ease-in-out delay-0 transition-normal text-base hover:text-brand-blue/80">
               <IoBookmarkOutline className="w-6 h-6" /> Add title to My Library
            </div>
            <div className="text-brand-darkteal pt-2 pb-4 text-lg font-bold">
               What's it about?
            </div>
            <div className="flex flex-wrap gap-4 mb-4 ">
               {Array.isArray(books.tags) ? (
                  books.tags.map((tag) => (
                     <div
                        key={tag}
                        className="bg-brand-ltgreen pr-4 pl-4 h-12 flex items-center cursor-not-allowed text-brand-darkteal font-medium rounded-sm hover:bg-brand-ltgreen/80 transition-colors duration-200"
                     >
                        {tag}
                     </div>
                  ))
               ) : (
                  <div className="bg-brand-ltgreen pr-4 pl-4 h-12 flex items-center cursor-not-allowed text-brand-darkteal font-medium rounded-sm hover:bg-brand-ltgreen/80 transition-colors duration-200">
                     {books.tags}
                  </div>
               )}
            </div>
            <div className="container text-base sm:text-sm leading-relaxed text-brand-darkteal max-w-screen w-2xl overflow-y-auto mb-4">
               {books.bookDescription}
            </div>
            <div className="text-base font-semibold mb-4 ">
               About the author
            </div>
            <div className="container text-base sm:text-sm leading-relaxed text-brand-darkteal max-w-screen w-2xl overflow-y-auto mb-4">
               {books.authorDescription}
            </div>
         </div>

         
      </div>
   );
}

export default InsideBook;
