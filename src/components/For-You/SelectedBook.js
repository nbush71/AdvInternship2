"use client";

import React, { useEffect, useState } from "react";


// Api Link:
// https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected
// -	Returns a single book object
//   status: 'selected' | string;


export async function GET() {
  const response = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
  );
  console.log("WORKS");
  if (!response.ok) {
    throw new Error(`Failed to fetch selected book: ${response.status}`);
  }

  return response.json();
  
}

function SelectedBook() {
  const [books, setBooks] = useState("");

  useEffect(() => {
    GET()
      .then(setBooks)
      .catch((error) => console.error(error));
  }, []);

  if (!books) {
    return <p className="p-8 text-brand-darkteal">Loading selected book...</p>;
  }

  return (
    <div className=" flex-1 w-full p-8 md:col-span-2 md:grid sm:col-span-1">
      <p className="text-2xl font-bold text-brand-darkteal mb-4">
        Selected just for you
      </p>
      <div className="flex flex-1 justify-between bg-brand-yellow2 rounded-b-sm p-8 mb-6 gap-6 w-[80%] max-w-175 sm:w-[60%] md:max-w-3xl md:w-full">
        <div className="flex flex-2 text-brand-darkteal text-lg w-full col-span-1 md:col-span-2 sm:col-span-3 md:text-[16px]">
          {books.subTitle}
        </div>
        <div className=" w-px bg-brand-ltgray md:visible"></div>
        <div className="flex gap-4 w-[60%]">
          <div className="border w-35 h-35 min-w-35">
            <img
              className="block"
              // Book API The Lean Startup {book.imageLink}
              src={books.imageLink}
              alt="book"
              width={140}
              height={140}
            />
          </div>
          <div className="w-full">
            <div className="font-bold text-brand-darkteal mb-2 md:flex-col">
              {books.title}
            </div>
            <div className="text-[14px] text-brand-darkteal mb-4">
              {books.author}
            </div>
            <div className="flex items-center gap-2">
              <audio controls src={books.audioLink} className="max-w-full" disabled={books.subscriptionRequired} >
                Your browser does not support audio playback.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedBook;
