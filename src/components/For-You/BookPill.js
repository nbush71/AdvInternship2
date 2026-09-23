//subscriptionRequired
// Displayed according to the “subscriptionRequired” property inside the book object. If the subscriptionRequired is false, you don’t need to display anything. If it’s true, you need to display premium.
function BookPill() {
  return (
    <div className="flex items-center rounded-[20px] bg-brand-icons w-fit h-5 px-2 absolute top-0 right-0 text-white text-[10px] ">
      Premium
    </div>
  );
}

export default BookPill;