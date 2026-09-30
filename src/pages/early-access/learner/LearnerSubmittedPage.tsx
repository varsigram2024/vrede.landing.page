import { Navigate, useLocation, useNavigate } from "react-router-dom";

export function LearnerSubmittedPage() {
  const navigate = useNavigate();
  const location = useLocation();

  if (!(location.state as { submitted?: boolean } | null)?.submitted) {
    return <Navigate to="/early-access" replace />;
  }

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl text-white">
          ✓
        </div>

        <h2 className="mt-5 text-[18px] font-semibold">You&apos;re on the list</h2>

        <p className="mt-2 max-w-[260px] text-[10px] leading-5 text-[#777]">
          Thanks for sharing your details. We&apos;ll be in touch when early access opens.
        </p>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-6 h-[34px] rounded-md bg-brand px-8 text-[10px] font-semibold text-white"
        >
          Done
        </button>
      </div>
    </main>
  );
}
