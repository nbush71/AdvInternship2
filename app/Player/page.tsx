import { Suspense } from "react";
import Search from "../../src/components/For-You/Search";
import Player from "../../src/components/Player/Player";
import BookSummary from "../../src/components/Player/BookSummary";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
      <Search />
      <Suspense fallback={<div className="p-6">Loading book details...</div>}>
        <BookSummary />
        <Player />
      </Suspense>
    </div>
  );
}
