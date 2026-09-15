type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-center text-center lg:items-start lg:text-left";

  return (
    <div className={`flex max-w-4xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#750015]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-base leading-7 text-stone-500 sm:text-lg">{description}</p> : null}
    </div>
  );
}
