import { useEffect, useRef, useState, type ReactNode } from "react";
import { FaqSection } from "./components/landing/FaqSection";
import { FeatureSplitSection } from "./components/landing/FeatureSplitSection";
import { FooterSection } from "./components/landing/FooterSection";
import { Header } from "./components/landing/Header";
import { HeroSection } from "./components/landing/HeroSection";
import { TeachingCardsSection } from "./components/landing/TeachingCardsSection";
import { EarlyAccessModal } from "./components/landing/EarlyAccessModal";

export default function App() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  if (isEarlyAccessOpen) {
    return <EarlyAccessModal onClose={() => setIsEarlyAccessOpen(false)} />;
  }

  const sectionContent = (
    <>
      <FeatureSplitSection
        title="Everything your class needs, in one place."
        description="Teaching is more than delivering lessons. It is announcements, resources, live sessions, assignments, and keeping everyone aligned. Vrede brings it together so educators can focus on teaching instead of platform management."
        mockupImage="/images/mockups/quick action overlay.png"
        withIllustration
      />

      <FeatureSplitSection
        title="Everything your class needs, in one place."
        description="Teaching is more than delivering lessons. It is announcements, resources, live sessions, assignments, and keeping everyone aligned. Vrede brings it together so educators can focus on teaching instead of platform management."
        mockupImage="/images/mockups/iphone 46.svg"
      />

      <FeatureSplitSection
        reverse
        title="Keep announcements where they'll never get lost"
        description="Ditch crowded group chats and messy email threads. Vrede keeps announcements, queries, and workspace discussions structured so critical updates stay visible and students never miss a deadline."
        mockupImage="/images/mockups/iphone 47.svg"
      />

      <TeachingCardsSection />
      <FaqSection />
      <FooterSection onEarlyAccess={() => setIsEarlyAccessOpen(true)} />
    </>
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <Header onEarlyAccess={() => setIsEarlyAccessOpen(true)} />
      <HeroSection onEarlyAccess={() => setIsEarlyAccessOpen(true)} />
      <LazyBelowFold>{sectionContent}</LazyBelowFold>
    </main>
  );
}

function LazyBelowFold({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}
