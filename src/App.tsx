import { FaqSection } from "./components/landing/FaqSection";
import { FeatureSplitSection } from "./components/landing/FeatureSplitSection";
import { FooterSection } from "./components/landing/FooterSection";
import { Header } from "./components/landing/Header";
import { HeroSection } from "./components/landing/HeroSection";
import { TeachingCardsSection } from "./components/landing/TeachingCardsSection";

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <Header />
      <HeroSection />


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
      <FooterSection />
    </main>
  );
}
