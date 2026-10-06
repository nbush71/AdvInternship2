  "use client";

  import { useLibrary } from "./LibraryContext";

  export default function FinishedBooks() {
    const { finishedBooks } = useLibrary();

    if (finishedBooks.length === 0) {
    return (
      <div className="flex flex-1 text-brand-subtitle w-125 bg-brand-ltgreen flex-col items-center justify-center gap-1 p-8 rounded-xl text-center mt-0 ml-auto mr-auto mb-14">
        <p className="text-xl font-bold text-brand-darkteal">Done and dusted!</p>
        <p className="text-brand-subtitle text-lg">
          When you finish a book, you can find it here later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 text-brand-subtitle w-125 bg-brand-ltgreen flex-col items-center justify-center gap-1 p-8 rounded-xl text-center mt-0 ml-auto mr-auto mb-14">
      {finishedBooks.map((book) => (
        <div key={book.id ?? book.title} className="text-brand-darkteal">
          {book.title}
        </div>
      ))}
    </div>
  );
}
