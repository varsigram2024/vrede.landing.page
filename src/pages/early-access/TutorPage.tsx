import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inputClassName =
  "mt-1.5 h-11 w-full rounded-md border border-[#e5e7eb] bg-white px-3 text-[11px] text-[#171717] outline-none transition placeholder:text-[#9ca3af] focus:border-[#8B0D16]";
const labelClassName =
  "block text-[10px] font-medium leading-[14px] text-[#171717]";
const buttonClassName =
  "h-[34px] w-full rounded-md bg-[#8B0D16] text-[10px] font-semibold text-white transition hover:bg-[#760b12] active:scale-[0.99]";

export function TutorPage() {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    email: "",
    organisation: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/early-access/tutor-profile", { state: { tutorDetails: details } });
  };

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8">
        <button
          type="button"
          onClick={() => navigate("/early-access")}
          aria-label="Back to role selection"
          className="flex size-10 items-center justify-center rounded-full text-2xl leading-none text-[#171717] transition hover:bg-[#ededed]"
        >
          <span aria-hidden>‹</span>
        </button>

        <div className="mx-auto mt-24 w-full max-w-[492px] rounded-2xl bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-4">
          <div>
            <h1 className="text-[17px] font-semibold tracking-[-0.02em]">
              Get Early Access
            </h1>
            <p className="mt-1 text-[9px] leading-[14px] text-[#777]">
              Join forward-thinking educators running classes on Vrede.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <label className={labelClassName}>
              Name*
              <input
                required
                value={details.name}
                onChange={(event) =>
                  setDetails({
                    ...details,
                    name: event.target.value,
                  })
                }
                placeholder="Your name"
                className={inputClassName}
              />
            </label>

            <label className={labelClassName}>
              Email*
              <input
                required
                type="email"
                value={details.email}
                onChange={(event) =>
                  setDetails({
                    ...details,
                    email: event.target.value,
                  })
                }
                placeholder="you@example.com"
                className={inputClassName}
              />
            </label>

            <label className={labelClassName}>
              Name of organisation*
              <input
                required
                value={details.organisation}
                onChange={(event) =>
                  setDetails({
                    ...details,
                    organisation: event.target.value,
                  })
                }
                placeholder="Enter your school or training platform name"
                className={inputClassName}
              />
            </label>

            <div className="pt-[45px]">
              <div className="space-y-2">
                <button type="submit" className={buttonClassName}>
                  Continue
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/early-access")}
                  className="h-[34px] w-full rounded-md bg-[#eeeeee] text-[10px] font-semibold text-[#171717] transition hover:bg-[#e5e5e5]"
                >
                  Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
