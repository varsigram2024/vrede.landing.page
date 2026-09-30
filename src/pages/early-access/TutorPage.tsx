import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormShell } from "../../components/early-access/FormShell";
import {
  inputClassName,
  labelClassName,
  primaryButtonClassName,
  secondaryButtonClassName,
} from "../../components/early-access/form-styles";

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
    <FormShell
      backTo="/early-access"
      backLabel="Back to role selection"
      title="Get Early Access"
    >
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <label className={labelClassName}>
          Name*
          <input
            required
            value={details.name}
            onChange={(event) => setDetails({ ...details, name: event.target.value })}
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
            onChange={(event) => setDetails({ ...details, email: event.target.value })}
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
              setDetails({ ...details, organisation: event.target.value })
            }
            placeholder="Enter your school or training platform name"
            className={inputClassName}
          />
        </label>

        <div className="space-y-2 pt-[45px]">
          <button type="submit" className={primaryButtonClassName}>
            Continue
          </button>

          <button
            type="button"
            onClick={() => navigate("/early-access")}
            className={secondaryButtonClassName}
          >
            Back
          </button>
        </div>
      </form>
    </FormShell>
  );
}
