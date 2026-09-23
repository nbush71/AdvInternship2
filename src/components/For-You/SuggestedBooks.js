// Api Link:
// https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested
// -	Returns an array of book objects

function SuggestedBooks() {
  return (
    <>
    <div className="flex col-span-2 text-2xl mt-8 pl-8 font-bold text-brand-darkteal mb-4">Suggested Books</div>
    <div className="text-lg font-light text-brand-subtitle pl-8"> Browse those Books</div>
    <div>Will finish when RecommendedBooks is working.</div>
    </>
  );
}

export default SuggestedBooks;