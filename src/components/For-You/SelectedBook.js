"use client";

import React, { useEffect, useState } from "react";
import SelectedSkeleton from "../../components/ui/SelectedSkeleton";

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
  const [id, setId] = useState(null);

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
            <div className=" w-35 h-35 min-w-35" >
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
                  controls
                  src={books[0].audioLink}
                  className="max-w-full"
                  disabled={books[0].subscriptionRequired}
                >
                  Your browser does not support audio playback.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedBook;
