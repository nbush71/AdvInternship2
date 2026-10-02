"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiClock2, CiStar } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";

function Library() {
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
    <div className="block max-w-267.5 w-full mr-auto ml-auto pr-6 pl-6">
      <div className="block pt-10 pb-10 w-full">
        <div className="block text-[22px] font-bold text-brand-darkteal mb-4">
          Saved Books
        </div>
        <div className="block font-light text-brand-subtitle mb-4">
          {books.length} items
        </div>

        <div className="flex flex-1 overflow-x-auto gap-4 scroll-auto snap-x mb-8">
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/book/${book.id}`}
              className="block min-w-43 snap-start hover:bg-brand-ltgreen p-4"
            >
              <div className="relative snap-start pl-3 pr-3 pb-3 pt-8 decoration-0 rounded-sm max-w-50 w-full">
                <img
                  src={book.bookImage || book.imageLink}
                  alt={book.title}
                  className="w-43 h-43 object-cover"
                />
                <div className="block text-base font-bold text-brand-darkteal mb-2">
                  {book.title}
                </div>
                <div className="block text-sm text-brand-slate font-light mb-2">
                  {book.author}
                </div>
                <div className="block text-sm text-brand-subtitle mb-2">
                  {book.subTitle}
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 font-light text-brand-slate cursor-pointer">
                    <div className="flex w-full h-full text-sm text-brand-slate font-light">
                      <CiClock2 className="w-4 h-4 fill-brand-slate" />
                      <div className="block pr-2">{book.duration}</div>
                    </div>
                    <div className="flex items-center w-5 h-5 gap-1 text-sm font-light text-brand-slate">
                      <IoMdStarOutline className="w-4 h-4 fill-brand-slate pr-1" />
                      <div className="block pr-2">{book.averageRating}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="block pb-4">
        <div className="text-[22px] font-bold text-brand-darkteal mb-4">
          Finished
        </div>
        <div className="block font-light text-brand-subtitle mb-4">
          {books.length} items
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x pl-8 pb-4 max-w-6xl">
          {books.slice(0, 5).map((book) => (
            <Link
              key={book.id}
              href={`/book/${book.id}`}
              className="min-w-43 snap-start hover:bg-brand-ltgreen p-4"
            >
              <img
                src={book.imageLink || book.bookImage}
                alt={book.title}
                className="w-43 h-43 object-cover"
              />

              <p className="text-base font-bold text-brand-darkteal">
                {book.title}
              </p>

              <p className="text-sm text-brand-slate">{book.author}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
