import { useState } from "react";
import { supabase } from "../../lib/supabase";

type Role = "learner" | "tutor";
type Step =
  | "role"
  | "learner"
  | "tutor-details"
  | "tutor-profile"
  | "submitted";

type EarlyAccessModalProps = {
  onClose: () => void;
};



const RED = "#8B0D16";

const inputClassName =
  "mt-1.5 h-11 w-full rounded-md border border-[#e5e7eb] bg-white px-3 text-[11px] text-[#171717] outline-none transition placeholder:text-[#9ca3af] focus:border-[#8B0D16]";

const labelClassName =
  "block text-[10px] font-medium leading-[14px] text-[#171717]";

const buttonClassName =
  "h-[34px] w-full rounded-md bg-[#8B0D16] text-[10px] font-semibold text-white transition hover:bg-[#760b12] active:scale-[0.99]";

export function EarlyAccessModal({ onClose }: EarlyAccessModalProps) {
  const [step, setStep] = useState<Step>("role");
  const [role, setRole] = useState<Role | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [learnerEmail, setLearnerEmail] = useState("");

  const [tutorDetails, setTutorDetails] = useState({
    name: "",
    email: "",
    organisation: "",
  });

  const [tutorProfile, setTutorProfile] = useState({
    studentCount: "",
    teachingType: "",
    referralSource: "",
    frustration: "",
  });

  const selectRole = (selectedRole: Role) => {
    setRole(selectedRole);
  };

  const continueFromRole = () => {
    if (!role) return;

    setStep(role === "learner" ? "learner" : "tutor-details");
  };

  const handleTutorDetailsSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setStep("tutor-profile");
  };

const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  if (!role) return;

  setSubmissionError("");
  setIsSubmitting(true);

  const { error } = await supabase
    .from("early_access_requests")
    .insert({
      role,
      email:
        role === "learner"
          ? learnerEmail
          : tutorDetails.email,

      name:
        role === "tutor"
          ? tutorDetails.name
          : null,

      organisation:
        role === "tutor"
          ? tutorDetails.organisation
          : null,

      student_count:
        role === "tutor"
          ? tutorProfile.studentCount
          : null,

      teaching_type:
        role === "tutor"
          ? tutorProfile.teachingType
          : null,

      referral_source:
        role === "tutor"
          ? tutorProfile.referralSource
          : null,

      frustration:
        role === "tutor"
          ? tutorProfile.frustration
          : null,
    });

  if (error) {
    console.error("Supabase submission error:", error);
    setSubmissionError(
      error.code === "23505"
        ? "This email is already on the list."
        : "We could not save your request right now. Please try again."
    );
    setIsSubmitting(false);
    return;
  }

  setIsSubmitting(false);
  setStep("submitted");
};

  const goBack = () => {
    if (step === "learner" || step === "tutor-details") {
      setRole(null);
      setStep("role");
      return;
    }

    if (step === "tutor-profile") {
      setStep("tutor-details");
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="mx-auto min-h-screen w-full px-5">
        {step === "submitted" ? (
          <SubmittedScreen onClose={onClose} />
        ) : (
          <div className="pt-[130px] pb-10">
            {step === "role" && (
              <RoleSelection
                onSelect={selectRole}
                onContinue={continueFromRole}
                onClose={onClose}
                selectedRole={role}
              />
            )}

            {step === "learner" && (
              <LearnerForm
                email={learnerEmail}
                setEmail={setLearnerEmail}
                onSubmit={handleSubmit}
                onBack={goBack}
                isSubmitting={isSubmitting}
                submissionError={submissionError}
              />
            )}

            {step === "tutor-details" && (
              <TutorDetailsForm
                details={tutorDetails}
                setDetails={setTutorDetails}
                onSubmit={handleTutorDetailsSubmit}
                onBack={goBack}
              />
            )}

            {step === "tutor-profile" && (
              <TutorProfileForm
                profile={tutorProfile}
                setProfile={setTutorProfile}
                onSubmit={handleSubmit}
                onBack={goBack}
                isSubmitting={isSubmitting}
                submissionError={submissionError}
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
}

/* ---------------------------------- */
/* Role selection */
/* ---------------------------------- */

function RoleSelection({
  onSelect,
  onContinue,
  onClose,
  selectedRole,
}: {
  onSelect: (role: Role) => void;
  onContinue: () => void;
  onClose: () => void;
  selectedRole: Role | null;
}) {
  return (
    <div className="w-full pt-6 sm:pt-12">
      <button
        type="button"
        onClick={onClose}
        aria-label="Back to Vrede"
        className="flex size-10 items-center justify-center rounded-full bg-[#f5f5f5] text-2xl leading-none text-[#171717] transition hover:bg-[#ededed]"
      >
        <span aria-hidden>‹</span>
      </button>

      <div className="mx-auto mt-24 max-w-[492px] rounded-2xl bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:mt-28 sm:p-6">
        <h1 className="text-[17px] font-semibold tracking-[-0.02em]">
          Are you a tutor or learner?
        </h1>

        <div className="mt-7 grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onSelect("learner")}
          aria-pressed={selectedRole === "learner"}
          className={`relative flex min-h-[112px] items-center gap-3 rounded-xl border p-3 text-left transition sm:p-4 ${
            selectedRole === "learner"
              ? "border-[#8B0D16] bg-[#fff0f2]"
              : "border-[#d9d9d9] bg-white hover:border-[#8B0D16]/60"
          }`}
        >
          <span className={`absolute left-2.5 top-2.5 size-3 rounded-full border ${selectedRole === "learner" ? "border-[#8B0D16] bg-[#8B0D16]" : "border-[#bdbdbd]"}`} />
          <img src="/images/svg/learner.svg" alt="" className="ml-5 size-14 object-contain sm:size-16" />
          <span className="text-[12px] font-semibold">Learner</span>
        </button>

        <button
          type="button"
          onClick={() => onSelect("tutor")}
          aria-pressed={selectedRole === "tutor"}
          className={`relative flex min-h-[112px] items-center gap-3 rounded-xl border p-3 text-left transition sm:p-4 ${
            selectedRole === "tutor"
              ? "border-[#8B0D16] bg-[#fff0f2]"
              : "border-[#d9d9d9] bg-white hover:border-[#8B0D16]/60"
          }`}
        >
          <span className={`absolute left-2.5 top-2.5 size-3 rounded-full border ${selectedRole === "tutor" ? "border-[#8B0D16] bg-[#8B0D16]" : "border-[#bdbdbd]"}`} />
          <img src="/images/svg/tutor.svg" alt="" className="ml-5 size-14 object-contain sm:size-16" />
          <span className="text-[12px] font-semibold">Tutor</span>
        </button>
        </div>

        <button
          type="button"
          onClick={onContinue}
          disabled={!selectedRole}
          className="mt-4 h-9 w-full rounded-md bg-[#8B0D16] text-[10px] font-semibold text-white transition hover:bg-[#760b12] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Learner */
/* ---------------------------------- */

function LearnerForm({
  email,
  setEmail,
  onSubmit,
  onBack,
  isSubmitting,
  submissionError,
}: {
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
  isSubmitting: boolean;
  submissionError: string;
}) {
  return (
    <div>
      <ScreenHeader
        title="Get Early Access"
        description="Join forward-thinking educators running classes on Vrede."
      />

      <form onSubmit={onSubmit} className="mt-6">
        <label className={labelClassName}>
          Email*

          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className={inputClassName}
          />
        </label>

        <div className="mt-[58px]">
            <FormActions
                onBack={onBack}
                submitLabel="Continue"
                showBack
                isSubmitting={isSubmitting}
                submissionError={submissionError}
            />
            </div>
      </form>
    </div>
  );
}

/* ---------------------------------- */
/* Tutor details */
/* ---------------------------------- */

function TutorDetailsForm({
  details,
  setDetails,
  onSubmit,
  onBack,
}: {
  details: {
    name: string;
    email: string;
    organisation: string;
  };
  setDetails: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      organisation: string;
    }>
  >;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}) {
  return (
    <div>
      <ScreenHeader
        title="Get Early Access"
        description="Join forward-thinking educators running classes on Vrede."
      />

      <form onSubmit={onSubmit} className="mt-6 space-y-5">
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
            <FormActions
                onBack={onBack}
                submitLabel="Continue"
                showBack

            />
            </div>
      </form>
    </div>
  );
}

/* ---------------------------------- */
/* Tutor profile */
/* ---------------------------------- */

function TutorProfileForm({
  profile,
  setProfile,
  onSubmit,
  onBack,
  isSubmitting,
  submissionError,
}: {
  profile: {
    studentCount: string;
    teachingType: string;
    referralSource: string;
    frustration: string;
  };
  setProfile: React.Dispatch<
    React.SetStateAction<{
      studentCount: string;
      teachingType: string;
      referralSource: string;
      frustration: string;
    }>
  >;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
  isSubmitting: boolean;
  submissionError: string;
}) {
  return (
    <div>
      <ScreenHeader
        title="Quick Questions"
        description="Join forward-thinking educators running classes on Vrede."
      />

      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        {/* Student count */}

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

        {/* Teaching type */}

        <fieldset>
          <legend className={labelClassName}>
            What do you teach or train?*
          </legend>

          <div className="mt-2 flex items-center gap-5">
            {["Academics", "Tech Skills", "Other"].map(
              (option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-1.5 text-[9px] text-[#555]"
                >
                  <input
                    required
                    type="radio"
                    name="teachingType"
                    value={option}
                    checked={
                      profile.teachingType === option
                    }
                    onChange={(event) =>
                      setProfile({
                        ...profile,
                        teachingType: event.target.value,
                      })
                    }
                    className="h-3 w-3 accent-[#8B0D16]"
                  />

                  <span
                    className={
                      profile.teachingType === option
                        ? "text-[#8B0D16]"
                        : ""
                    }
                  >
                    {option}
                  </span>
                </label>
              )
            )}
          </div>
        </fieldset>

        {/* Referral */}

        <fieldset>
            <legend className={labelClassName}>
                How did you hear about us?*
            </legend>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                {[
                "Instagram",
                "LinkedIn",
                "TikTok",
                "X",
                "Referral",
                "Other",
                ].map((option) => (
                <label
                    key={option}
                    className="flex cursor-pointer items-center gap-1.5 text-[9px] text-[#555]"
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

                    <span
                    className={
                        profile.referralSource === option
                        ? "text-[#8B0D16]"
                        : ""
                    }
                    >
                    {option}
                    </span>
                </label>
                ))}
            </div>
        </fieldset>

        {/* Frustration */}

        <label className={labelClassName}>
          What&apos;s your biggest frustration with managing
          your classes right now?

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
            className={`${inputClassName} h-[76px] resize-none py-3 text-[9px] leading-4`}
          />
        </label>

        <div className="pt-1">
          <FormActions
            onBack={onBack}
            submitLabel="Submit Request"
            showBack
            isSubmitting={isSubmitting}
            submissionError={submissionError}
          />
        </div>
      </form>
    </div>
  );
}

/* ---------------------------------- */
/* Header */
/* ---------------------------------- */

function ScreenHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="text-[17px] font-semibold tracking-[-0.02em]">
        {title}
      </h1>

      <p className="mt-1 text-[9px] leading-[14px] text-[#777]">
        {description}
      </p>
    </div>
  );
}

/* ---------------------------------- */
/* Buttons */
/* ---------------------------------- */

function FormActions({
  onBack,
  submitLabel,
  showBack,
  isSubmitting = false,
  submissionError = "",
}: {
  onBack: () => void;
  submitLabel: string;
  showBack: boolean;
  isSubmitting?: boolean;
  submissionError?: string;
}) {
  return (
    <div className="space-y-2">
      {submissionError ? (
        <p role="alert" className="rounded-md bg-[#fff1f2] px-3 py-2 text-[10px] leading-4 text-[#8B0D16]">
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
        {isSubmitting ? "Submitting..." : submitLabel}
      </button>

      {showBack && (
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="h-[34px] w-full rounded-md bg-[#eeeeee] text-[10px] font-semibold text-[#171717] transition hover:bg-[#e5e5e5]"
        >
          Back
        </button>
      )}
    </div>
  );
}

/* ---------------------------------- */
/* Submitted */
/* ---------------------------------- */

function SubmittedScreen({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full text-xl text-white"
        style={{ backgroundColor: RED }}
      >
        ✓
      </div>

      <h2 className="mt-5 text-[18px] font-semibold">
        You&apos;re on the list
      </h2>

      <p className="mt-2 max-w-[260px] text-[10px] leading-5 text-[#777]">
        Thanks for sharing your details. We&apos;ll be in touch
        when early access opens.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-6 h-[34px] rounded-md px-8 text-[10px] font-semibold text-white"
        style={{ backgroundColor: RED }}
      >
        Done
      </button>
    </div>
  );
}