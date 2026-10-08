"use client";

import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useSidebar } from "../For-You/SidebarContext";

// You need to use this api to search for books:
// https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}

function Search() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  useEffect(() => {
    const query = search.trim();
    if (!query) return;

    const controller = new AbortController();
    const timer = setTimeout(() => {
      fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${encodeURIComponent(query)}`,
        { signal: controller.signal },
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Book search failed: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const results = Array.isArray(data) ? data : data.value;
          if (!Array.isArray(results)) {
            throw new Error("Book search returned an invalid response.");
          }
          setBooks(results);
        })
        .catch((searchError) => {
          if (searchError.name !== "AbortError") {
            console.error(searchError);
            setError("Unable to search for books. Please try again.");
          }
        })
        .finally(() => {
          if (!controller.signal.aborted) setIsLoading(false);
        });
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setBooks([]);
    setError("");
    setIsLoading(Boolean(event.target.value.trim()));
  };

  return (
    <div className=" flex flex-col rounded-sm border-b-2 border-brand-searchgray w-full max-w-6xl mx-auto mr-8">
      <div className="flex w-full h-30 items-center justify-end px-8">
        <div className="flex items-center gap-6 max-w-100 w-full">
          <div className="flex items-center w-full ">
            <div className="relative flex h-8 min-w-0 flex-1 items-center gap-2">
              <input
                onChange={handleSearchChange}
                className="w-full py-3 outline-0 bg-brand-ltgreen text-brand-slate border-2 border-solid pl-2 border-brand-ltgray rounded-lg placeholder:text-brand-dark/60"
                placeholder="  Search for books"
                type="text"
                name="Search"
                aria-label="Search for books"
              />
              <div className="flex items-center absolute h-full right-2 flex-end">
                <IoIosSearch className="w-7 h-7 bold text-brand-icons" />
              </div>
              {search.trim() && (
                <div
                  aria-live="polite"
                  className="absolute left-0 top-full z-50 mt-2 max-h-80 w-full overflow-y-auto rounded-md bg-white shadow-lg"
                >
                  {isLoading ? (
                    <p className="p-4 text-sm text-brand-slate">Searching books...</p>
                  ) : error ? (
                    <p className="p-4 text-sm text-red-600">{error}</p>
                  ) : books.length > 0 ? (
                    books.map((book) => (
                      <Link
                        key={book.id}
                        href={`/book/${book.id}`}
                        className="block border-b border-brand-ltgray p-3 hover:bg-brand-ltgreen"
                      >
                        <span className="block font-semibold text-brand-darkteal">
                          {book.title}
                        </span>
                        <span className="block text-sm text-brand-slate">
                          {book.author}
                        </span>
                      </Link>
                    ))
                  ) : (
                    <p className="p-4 text-sm text-brand-slate">
                      No books found.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center cursor-pointer md:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`ease-in-out ${
                isSidebarOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <RxHamburgerMenu className="w-6 h-6 text-brand-icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
