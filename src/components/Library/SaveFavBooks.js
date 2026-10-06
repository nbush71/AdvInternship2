"use client";

export default function SaveFavBooks({ savedBooks = [] }) {
  if (savedBooks.length === 0) {
    return (
      <div className="flex flex-1 text-brand-subtitle w-125 bg-brand-ltgreen flex-col items-center justify-center gap-1 p-8 rounded-xl text-center mt-0 ml-auto mr-auto mb-14">
        <p className="text-xl font-bold text-brand-darkteal">Save your favorite books!</p>
        <p className="text-brand-subtitle text-lg">When you save a book, it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 text-brand-subtitle w-125 bg-brand-ltgreen flex-col items-center justify-center gap-1 p-8 rounded-xl text-center mt-0 ml-auto mr-auto mb-14">
      {savedBooks.map((book) => (
        <div key={book.id ?? book.title} className="text-brand-darkteal">
          {book.title}
        </div>
      ))}
    </div>
  );
}