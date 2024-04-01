import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/hero";
import ImageSlider from "@/components/ImageSlider";
import Results from "@/components/results";
import Testimonials from "@/components/testimonials";
import Services from "@/components/services";
import Packages from "@/components/packages";
import FAQ from "@/components/faq";
import Footer from "@/components/Layout/Footer";
import Cta from "@/components/Cta";
import CaseEffect from "@/components/Animations/CaseEffect";
import Element from "react-scroll"
import Hero02 from "@/components/hero02";
import Meta from "@/components/Layout/Meta";

export default function Home() {
  return (
    <section>
      <Meta />
      <Hero02 />
      <ImageSlider />
      <div id="results">
        <Results />
      </div>
      <div id="clients">
        <Testimonials />
      </div>
      <div id="services">
        <Services />
      </div>
      <Packages />
      <div id="faq">
        <FAQ />
      </div>
      <Cta />
      <Footer />
    </section>
  );
}
