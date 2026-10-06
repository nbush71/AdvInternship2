
export default function InsideBookSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading book details"
      className="grid max-w-6xl grid-cols-1 items-start gap-8 tablet:grid-cols-[minmax(0,1fr)_18rem] tablet:gap-12"
    >
      <div className="order-1 flex justify-center tablet:order-2 tablet:justify-end">
        <div
          aria-hidden="true"
          className="h-72 w-56 max-w-full animate-pulse rounded bg-gray-200 tablet:sticky tablet:top-8"
        />
      </div>
      <div className="order-2 mt-2 flex min-w-0 w-full max-h-full flex-col gap-4 pb-2 animate-pulse tablet:order-1">
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
