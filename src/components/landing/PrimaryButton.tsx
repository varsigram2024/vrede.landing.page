import type { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "filled" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({ children, className = "", variant = "filled", ...props }: PrimaryButtonProps) {
  const filled =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#750015] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5d0011]";
  const ghost =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-[#750015] px-5 py-3 text-sm font-semibold text-[#750015] transition hover:bg-[#750015]/5";

  return <button {...props} className={`${variant === "filled" ? filled : ghost} ${className}`}>{children}</button>;
}
