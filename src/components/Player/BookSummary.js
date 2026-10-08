"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSidebar } from "../For-You/SidebarContext";
import Skeleton from "../ui/BookSummarySkeleton";

function BookSummary() {
   const [books, setBooks] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const searchParams = useSearchParams();
   const id = searchParams.get("id");
   const { fontSize } = useSidebar();

   useEffect(() => {
      const endpoint = id
         ? `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
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
      return <Skeleton />;
   }

   if (error || !books) {
      return (
         <div role="alert" className="mt-12 pl-8 text-brand-darkteal">
            Unable to load book details{error ? `: ${error}` : "."}
         </div>
      );
   }

   return (
      <>
         <div className="mx-auto w-full max-w-200 overflow-y-auto">
            <div className="block whitespace-pre-line p-6 text-base">
               <div className="text-brand-darkteal text-2xl border-b border-solid border-brand-ltgray mb-8 pb-4">
                  <b>{books.title}</b>
               </div>

               <div
                  className="block whitespace-pre-line text-brand-darkteal"
                  style={{ fontSize: `${fontSize}px` }}
               >
                  {books.summary}
               </div>
            </div>
         </div>
      </>
   );
}

export default BookSummary;
