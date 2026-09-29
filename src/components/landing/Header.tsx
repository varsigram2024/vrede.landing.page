import { Link } from "react-router-dom";
import { PrimaryButton } from "./PrimaryButton";

const logo = "/logo.svg";

export function Header({ onEarlyAccess }: { onEarlyAccess: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/50 backdrop-blur-md">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="place-items-center text-white">
            <Link to="/" aria-label="Vrede home"><img src={logo} alt="" className="size-6" /></Link>
          </div>
          <div>
            <p className="text-lg font-bold text-stone-950">Vrede</p>
          </div>
        </div>

        <PrimaryButton onClick={onEarlyAccess} className="hidden! md:inline-flex!">
          Get Early Access
          <span aria-hidden>→</span>
        </PrimaryButton>
      </div>
    </header>
  );
}
