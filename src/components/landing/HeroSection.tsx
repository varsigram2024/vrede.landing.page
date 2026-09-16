import { PrimaryButton } from "./PrimaryButton";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "../ScrollReveal";

const badgeData = [
  { label: "Workspace", accent: "#FF383C66", bg: "rgba(0,136,255,0.10)" },
  { label: "Tests", accent: "#34C7594D", bg: "rgba(255,56,60,0.10)" },
  { label: "Calendar", accent: "#0088FF4D", bg: "rgba(255,204,0,0.12)" },
  { label: "Video Lessons", accent: "#FFCC0066", bg: "rgba(255,204,0,0.12)" },
  { label: "Library", accent: "#0088FF4D", bg: "rgba(52,199,89,0.12)" },
  { label: "Live Classes", accent: "#FFCC0066", bg: "rgba(255,56,60,0.10)" },
  { label: "Smart Classes", accent: "#FF383C4D", bg: "rgba(175,82,222,0.12)" },
] as const;



export function HeroSection({ onEarlyAccess }: { onEarlyAccess: () => void }) {
  return (
    <section className="bg-stone-50 px-6 py-8 lg:px-8 lg:py-12">
      <div className="mx-auto flex flex-col items-center gap-8 text-center">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow=""
            title="One workspace for every learning experience"
            description="Vrede brings everything you need to teach and manage your classes from start to finish into one place."
          />
        </ScrollReveal>

        <ScrollReveal delay={150} direction="up">
          <PrimaryButton onClick={onEarlyAccess}>Get Early Access <span aria-hidden>→</span></PrimaryButton>
        </ScrollReveal>

        <ScrollReveal delay={250} direction="fade">
          <div className="relative w-full bg-transparent shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
            <div className="animate-hero-veil absolute inset-0 bg-transparent" />
             <img
            src="/images/joyful-businessman-reacting-good-news-1-5695-25933.png"
            alt="Educator using Vrede"
            className="animate-hero-image rounded-4xl w-full object-cover object-center"
          />

          {badgeData.map((badge, index) => {
            const pos = getBadgePosition(index);
            const dir = getBadgeDirection(index);
            const timing = getBadgeTiming(index);
            const entranceEnd = timing.popDelay + 780; // popDelay + duration

            return (
              <div
                key={badge.label}
                className="animate-badge absolute flex max-w-[clamp(120px,18vw,300px)] origin-center items-center gap-1.5 rounded-md bg-white px-0.5 py-1 sm:gap-2 sm:rounded-2xl sm:px-1.5 sm:py-2 md:px-4 md:py-2 text-[clamp(0.3rem,1.4vw,1.25rem)] font-semibold shadow-lg shadow-black/5 backdrop-blur-sm "
                style={{
                  ...pos,
                  color: "black",
                  borderColor: badge.accent,
                  animationDelay: `${timing.popDelay}ms, ${entranceEnd}ms`,
                  ["--badge-dx" as string]: dir.dx,
                  ["--badge-dy" as string]: dir.dy,
                  ["--badge-rot" as string]: dir.rot,
                  ["--drift-x" as string]: dir.driftX,
                }}
              >
                <div
                  key={badge.label}
                  style={{
                    backgroundColor: badge.accent,
                  }}
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6 md:h-8 md:w-8"
                >
                  <img
                  src={`/images/svg/hero-svg/${index + 1}.svg`}
                  alt=""
                  aria-hidden="true"
                  className="size-2.5 shrink-0 object-contain sm:size-4 md:size-6"
                />
                </div>

                <span className="text-[0.3rem] sm:text-[0.5rem] md:text-[0.75rem]">{badge.label}</span>
              </div>
            );
          })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function getBadgePosition(index: number) {
  const positions = [
    { left: "4%", top: "14%" },
    { left: "20%", top: "39%" },
    { left: "38%", top: "20%" },
    { right: "4%", top: "15%" },
    { right: "8%", top: "43%" },
    { left: "6%", bottom: "10%" },
    { right: "30%", bottom: "10%" },
  ] as const;

  return positions[index];
}

function getBadgeDirection(index: number) {
  // [dx, dy, rotate, driftX] per badge, matching getBadgePosition order
  const directions = [
    { dx: "-28px", dy: "6px", rot: "-10deg", driftX: "3px" },
    { dx: "-24px", dy: "4px", rot: "-8deg", driftX: "2.5px" },
    { dx: "-16px", dy: "10px", rot: "-6deg", driftX: "4px" },
    { dx: "28px", dy: "6px", rot: "10deg", driftX: "-3px" },
    { dx: "24px", dy: "4px", rot: "8deg", driftX: "-2.5px" },
    { dx: "-14px", dy: "-14px", rot: "-7deg", driftX: "3px" },
    { dx: "16px", dy: "-14px", rot: "7deg", driftX: "-3px" },
  ] as const;

  return directions[index];
}

function getBadgeTiming(index: number) {
  const popDelay = 900 + index * 140;   // 900 instead of 120
  const bobDelay = popDelay + 700;
  const driftDelay = popDelay + 1400;

  return { popDelay, bobDelay, driftDelay };
}
