import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/hero";
import ImageSlider from "@/components/ImageSlider";
import Results from "@/components/results";

export default function Home() {
  return (
    <section>
      <Hero />
      <ImageSlider />
      <Results />
    </section>
  );
}
