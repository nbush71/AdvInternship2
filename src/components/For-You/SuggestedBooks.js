
"use client"; 

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

// Api Link:
// https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested
// -	Returns an array of book objects

function SuggestedBooks() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
      )
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => console.error(error));
    }, []);

  return (
    <div className="flex flex-col pb-6">
    <div className="flex flex-1 col-span-1 text-2xl mt-8 pl-8 font-bold text-brand-darkteal mb-4">Suggested Books</div>
    <div className="flex pb-6 text-lg font-light text-brand-subtitle pl-8"> Browse those Books</div><div className="grid grid-cols-1 ">

      <div className="flex flex-row gap-6 overflow-x-auto snap-x pl-8 pb-4 max-w-6xl">
        {books.slice(0, 5).map((book) => (
          <Link
            key={book.id}
            href={`/book/${book.id}`}
            className="min-w-45 max-w-45 snap-start"
          >
            <img
              src={book.imageLink}
              alt={book.title}
              className="w-45 h-45 object-cover"
            />

            <p className="min-h-18 text-base font-bold text-brand-darkteal">
              {book.title}
            </p>

            <p className="text-[14px] text-brand-slate">{book.author}</p>
            <p className="text-[14px] text-brand-subtitle "> {book.subTitle} </p>
            <div className="flex items-center gap-1 text-[14px] font-light text-brand-slate">
            <div className="flex w-4 h-4 text-brand-slate">
              <CiClock2 className=" flex fill-brand-slate w-4 h-4" />
            </div>
            <p className="text-[14px] font-light text-brand-slate">03:24</p>
          </div>
          <div className="flex items-center gap-1 text-[14px] font-light text-brand-slate">
            <div className="recommended__book--details-icon">
              <CiStar className="w-4 h-4" />
            </div>
            <p className="text-[14px] font-light text-brand-slate">{book.averageRating}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
 

export default SuggestedBooks;