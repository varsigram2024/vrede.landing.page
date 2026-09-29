import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-[#171717]">
      <p className="text-sm font-semibold text-[#8B0D16]">404</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm leading-6 text-[#777]">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex h-[34px] items-center rounded-md bg-[#8B0D16] px-8 text-sm font-semibold text-white transition hover:bg-[#760b12]"
      >
        Back to home
      </Link>
    </main>
  );
}
