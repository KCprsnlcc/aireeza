import Hero from "../components/sections/Hero";
import Credentials from "../components/sections/Credentials";
import Experience from "../components/sections/Experience";
import Services from "../components/sections/Services";
import Leadership from "../components/sections/Leadership";
import Contact from "../components/sections/Contact";
import Metrics from "../components/sections/Metrics";

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <Experience />
      <Metrics />
      <Services />
      <Leadership />
      <Contact />
    </>
  );
}
