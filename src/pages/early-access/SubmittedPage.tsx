import { useNavigate } from "react-router-dom";

const RED = "#8B0D16";

export function SubmittedPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full text-xl text-white"
          style={{ backgroundColor: RED }}
        >
          ✓
        </div>

        <h2 className="mt-5 text-[18px] font-semibold">You&apos;re on the list</h2>

        <p className="mt-2 max-w-[260px] text-[10px] leading-5 text-[#777]">
          Thanks for sharing your details. We&apos;ll be in touch when early access opens.
        </p>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-6 h-[34px] rounded-md px-8 text-[10px] font-semibold text-white"
          style={{ backgroundColor: RED }}
        >
          Done
        </button>
      </div>
    </main>
  );
}
