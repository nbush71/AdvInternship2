"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiClock2, CiStar } from "react-icons/ci";
import BookPill from "./BookPill";
import Skeleton from "../ui/BookSkeleton";

function RecommendedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
    )
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col pb-2 mt-2">
      <div className="flex text-2xl text-brand-darkteal font-bold mb-4 pl-6">
        Recommended For You
      </div>
      <div className="flex text-lg text-brand-subtitle sm: col-span-2 mb-4 pl-8">
        We think you&apos;ll like these
      </div>

      <div className="flex gap-6 overflow-x-auto snap-x">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} />)
          : books.slice(0, 5).map((book) => (
              <div
                key={book.id}
                className="relative min-w-50 max-w-50 pl-8 pb-4 snap-start hover:bg-brand-ltgreen p-8"
              >
                <div className="absolute top-0 right-0 z-10">
                  <BookPill subscriptionRequired={book.subscriptionRequired} />
                </div>
                <Link
                  href={`/book/${book.id}`}
                  className="min-w-43 max-w-43 w-full hover:bg-brand-ltgreen snap-start p-4"
                >
                  <img
                    src={book.imageLink}
                    alt={book.title}
                    className="min-w-45 min-h-45 object-cover"
                  />
                  <p className="min-h-18 text-base font-bold text-brand-darkteal">
                    {book.title}
                  </p>
                  <p className="text-sm text-brand-slate">{book.author}</p>
                  <p className="text-sm text-brand-subtitle">{book.subTitle}</p>
                  <div className="flex items-center gap-1 text-[14px] font-light text-brand-slate">
                    <CiClock2 className="fill-brand-slate w-4 h-4" />
                    <p>{book.duration}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-light text-brand-slate">
                    <CiStar className="w-4 h-4" />
                    <p>{book.averageRating}</p>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

export default RecommendedBooks;
