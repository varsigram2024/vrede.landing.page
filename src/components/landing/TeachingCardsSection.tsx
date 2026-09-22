import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "../ScrollReveal";
import click from "../../../public/images/svg/click.svg";
import calender from "../../../public/images/svg/calendar-tick.svg";
import tick from "../../../public/images/svg/check.svg";

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
              <article
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
                      alt="Mockup"
                      className="bottom-0 block"
                    />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}