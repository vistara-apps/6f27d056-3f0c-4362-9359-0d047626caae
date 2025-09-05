'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-8 text-center max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-300 mb-6">
          We encountered an error while loading your portfolio data.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
