import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormShell } from "../../components/early-access/FormShell";
import {
  inputClassName,
  labelClassName,
  primaryButtonClassName,
  secondaryButtonClassName,
} from "../../components/early-access/form-styles";
import { submitEarlyAccess } from "../../lib/early-access";

export function LearnerPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError("");
    setIsSubmitting(true);

    const message = await submitEarlyAccess({
      role: "learner",
      email,
      name: null,
      organisation: null,
      student_count: null,
      teaching_type: null,
      referral_source: null,
      frustration: null,
    });

    setIsSubmitting(false);

    if (message) {
      setSubmissionError(message);
      return;
    }

    navigate("/early-access/learner/submitted", {
      replace: true,
      state: { submitted: true },
    });
  };

  return (
    <FormShell
      backTo="/early-access"
      backLabel="Back to role selection"
      title="Get Early Access"
    >
      <form onSubmit={handleSubmit} className="mt-6">
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

        <div className="mt-[58px] space-y-2">
          {submissionError ? (
            <p
              role="alert"
              className="rounded-md bg-brand-tint px-3 py-2 text-[14px] leading-4 text-brand"
            >
              {submissionError}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className={primaryButtonClassName}
          >
            {isSubmitting ? "Submitting..." : "Continue"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/early-access")}
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
