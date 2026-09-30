import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FormShell } from "../../components/early-access/FormShell";
import {
  inputClassName,
  labelClassName,
  primaryButtonClassName,
  secondaryButtonClassName,
} from "../../components/early-access/form-styles";
import { submitEarlyAccess } from "../../lib/early-access";

type TutorDetails = {
  name: string;
  email: string;
  organisation: string;
};

const teachingTypes = ["Academics", "Tech Skills", "Other"];
const referralSources = ["Instagram", "LinkedIn", "TikTok", "X", "Referral", "Other"];

export function TutorProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tutorDetails = (location.state as { tutorDetails?: TutorDetails } | null)?.tutorDetails;

  const [profile, setProfile] = useState({
    studentCount: "",
    teachingType: "",
    referralSource: "",
    frustration: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  if (!tutorDetails) {
    return <Navigate to="/early-access/tutor" replace />;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError("");
    setIsSubmitting(true);

    const message = await submitEarlyAccess({
      role: "tutor",
      email: tutorDetails.email,
      name: tutorDetails.name,
      organisation: tutorDetails.organisation,
      student_count: profile.studentCount,
      teaching_type: profile.teachingType,
      referral_source: profile.referralSource,
      frustration: profile.frustration,
    });

    setIsSubmitting(false);

    if (message) {
      setSubmissionError(message);
      return;
    }

    navigate("/early-access/tutor/submitted", {
      replace: true,
      state: { submitted: true },
    });
  };

  return (
    <FormShell
      backTo="/early-access/tutor"
      backLabel="Back to tutor form"
      title="Quick Questions"
    >
      <form onSubmit={handleSubmit} className="mt-6 space-y-8">
        <label className={labelClassName}>
          How many students do you have?*
          <select
            required
            value={profile.studentCount}
            onChange={(event) =>
              setProfile({ ...profile, studentCount: event.target.value })
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
            {teachingTypes.map((option) => (
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
                    setProfile({ ...profile, teachingType: event.target.value })
                  }
                  className="h-3 w-3 accent-brand"
                />
                <span className={profile.teachingType === option ? "text-brand" : ""}>
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className={labelClassName}>How did you hear about us?*</legend>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
            {referralSources.map((option) => (
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
                    setProfile({ ...profile, referralSource: event.target.value })
                  }
                  className="h-3 w-3 accent-brand"
                />
                <span className={profile.referralSource === option ? "text-brand" : ""}>
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className={labelClassName}>
          What&apos;s your biggest frustration with managing your classes right now?
          <textarea
            value={profile.frustration}
            onChange={(event) =>
              setProfile({ ...profile, frustration: event.target.value })
            }
            placeholder="Example: Constantly switching between WhatsApp groups, chat, email threads, and multiple LMS portals just to keep everyone aligned..."
            rows={4}
            className={`${inputClassName} h-[76px] resize-none py-3 text-[14px] leading-normal`}
          />
        </label>

        <div className="space-y-2 pt-1">
          {submissionError ? (
            <p
              role="alert"
              className="rounded-md bg-brand-tint px-3 py-2 text-[14px] leading-normal text-brand"
            >
              {submissionError}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className={primaryButtonClassName}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/early-access/tutor")}
            disabled={isSubmitting}
            className={secondaryButtonClassName}
          >
            Back
          </button>
        </div>
      </form>
    </FormShell>
  );
}
