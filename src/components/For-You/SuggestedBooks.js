
"use client"; 

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import BookPill from "../../components/For-You/BookPill";

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
    <div className="flex flex-col pb-2 mt-2">
    <div className="flex flex-1 col-span-1 text-2xl mt-8 pl-8 font-bold text-brand-darkteal mb-4">Suggested Books</div>
    <div className="flex pb-6 text-lg font-light text-brand-subtitle pl-8"> Browse those Books</div>
    <div className="grid grid-cols-1 ">

      <div className="flex flex-row gap-6 overflow-x-auto snap-x pl-8 pb-4 max-w-6xl">
        
        {books.slice(0, 5).map((book) => (
          <div
            key={book.id}
            className="relative min-w-55 max-w-55 h-fit snap-start hover:bg-brand-ltgreen p-6">
            <div className="absolute top-0 right-0 z-10">
              <BookPill subscriptionRequired={book.subscriptionRequired} />
            </div>

            <Link href={`/book/${book.id}`} className="block">
              <img
                src={book.imageLink}
                alt={book.title}
                className="min-w-45 min-h-45 pb-3 pt-4 object-cover"
              />

              <p className="min-h-18 text-wrap text-base font-bold text-brand-darkteal">
                {book.title}
              </p>

              <p className="text-sm text-brand-slate">{book.author}</p>
              <p className="text-sm text-brand-subtitle"> {book.subTitle} </p>

              <div className="flex items-center gap-1 text-sm font-light text-brand-slate">
                <div className="flex w-4 h-4 text-brand-slate">
                  <CiClock2 className="flex fill-brand-slate w-4 h-4" />
                </div>
                <p className="text-sm font-light text-brand-slate">03:24</p>
              </div>

              <div className="flex items-center gap-1 text-sm font-light text-brand-slate">
                <div className="flex text-base w-4 h-4">
                  <CiStar className="w-4 h-4" />
                </div>
                <p className="text-sm font-light text-brand-slate">
                  {book.averageRating}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
 

export default SuggestedBooks;