import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

const inputClassName =
  "mt-1.5 h-11 w-full rounded-md border border-[#e5e7eb] bg-white px-3 text-[14px] text-[#171717] outline-none transition placeholder:text-[#9ca3af] focus:border-[#8B0D16]";
const labelClassName =
  "block text-[14px] font-medium leading-normal text-[#171717]";
const buttonClassName =
  "h-[34px] w-full rounded-md bg-[#8B0D16] text-[14px] font-semibold text-white transition hover:bg-[#760b12] active:scale-[0.99]";

type TutorDetails = {
  name: string;
  email: string;
  organisation: string;
};

export function TutorProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tutorDetails = (location.state as { tutorDetails?: TutorDetails } | null)?.tutorDetails ?? {
    name: "",
    email: "",
    organisation: "",
  };

  const [profile, setProfile] = useState({
    studentCount: "",
    teachingType: "",
    referralSource: "",
    frustration: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError("");
    setIsSubmitting(true);

    const { error } = await supabase.from("early_access_requests").insert({
      role: "tutor",
      email: tutorDetails.email,
      name: tutorDetails.name,
      organisation: tutorDetails.organisation,
      student_count: profile.studentCount,
      teaching_type: profile.teachingType,
      referral_source: profile.referralSource,
      frustration: profile.frustration,
    });

    if (error) {
      console.error("Supabase submission error:", error);
      setSubmissionError(
        error.code === "23505"
          ? "This email is already on the list."
          : "We could not save your request right now. Please try again.",
      );
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    navigate("/early-access/tutor/submitted");
  };

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8">
        <button
          type="button"
          onClick={() => navigate("/early-access/tutor")}
          aria-label="Back to tutor form"
          className="flex size-10 items-center justify-center rounded-full text-2xl leading-none text-[#171717] transition hover:bg-[#ededed]"
        >
          <span aria-hidden>‹</span>
        </button>

        <div className="mx-auto mt-24 w-full max-w-[492px] rounded-2xl bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-4">
          <div>
            <h1 className="text-[24px] font-semibold tracking-[-0.02em]">
              Quick Questions
            </h1>
            <p className="mt-1 text-[14px] leading-normal text-[#777]">
              Join forward-thinking educators running classes on Vrede.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-8">
            <label className={labelClassName}>
              How many students do you have?*
              <select
                required
                value={profile.studentCount}
                onChange={(event) =>
                  setProfile({
                    ...profile,
                    studentCount: event.target.value,
                  })
                }
                className={`${inputClassName} appearance-none`}
              >
                <option value="">Select a range</option>
                <option value="1-20">1 - 20 students</option>
                <option value="21-50">21 - 50 students</option>
                <option value="50-200">50 - 200 students</option>
                <option value="201+">200+ students</option>
              </select>
            </label>

            <fieldset>
              <legend className={labelClassName}>What do you teach or train?*</legend>
              <div className="mt-2 flex items-center gap-5">
                {["Academics", "Tech Skills", "Other"].map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-1.5 text-[14px] text-[#555]"
                  >
                    <input
                      required
                      type="radio"
                      name="teachingType"
                      value={option}
                      checked={profile.teachingType === option}
                      onChange={(event) =>
                        setProfile({
                          ...profile,
                          teachingType: event.target.value,
                        })
                      }
                      className="h-3 w-3 accent-[#8B0D16]"
                    />
                    <span className={profile.teachingType === option ? "text-[#8B0D16]" : ""}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className={labelClassName}>How did you hear about us?*</legend>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                {["Instagram", "LinkedIn", "TikTok", "X", "Referral", "Other"].map(
                  (option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-1.5 text-[14px] text-[#555]"
                    >
                      <input
                        required
                        type="radio"
                        name="referralSource"
                        value={option}
                        checked={profile.referralSource === option}
                        onChange={(event) =>
                          setProfile({
                            ...profile,
                            referralSource: event.target.value,
                          })
                        }
                        className="h-3 w-3 accent-[#8B0D16]"
                      />
                      <span className={profile.referralSource === option ? "text-[#8B0D16]" : ""}>
                        {option}
                      </span>
                    </label>
                  ),
                )}
              </div>
            </fieldset>

            <label className={labelClassName}>
              What&apos;s your biggest frustration with managing your classes right now?
              <textarea
                value={profile.frustration}
                onChange={(event) =>
                  setProfile({
                    ...profile,
                    frustration: event.target.value,
                  })
                }
                placeholder="Example: Constantly switching between WhatsApp groups, chat, email threads, and multiple LMS portals just to keep everyone aligned..."
                rows={4}
                className={`${inputClassName} h-[76px] resize-none py-3 text-[14px] leading-normal`}
              />
            </label>

            <div className="pt-1">
              <div className="space-y-2">
                {submissionError ? (
                  <p
                    role="alert"
                    className="rounded-md bg-[#fff1f2] px-3 py-2 text-[14px] leading-normal text-[#8B0D16]"
                  >
                    {submissionError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${buttonClassName} ${
                    isSubmitting ? "cursor-not-allowed opacity-60" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/early-access/tutor")}
                  disabled={isSubmitting}
                  className="h-[34px] w-full rounded-md bg-[#eeeeee] text-[14px] font-semibold text-[#171717] transition hover:bg-[#e5e5e5]"
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
