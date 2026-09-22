type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  withSVG?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  withSVG = false,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-center text-center lg:items-start lg:text-left";

  return (
    <div className={`flex max-w-4xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#750015]">{eyebrow}</p> : null}
      <h2 className="text-xl font-bold tracking-tight text-stone-950 sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-[0.75rem] leading-[150%] text-[#626770] sm:text-lg">{description}</p> : null}
      {withSVG ? (
          <div className="mt-4 w-full flex flex-row items-center flex-wrap justify-between">
            {[
              ["calendar.svg", "Calender"],
              ["assignments.svg", "Tests"],
              ["meeting.svg", "Classroom"],
              ["library.svg", "Library"],
              ["tasks.svg", "Tasks"],
            ].map(([svg, label]) => (
              <div key={svg} className="flex items-center gap-3 rounded-xl border-transparent p-2 shadow-[0_3.325px_6.65px_0_rgba(0,0,0,0.13)]">
                <span className="bg-[#FF6682] p-1 rounded-sm aspect-ratio flex items-center justify-center">
                  <img src={`/images/svg/feature/${svg}`} alt="" className="w-full" />
                </span>
                <span className="text-[0.4rem] sm:text-xs font-light">{label}</span>
              </div>
            ))}
          </div>
        ) : null}
    </div>
  );
}
