import { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { FaqSection } from "./components/landing/FaqSection";
import { FeatureSplitSection } from "./components/landing/FeatureSplitSection";
import { FooterSection } from "./components/landing/FooterSection";
import { Header } from "./components/landing/Header";
import { HeroSection } from "./components/landing/HeroSection";
import { TeachingCardsSection } from "./components/landing/TeachingCardsSection";

const LearnerPage = lazy(() =>
  import("./pages/early-access/LearnerPage").then((m) => ({ default: m.LearnerPage })),
);
const RoleSelectionPage = lazy(() =>
  import("./pages/early-access/RoleSelectionPage").then((m) => ({ default: m.RoleSelectionPage })),
);
const LearnerSubmittedPage = lazy(() =>
  import("./pages/early-access/learner/LearnerSubmittedPage").then((m) => ({
    default: m.LearnerSubmittedPage,
  })),
);
const TutorSubmittedPage = lazy(() =>
  import("./pages/early-access/tutor/TutorSubmittedPage").then((m) => ({
    default: m.TutorSubmittedPage,
  })),
);
const TutorPage = lazy(() =>
  import("./pages/early-access/TutorPage").then((m) => ({ default: m.TutorPage })),
);
const TutorProfilePage = lazy(() =>
  import("./pages/early-access/TutorProfilePage").then((m) => ({ default: m.TutorProfilePage })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));

export default function App() {
  return (
    <Suspense fallback={null}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/early-access" element={<RoleSelectionPage />} />
      <Route path="/early-access/learner" element={<LearnerPage />} />
      <Route path="/early-access/tutor" element={<TutorPage />} />
      <Route path="/early-access/tutor-profile" element={<TutorProfilePage />} />
      <Route path="/early-access/learner/submitted" element={<LearnerSubmittedPage />} />
      <Route path="/early-access/tutor/submitted" element={<TutorSubmittedPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </Suspense>
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
      {sectionContent}
    </main>
  );
}
