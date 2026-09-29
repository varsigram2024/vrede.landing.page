import { useRef } from "react";
import { gsap } from "gsap";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "../ScrollReveal";
const click = "/images/svg/click.svg";
const calender = "/images/svg/calendar-tick.svg";
const tick = "/images/svg/check.svg";

type Card = {
  title: string;
  description: string;
  svg: string;
  mockupImage?: string;
  accent?: string;
};

const cards: Card[] = [
  {
    title: "Track progress without friction",
    description:
      "Give assignments, collect submissions, and  track progress from the same place you teach.",
    svg: tick,
    mockupImage: "/images/mockups/iphone 45.svg",
    accent: "#FFDBE2",
  },
  {
    title: "Your learners always know what's next.",
    description:
      "Schedule, announcements, materials, deadlines, upcoming classes, all live in one place so your students always know what's next.",
    svg: calender,
    mockupImage: "/images/mockups/iphone 18.svg",
    accent: "#FF6682",
  },
  {
    title: "One click to go live",
    description:
      "Create your live class link inside Vrede, and it's posted straight to the room. Your students join with one click when class starts. No more \"where is the link?\" messages five minutes into class. ",
    svg: click,
    mockupImage: "/images/mockups/iphone 48.svg",
    accent: "#750015",
  },
];

export function TeachingCardsSection() {
  return (
    <section className="bg-stone-50 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow=""
            title="Teaching, organized the way you already think about it."
            description="Vrede is built the way you already picture your class  — one Workspace, one Room per class, and everything that class needs, right inside it. "
            className="mx-auto"
          />
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 120} className="h-full">
              <InteractiveCard
                key={card.title}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 pb-0"
              >
                <div
                  className="mb-5 flex size-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: card.accent ?? "#FF6682" }}
                >
                  <img src={card.svg} alt="" className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-500">
                  {card.description}
                </p>
                {card.mockupImage && (
                  <div className="mt-auto flex justify-center pt-4 pb-0">
                    <img
                      src={card.mockupImage}
                      alt={`${card.title} app screen`}
                      className="bottom-0 block"
                    />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </InteractiveCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InteractiveCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(card, {
      rotateX: -y * 3,
      rotateY: x * 3,
      y: -6,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 900,
    });
  };

  const reset = () => {
    if (ref.current) {
      gsap.to(ref.current, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  return (
    <article
      ref={ref}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      {children}
    </article>
  );
}
