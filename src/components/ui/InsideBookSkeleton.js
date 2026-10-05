
export default function InsideBookSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading book details"
      className="grid grid-cols-1 lg:grid-cols-[minmax(auto,1fr)_auto] gap-12 max-w-4xl"
    >
      <div className="container order-1 w-2xl lg:order-2 md:justify-center lg:justify-center">
        <div className="relative flex items-center justify-center-safe lg:pt-8">
          <div
            aria-hidden="true"
            className="h-96 w-75 max-w-75 animate-pulse rounded bg-gray-200"
          />
        </div>
      </div>
      <div className="flex flex-col pb-2 gap-4 mt-6 w-240 max-h-full animate-pulse">
        <div aria-hidden="true" className="h-10 w-3/4 rounded bg-gray-200" />
        <div aria-hidden="true" className="h-5 w-1/3 rounded bg-gray-200" />
        <div aria-hidden="true" className="h-7 w-full rounded bg-gray-200" />
        <div className="grid grid-cols-[180px_1fr] max-w-180 gap-4 py-4 border-y-2 border-solid border-brand-linegray md:grid-cols-1">
          <div aria-hidden="true" className="h-6 w-40 rounded bg-gray-200" />
          <div aria-hidden="true" className="h-6 w-28 rounded bg-gray-200" />
          <div aria-hidden="true" className="h-6 w-24 rounded bg-gray-200" />
          <div aria-hidden="true" className="h-6 w-32 rounded bg-gray-200" />
        </div>
        <div className="flex gap-4 mb-2">
          <div aria-hidden="true" className="mt-6 h-12 w-40 rounded bg-gray-200" />
          <div aria-hidden="true" className="mt-6 h-12 w-40 rounded bg-gray-200" />
        </div>
        <div aria-hidden="true" className="h-6 w-48 rounded bg-gray-200" />
        <div aria-hidden="true" className="h-6 w-36 rounded bg-gray-200" />
        <div className="flex flex-wrap gap-4 mb-4">
          <div aria-hidden="true" className="h-12 w-24 rounded bg-gray-200" />
          <div aria-hidden="true" className="h-12 w-28 rounded bg-gray-200" />
          <div aria-hidden="true" className="h-12 w-20 rounded bg-gray-200" />
        </div>
        <div aria-hidden="true" className="space-y-3">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-4/5 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
        </div>
        <div aria-hidden="true" className="h-6 w-40 rounded bg-gray-200" />
        <div aria-hidden="true" className="space-y-3">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
