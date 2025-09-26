import BuiltFor from "@/Components/BuiltFor/page";
import FAQ from "@/Components/FAQ/page";
import Features from "@/Components/Features/page";
import Hero from "@/Components/Hero/page";
import Testimonials from "@/Components/Testimonials/page";
import Footer from "@/Components/Footer/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <BuiltFor />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
