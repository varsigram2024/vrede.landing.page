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
          <div className="mt-4 w-full overflow-x-auto pb-2">
            <div className="flex w-max min-w-full gap-3">
              {[
                ["meeting.svg", "Meeting"],
                ["tasks.svg", "Tasks"],
                ["library.svg", "Library"],
                ["assignments.svg", "Assignments"],
                ["calendar.svg", "Calender"],
              ].map(([svg, label]) => (
                <div
                  key={svg}
                  className="
                    flex shrink-0 items-center gap-2
                    rounded-xl
                    p-2
                    shadow-[0_3.325px_6.65px_0_rgba(0,0,0,0.13)]
                  "
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#FF6682] p-1 sm:h-7 sm:w-7">
                    <img
                      src={`/images/svg/feature/${svg}`}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </span>

                  <span className="whitespace-nowrap text-[0.6rem] font-light sm:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
    </div>
  );
}
