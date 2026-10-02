"use client";

import { RiReplay10Fill } from "react-icons/ri";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiForward10Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function Player() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const endpoint = id
      ? `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${encodeURIComponent(id)}`
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
    <div className="fixed flex flex-1 col-span-2 items-center justify-between bg-brand-dark w-full h-20 mt-auto p-6 pt-8 bottom-0 left-0 z-9998">
      
      <div className="flex gap-3 w-[(100%/3)] ">
        <div className="flex max-w-12 mx-12 my-4 ">
          <div className="block mx-10 my-4 w-12 h-12 min-w-12 border border-white text-white text-xs ">
            <img
              src={books.imageLink}
              alt={books.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex text-white text-2xl flex-col gap-1 justify-center ">
          <div className="block">{books.title}</div>
          <div className="text-sm text-brand-ltgray">{books.author}</div>
        </div>
      </div>
      <div className="block w-[(100%/3)]  ">
        <div className="flex items-center justify-between gap-6">
          <button className="flex items-center justify-between outline-0 border-0 bg-transparent rounded-[50%] cursor-pointer">
            <div className="w-8 h-8 fill-white transition-all duration-200 ">
              <RiReplay10Fill className="w-full h-full fill-white" />
            </div>
          </button>
          <button className="flex items-center justify-center outline-0 border-0 bg-white w-10 h-10 rounded-[50%] cursor-pointer">
            <BiSolidRightArrow className="w-full h-full transition-all duration-200 ml-1 fill-brand-dark " />
          </button>
          <button className="w-8 h-8 fill-white transition-all duration-200 ">
            <RiForward10Fill className="w-full h-full fill-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 w-[(100%/3)] ">
        <audio
          controls
          src={books.audioLink}
          className="max-w-full"
          disabled={books.subscriptionRequired}
        >
          Your browser does not support audio playback.
        </audio>
      </div>
    </div>
  );
}

export default Player;
