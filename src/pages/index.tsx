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

export default function Home() {
  return (
    <section>
      <Hero02 />
      <ImageSlider />
      <Results />
      <Testimonials />
      <Services />
      <Packages />
      <FAQ />
      <Cta />
      <Footer />
    </section>
  );
}
