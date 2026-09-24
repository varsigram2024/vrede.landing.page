import { useEffect, useRef, useState, type ReactNode } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { FaqSection } from "./components/landing/FaqSection";
import { FeatureSplitSection } from "./components/landing/FeatureSplitSection";
import { FooterSection } from "./components/landing/FooterSection";
import { Header } from "./components/landing/Header";
import { HeroSection } from "./components/landing/HeroSection";
import { TeachingCardsSection } from "./components/landing/TeachingCardsSection";
import { LearnerPage } from "./pages/early-access/LearnerPage";
import { RoleSelectionPage } from "./pages/early-access/RoleSelectionPage";
import { SubmittedPage } from "./pages/early-access/SubmittedPage";
import { TutorPage } from "./pages/early-access/TutorPage";
import { TutorProfilePage } from "./pages/early-access/TutorProfilePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/early-access" element={<RoleSelectionPage />} />
      <Route path="/early-access/learner" element={<LearnerPage />} />
      <Route path="/early-access/tutor" element={<TutorPage />} />
      <Route path="/early-access/tutor-profile" element={<TutorProfilePage />} />
      <Route path="/early-access/submitted" element={<SubmittedPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  const handleEarlyAccess = () => {
    navigate("/early-access");
  };

  const sectionContent = (
    <>
      <FeatureSplitSection
        title="Teach the way that works for you."
        description="Vrede adapts to your teaching workflow (live, recorded, or a mix of both). You don't change how you teach. You simply stop managing it across WhatsApp groups, Drive folders, an Excel Sheet and a Forms link."
        withSVG={true}
        mockupImage="/images/mockups/iphone 48.png"
        bgColor="bg-[#fff]"
      />

      <FeatureSplitSection
        title="Say it once and everyone sees it."
        description="Vrede keeps announcements separate from class chat, so the important update doesn't get lost in the back-and-forth."
        mockupImage="/images/mockups/iphone svg.svg"
        bgColor="bg-[#FAF9F6]"
      />

      <FeatureSplitSection
        reverse
        title="A library that actually finds things for you. "
        description="Add a resource once, and Vrede keeps it organized by class. Your students find what they need on their own. You stop being the search engine for your own class."
        mockupImage="/images/mockups/iphone 47.svg"
        withIllustration
        bgColor="bg-[#FFF4F6]"
      />

      <TeachingCardsSection />
      <FaqSection />
      <FooterSection onEarlyAccess={handleEarlyAccess} />
    </>
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <Header onEarlyAccess={handleEarlyAccess} />
      <HeroSection onEarlyAccess={handleEarlyAccess} />
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
