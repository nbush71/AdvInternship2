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
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useLibrary } from "../Library/LibraryContext";
import Skeleton from "../ui/InsideBookSkeleton";

function InsideBook() {
   const [books, setBooks] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const { id } = useParams();
   const { addSavedBook, savedBooks } = useLibrary();

   useEffect(() => {
      const endpoint = id
         ? `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
         : "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested";

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
      return <Skeleton />;
   }

   if (error || !books) {
      return (
         <div role="alert" className="mt-12 pl-8 text-brand-darkteal">
            Unable to load book details{error ? `: ${error}` : "."}
         </div>
      );
   }

   const isSaved = savedBooks.some((savedBook) => savedBook.id === books.id);

   return (
      <div className="grid max-w-6xl grid-cols-1 items-start gap-8 tablet:grid-cols-[minmax(0,1fr)_18rem] tablet:gap-12 mt-10 ">
         <div className="order-1 flex justify-center tablet:order-2 tablet:justify-end">
            <img
               src={books.imageLink}
               alt={books.title}
               className="h-full w-full max-w-full object-contain tablet:sticky tablet:top-8"
            />
         </div>
         <div className="order-2 mt-2 flex min-w-0 w-full max-h-full flex-col gap-2 pb-2 tablet:order-1">
            <div className="flex flex-row w-full pb-2 text-3xl font-bold text-brand-darkteal">
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
               <Link
                  href={`/BookSummary?id=${encodeURIComponent(books.id)}`}
                  className="flex items-center justify-center w-40 h-12 mt-6 bg-brand-darkteal text-white text-base rounded-sm cursor-pointer gap-2 hover:bg-brand-darkteal/80 opacity duration-200 ease-in-out delay-0 transition-normal transition-colors"
               >
                  <LuBookOpenText className="w-6 h-6" /> Read
               </Link>
               <Link
                  href={`/Player?id=${encodeURIComponent(books.id)}`}
                  className="flex items-center justify-center w-40 h-12 mt-6 bg-brand-darkteal text-white text-base rounded-sm cursor-pointer gap-2 hover:bg-brand-darkteal/80 opacity duration-200 ease-in-out delay-0 transition-normal transition-colors"
               >
                  <GrMicrophone className="w-5 h-5" /> Listen
               </Link>
            </div>
            <button
               type="button"
               onClick={() => addSavedBook(books)}
               disabled={isSaved}
               aria-pressed={isSaved}
               className="flex items-center gap-2 text-brand-blue font-medium mb-4 transition-colors duration-200 ease-in-out delay-0 transition-normal text-base hover:text-brand-blue/80 active:text-brand-blue disabled:cursor-default"
            >
               {isSaved ? (
                  <IoBookmark className="w-6 h-6" />
               ) : (
                  <IoBookmarkOutline className="w-6 h-6" />
               )}
               {isSaved ? "Added to My Library" : "Add title to My Library"}
            </button>
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
