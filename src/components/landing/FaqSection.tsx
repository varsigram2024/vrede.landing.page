import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "../ScrollReveal";

const faqs = [
  {
    question: "Who is Vrede built for?",
    answer: "Vrede is for independent tutors, educators, and facilitators who run structured, cohort-based learning experiences. If you teach a group of students over a set period and spend hours managing the logistics around it, Vrede is built for you.",
  },
  {
    question: "I already have a setup using Google Drive, WhatsApp, Zoom, and Forms. Why should I switch?",
    answer: "Because those apps were built for general chat and work , not for running a class. When you stitch them together, you become the one holding everything in your head: resending links, matching submissions, and chasing assignments. Vrede replaces that patchwork with one workspace designed for teaching. You don't lose the tools you already like; you just stop being the search engine for your own class.",
  },
  {
    question: "What happens to my current class materials?",
    answer: "You don't have to re-record your lessons or rebuild your curriculum from scratch. You can bring your existing YouTube videos, files and live class workflows straight into your Vrede room.",
  },
  {
    question: "Is Vrede only for universities?",
    answer: "No. It can be used for universities, professional training programs, bootcamps, workshops, learning communities, and corporate training.",
  },
  {
    question: "How is Vrede different from regular LMS platforms?",
    answer: "Most LMS platforms are built for expensive, self-paced Western courses or complex university systems. They are often costly, packed with features you'll never use, and don't match how classes actually run in our market. Vrede is built for our market and focused on eliminating admin stress, keeping your class organized and giving you back your time every week.",
  },
  {
    question: "What if I teach both live classes and pre-recorded lessons?",
    answer: "Vrede is designed for however you teach. Whether you host live interactive sessions, drop pre-recorded audio lessons with slides (Smart Class), share video lessons, or mix all three, the workspace adapts seamlessly to your style.",
  },
  {
    question: "Will my students find it hard to use?",
    answer: "Not at all. Vrede gives your learners a clean, distraction-free environment where their calendar, resources, announcements, and task submissions live in one obvious place.",
  },
  {
    question: "How can I get access?",
    answer: "Join the early access list and we'll notify you the moment onboarding opens.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow=""
            title="Frequently Asked Questions"
            description=""
            className="mx-auto"
          />
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 90}>
              <FaqItem faq={faq} defaultOpen={index === 0} />
            </ScrollReveal>
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
        <span className="text-xl font-light text-stone-400">{open ? "-" : "+"}</span>
      </div>
      {open ? <p className="mt-3 text-sm leading-6 text-stone-500">{faq.answer}</p> : null}
    </button>
  );
}
