import { PrimaryButton } from "./PrimaryButton";

export function FooterSection() {
  return (
    <footer className="bg-[#750015] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Transform your learning experience</h2>
          <p className="text-sm leading-6 text-white/75 sm:text-base">
            Join educators and modern cohorts running Vrede to deliver clear, connected, and organized classes.
          </p>
        </div>

        <PrimaryButton variant="ghost" className="border-white text-white hover:bg-white/10">
          Request Invitation
          <span aria-hidden>→</span>
        </PrimaryButton>

        <div className="flex flex-col items-center gap-4 border-t border-white/15 pt-8 text-xs text-white/75 sm:flex-row sm:justify-between sm:gap-8">
          <div className="text-sm font-semibold text-white">Vrede</div>
          <div className="flex flex-wrap justify-center gap-4">
            <span>Security</span>
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Status</span>
            <span>Contact</span>
          </div>
          <span>© 2026 Vrede. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
