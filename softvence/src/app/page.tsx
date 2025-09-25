import BuiltFor from "@/Components/BuiltFor/page";
import Features from "@/Components/Features/page";
import Hero from "@/Components/Hero/page";
import Testimonials from "@/Components/Testimonials/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <BuiltFor />
      <Testimonials />
    </div>
  );
}
