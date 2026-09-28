
function BookSkeleton() {
  return (
    <div className="relative min-w-50 max-w-50 pl-8 pb-4 snap-start p-8">
      <div className="min-w-43 max-w-43 w-full p-4 animate-pulse">
        {/* Image */}
        <div className="min-w-45 min-h-45 h-45 rounded bg-gray-200" />

        {/* Title */}
        <div className="min-h-18 mt-2 space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>

        {/* Author */}
        <div className="h-3.5 w-2/3 rounded bg-gray-200 mt-1" />

        {/* Subtitle */}
        <div className="h-3.5 w-full rounded bg-gray-200 mt-2" />

        {/* Duration */}
        <div className="flex items-center gap-1 mt-3">
          <div className="h-4 w-4 rounded-full bg-gray-200" />
          <div className="h-3.5 w-12 rounded bg-gray-200" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <div className="h-4 w-4 rounded-full bg-gray-200" />
          <div className="h-3.5 w-8 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default BookSkeleton;