"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-0 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-6xl font-bold text-primary">!</div>
        <h2 className="mb-3 text-2xl font-bold text-dark">
          Something went wrong
        </h2>
        <p className="mb-8 text-gray leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="rounded-xl bg-primary-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
