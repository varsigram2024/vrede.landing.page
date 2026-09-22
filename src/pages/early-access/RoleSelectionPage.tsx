import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Role = "learner" | "tutor";

const RED = "#8B0D16";

export function RoleSelectionPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleContinue = () => {
    if (!selectedRole) return;

    const path =
      selectedRole === "learner"
        ? "/early-access/learner"
        : "/early-access/tutor";

    navigate(path);
  };

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Back to Vrede"
          className="flex size-10 items-center justify-center rounded-full text-2xl leading-none text-[#171717] transition hover:bg-[#ededed]"
        >
          <span aria-hidden>‹</span>
        </button>

        <div className="mx-auto mt-24 w-full max-w-[492px] rounded-2xl bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:mt-28 sm:p-4">
          <h1 className="text-center text-[22px] font-semibold tracking-[-0.02em]">
            Are you a tutor or learner?
          </h1>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSelectedRole("tutor")}
              aria-pressed={selectedRole === "tutor"}
              className={`relative flex min-h-[112px] items-center gap-3 rounded-xl border p-3 text-left transition sm:p-4 ${
                selectedRole === "tutor"
                  ? "border-[#8B0D16] bg-[#fff0f2]"
                  : "border-[#d9d9d9] bg-white hover:border-[#8B0D16]/60"
              }`}
            >
              <span
                className={`absolute left-2.5 top-2.5 size-3 rounded-full border ${
                  selectedRole === "tutor" ? "border-[#8B0D16]" : "border-[#bdbdbd]"
                }`}
              >
                <span
                  className={`${
                    selectedRole === "tutor"
                      ? "absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B0D16]"
                      : "absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent"
                  }`}
                />
              </span>
              <img src="/images/svg/tutor.svg" alt="" className="size-12 object-contain sm:size-16" />
              <span className="text-[10px] font-semibold sm:text-[18px]">Tutor</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole("learner")}
              aria-pressed={selectedRole === "learner"}
              className={`relative flex items-center gap-3 rounded-xl border p-3 text-left transition sm:p-4 ${
                selectedRole === "learner"
                  ? "border-[#8B0D16] bg-[#fff0f2]"
                  : "border-[#d9d9d9] bg-white hover:border-[#8B0D16]/60"
              }`}
            >
              <span
                className={`absolute left-2.5 top-2.5 size-3 rounded-full border ${
                  selectedRole === "learner" ? "border-[#8B0D16]" : "border-[#bdbdbd]"
                }`}
              >
                <span
                  className={`${
                    selectedRole === "learner"
                      ? "absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B0D16]"
                      : "absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent"
                  }`}
                />
              </span>
              <img src="/images/svg/learner.svg" alt="" className="size-12 object-contain sm:size-16" />
              <span className="text-[10px] font-semibold sm:text-[18px]">Learner</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!selectedRole}
            className="mt-4 h-9 w-full rounded-md bg-[#8B0D16] text-[10px] font-semibold text-white transition hover:bg-[#760b12] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

export { RED };
