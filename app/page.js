import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import BentoFeatures from "@/components/BentoFeatures";
import Workflow from "@/components/Workflow";
import PricingMatrix from "@/components/PricingMatrix";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-black">
      <Hero />
      <Capabilities />
      <BentoFeatures />
      <Workflow />
      <PricingMatrix />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
