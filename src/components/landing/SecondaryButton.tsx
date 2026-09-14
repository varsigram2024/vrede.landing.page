import type { ReactNode } from "react";

type SecondaryButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "filled" | "ghost";
};

export function SecondaryButton({ children, className = "", variant = "filled" }: SecondaryButtonProps) {
  const filled =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#fffff] px-5 py-3 text-sm font-semibold text-[#00000] transition hover:bg-[#ffffff]";
  const ghost =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-[#750015] px-5 py-3 text-sm font-semibold text-[#750015] transition hover:bg-[#750015]";

  return <button className={`${variant === "filled" ? filled : ghost} ${className}`}>{children}</button>;
}
