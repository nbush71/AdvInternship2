"use client";

import React, { useEffect, useState } from "react";
import SelectedSkeleton from "../../components/ui/SelectedSkeleton";
import { useRef } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import Link from "next/link";

// Api Link:
// https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected
// -	Returns a single book object
//   status: 'selected' | string;

export async function GET() {
  const response = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch selected book: ${response.status}`);
  }

  return response.json();
}

function SelectedBook() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    GET()
      .then((data) => {
        console.log(data);
        setBooks(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex-1 w-full p-8 col-span-3 max-w-175">
        <SelectedSkeleton />
      </div>
    );
  }

  if (!books || books.length === 0) {
    return null;
  }

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio && Number.isFinite(audio.duration)) {
      setDuration(audio.duration);
    }
  };

  return (
    <div className="flex-1 w-full p-8 col-span-3 max-w-175">
      <p className="text-2xl font-bold text-brand-darkteal mb-4">
        Selected just for you
      </p>

      <div className="flex bg-brand-yellow2 rounded-b-sm p-8 mb-6 gap-6 w-full">
        <div className="flex flex-row md:justify-between md:flex-row w-full gap-6">
          <div className="flex md:flex-row text-brand-darkteal w-66 text-lg font-medium md:text-base">
            {books[0].subTitle}
          </div>

          <div className="w-px md:hidden md:block bg-brand-ltgray" />

          <div className="flex gap-4 w-[60%]">
            <div className=" w-35 h-35 min-w-35">
              <a href={`/book/${books[0].id}`}>
                <img
                  className="block w-fit"
                  src={books[0].imageLink}
                  alt="book"
                  width={140}
                  height={140}
                />
              </a>
            </div>
            <div className="w-full">
              <div className="font-bold text-brand-darkteal mb-2 md:flex-col">
                {books[0].title}
              </div>
              <div className="text-[14px] text-brand-darkteal mb-4">
                {books[0].author}
              </div>
              <div className="flex items-center w-full gap-2">
                <audio
                  ref={audioRef}
                  src={books[0].audioLink}
                  className="hidden"
                  preload="metadata"
                  onLoadedMetadata={handleLoadedMetadata}
                  onDurationChange={handleLoadedMetadata}
                >
                  Your browser does not support audio playback.
                </audio>
                <Link
                  href={`/book/${books[0].id}`}
                  aria-label={`Read the summary of ${books[0].title}`}
                  className="flex items-center justify-center outline-0 border-0 bg-black w-10 h-10 rounded-[50%] cursor-pointer"
                >
                  <BiSolidRightArrow className="w-6 h-full transition-all duration-200 ml-1 fill-white" />
                </Link>
                <span className="text-black text-sm">
                  {Math.floor(duration / 60)} mins {Math.floor(duration % 60)} secs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedBook;
