import { supabase } from "./supabase";

export type EarlyAccessRequest = {
  role: "learner" | "tutor";
  email: string;
  name: string | null;
  organisation: string | null;
  student_count: string | null;
  teaching_type: string | null;
  referral_source: string | null;
  frustration: string | null;
};

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

/** Returns an error message to show the user, or null on success. */
export async function submitEarlyAccess(
  request: EarlyAccessRequest,
): Promise<string | null> {
  const { error } = await supabase
    .from("early_access_requests")
    .insert({ ...request, email: normalizeEmail(request.email) });

  if (!error) return null;

  console.error("Supabase submission error:", error);
  return error.code === "23505"
    ? "This email is already on the list."
    : "We could not save your request right now. Please try again.";
}
