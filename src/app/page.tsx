import Hero from "../components/sections/Hero";
import Experience from "../components/sections/Experience";
import Services from "../components/sections/Services";
import Leadership from "../components/sections/Leadership";
import Contact from "../components/sections/Contact";
import Metrics from "../components/sections/Metrics";
import CaseStudy from "../components/sections/CaseStudy";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Metrics />
      <Services />
      <CaseStudy />
      <Testimonials />
      <Leadership />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
