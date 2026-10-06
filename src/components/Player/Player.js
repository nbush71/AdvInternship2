"use client";

import { RiReplay10Fill } from "react-icons/ri";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiForward10Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

function formatTime(time) {
  if (!Number.isFinite(time) || time < 0) {
    return "00:00";
  }

  const totalSeconds = Math.floor(time);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function Player() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const audioRef = useRef(null);

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

  const handlePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const rewind = () => {
    audioRef.current.currentTime -= 10;
  };

  const forward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio && Number.isFinite(audio.duration)) {
      setDuration(audio.duration);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleSeek = (event) => {
    const time = Number(event.target.value);
    if (audioRef.current && Number.isFinite(time)) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

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
          <button
            type="button"
            aria-label="Rewind 10 seconds"
            onClick={rewind}
            className="flex items-center justify-between outline-0 border-0 bg-transparent rounded-[50%] cursor-pointer"
          >
            <RiReplay10Fill className="w-8 h-8 fill-white transition-all duration-200" />
          </button>
          <button
            type="button"
            aria-label="Play or pause audio"
            onClick={handlePlay}
            className="flex items-center justify-center outline-0 border-0 bg-white w-10 h-10 rounded-[50%] cursor-pointer"
          >
            <BiSolidRightArrow className="w-full h-full transition-all duration-200 ml-1 fill-brand-dark" />
          </button>
          <button
            type="button"
            aria-label="Forward 10 seconds"
            onClick={forward}
            className="w-8 h-8 fill-white transition-all duration-200"
          >
            <RiForward10Fill className="w-full h-full fill-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 w-[(100%/3)] ">
        <audio
          src={books.audioLink}
          className="max-w-full"
          disabled={books.subscriptionRequired}
          ref={audioRef}
          onLoadedMetadata={handleLoadedMetadata}
          onDurationChange={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        >
          Your browser does not support audio playback.
        </audio>
        <span className="text-white text-sm">{formatTime(currentTime)}</span>
        <input
          aria-label="Audio playback position"
          className="text-white bg-transparent border border-white focus:outline-none"
          type="range"
          min="0"
          max={duration}
          step="0.1"
          value={Math.min(currentTime, duration)}
          onChange={handleSeek}
          disabled={!duration || books.subscriptionRequired}
        />
        <span className="text-white text-sm">{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default Player;
