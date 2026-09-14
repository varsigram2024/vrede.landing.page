import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    question: "What is Vrede built for?",
    answer: "Vrede is designed to help educators and cohort managers run learning spaces, class communication, and assignments from one place.",
  },
  {
    question: "Can I use it for live classes and resources?",
    answer: "Yes. The platform is structured to support live sessions, announcements, lesson resources, and class-level workflows.",
  },
  {
    question: "Does Vrede work for communities and bootcamps?",
    answer: "Yes. It works well for courses, bootcamps, workshops, and ongoing learning communities that need organized collaboration.",
  },
  {
    question: "How does it reduce context switching?",
    answer: "By keeping teaching tools, communication, and learning materials in one workspace instead of spreading them across multiple apps.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="Support"
          title="Frequently Asked Questions"
          description="A few quick answers about how Vrede fits into modern learning workflows."
          className="mx-auto"
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq, defaultOpen = false }: { faq: (typeof faqs)[number]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <button
      type="button"
      onClick={() => setOpen((current) => !current)}
      className="w-full rounded-2xl border border-stone-200 bg-stone-50 p-6 text-left transition hover:border-[#750015]/30 hover:bg-white"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-semibold text-stone-950">{faq.question}</span>
        <span className="text-xl font-light text-stone-400">{open ? "−" : "+"}</span>
      </div>
      {open ? <p className="mt-3 text-sm leading-6 text-stone-500">{faq.answer}</p> : null}
    </button>
  );
}
