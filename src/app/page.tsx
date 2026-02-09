'use client';

import PageLoader from "../components/ui/PageLoader";
import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import WhatIDo from "../components/sections/WhatIDo";
import HowIWork from "../components/sections/HowIWork";
import WhoIWorkWith from "../components/sections/WhoIWorkWith";
import About from "../components/sections/About";
import PointOfView from "../components/sections/PointOfView";
import LetsTalk from "../components/sections/LetsTalk";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Hero />
      <Problem />
      <WhatIDo />
      <HowIWork />
      <WhoIWorkWith />
      <About />
      <PointOfView />
      <LetsTalk />
      <Footer />
    </>
  );
}
