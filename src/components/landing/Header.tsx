import { PrimaryButton } from "./PrimaryButton";
import logo from "/images/logo.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="place-items-center text-white">
            <img src={logo} alt="Vrede Logo" className="size-6" />
          </div>
          <div>
            <p className="text-lg font-bold text-stone-950">Vrede</p>
          </div>
        </div>

        <PrimaryButton>
          Get Early Access
          <span aria-hidden>→</span>
        </PrimaryButton>
      </div>
    </header>
  );
}
