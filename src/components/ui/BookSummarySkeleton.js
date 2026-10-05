export default function BookSummarySkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading book summary"
      className="block relative w-full overflow-y-auto h-[(100%-160px)]"
    >
      <div className="block whitespace-pre-line p-6 text-base max-w-200 mr-auto ml-auto">
        <div
          aria-hidden="true"
          className="animate-pulse text-3xl border-b border-solid border-brand-ltgray mb-8 pb-4"
        >
          <div className="h-8 w-3/4 rounded bg-gray-200" />
        </div>
        <div
          aria-hidden="true"
          className="animate-pulse space-y-3"
        >
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-4/5 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-2/3 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}