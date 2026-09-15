import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "../ScrollReveal";
import briefcase from "../../../public/images/svg/briefcase.svg";
import calender from "../../../public/images/svg/calendar-tick.svg";
import tick from "../../../public/images/svg/icons_circle.svg";

type Card = {
  title: string;
  description: string;
  svg: string;
  mockupImage?: string;
};

const cards: Card[] = [
  {
    title: "Create structured learning spaces",
    description:
      "Organize cohorts, lessons, assignments, and resources in a way that keeps everything connected and easy to find.",
    svg: briefcase,
    mockupImage: "/images/mockups/iphone 17.svg",
  },
  {
    title: "Manage discussions in context",
    description:
      "Keep announcements, Q&A, and class updates tied to the right workspace so important messages never get buried.",
    svg: calender,
    mockupImage: "/images/mockups/iphone 18.svg",
  },
  {
    title: "Track progress without friction",
    description:
      "Use one workspace to monitor participation, submission flow, and learning activity across your program.",
    svg: tick,
    mockupImage: "/images/mockups/iphone 45.svg",
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
            title="Simply structured teaching and learning"
            description="Vrede gives educators one place to run classes, workshops, bootcamps, training programs, and learning communities without juggling disconnected tools."
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
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#750015]">
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
                      className="block bottom-0"
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