"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

// Api Link:
// https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended
// -	Returns an array of book objects

function RecommendedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
    )
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 ">
      <div className="grid text-2xl text-brand-darkteal font-bold mb-4 pl-8">
        Recommended For You
      </div>
      <div className="grid text-lg text-brand-subtitle sm: col-span-2 mb-4 pl-8">
        We think you`ll like these
      </div>

      <div className="flex gap-6 overflow-x-auto snap-x pl-8 pb-4 max-w-6xl">
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

            <p className="text-sm text-brand-slate">{book.author}</p>
            <p className="text-sm text-brand-subtitle "> {book.subTitle} </p>
            <div className="flex items-center gap-1 text-[14px] font-light text-brand-slate">
              <div className="flex w-4 h-4 text-brand-slate">
                <CiClock2 className=" flex fill-brand-slate w-4 h-4" />
              </div>
              <p className="flex text-[14px] font-light text-brand-slate">03:24</p>
            </div>
            <div className="flex items-center gap-1 text-sm font-light text-brand-slate">
              <div className="flex text-base w-4 h-4">
                <CiStar className="w-4 h-4" />
              </div>
              <p className="text-sm font-light text-brand-slate">{book.averageRating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecommendedBooks;
