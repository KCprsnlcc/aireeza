'use client';

import PageLoader from "../components/ui/PageLoader";
import Hero from "../components/sections/Hero";
import Ticker from "../components/sections/Ticker";
import AboutStrip from "../components/sections/AboutStrip";
import ServicesPreview from "../components/sections/ServicesPreview";
import CaseStudyPreview from "../components/sections/CaseStudyPreview";
import WritingPreview from "../components/sections/WritingPreview";
import CTABanner from "../components/sections/CTABanner";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Hero />
      <Ticker />
      <AboutStrip />
      <ServicesPreview />
      <CaseStudyPreview />
      <WritingPreview />
      <CTABanner />
      <Footer />
    </>
  );
}
