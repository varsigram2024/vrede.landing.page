import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type FormShellProps = {
  backTo: string;
  backLabel: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function FormShell({
  backTo,
  backLabel,
  title,
  subtitle = "Join forward-thinking educators running classes on Vrede.",
  children,
}: FormShellProps) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8">
        <button
          type="button"
          onClick={() => navigate(backTo)}
          aria-label={backLabel}
          className="flex size-10 items-center justify-center rounded-full text-2xl leading-none text-[#171717] transition hover:bg-[#ededed]"
        >
          <span aria-hidden>‹</span>
        </button>

        <div className="mx-auto mt-24 w-full max-w-[492px] rounded-2xl bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-4">
          <div>
            <h1 className="text-[24px] font-semibold tracking-[-0.02em]">{title}</h1>
            <p className="mt-1 text-[14px] leading-normal text-[#777]">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
