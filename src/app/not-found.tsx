import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-0 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-7xl font-bold text-primary">404</div>
        <h2 className="mb-3 text-2xl font-bold text-dark">Page not found</h2>
        <p className="mb-8 text-gray leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-primary-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
