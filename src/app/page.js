import Advantage from "@/Ui/Advantage";
import Count from "@/Ui/Count";
import CoursesComponent from "@/Ui/CoursesComponent";
import Faq from "@/Ui/Faq";
import HeroSection from "@/Ui/HeroSection";
import StepProcess from "@/Ui/StepProcess";
import Testimonials from "@/Ui/Testimonials";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      {/* Hero section with full viewport height */}
      <section className="relative w-full h-screen">
        <HeroSection />
        {/* Optional hero background image */}
        {/* 
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/heroBackground.avif" 
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div> 
        */}
      </section>

      {/* Services / Courses Section */}
      <section className="relative w-full">
        <CoursesComponent />
      </section>

      {/* Advantages */}
      <section className="relative w-full">
        <Advantage />
      </section>

      {/* Step Process */}
      <section className="relative w-full">
        <StepProcess />
      </section>

      {/* FAQs */}
      <section className="relative w-full">
        <Faq />
      </section>

      {/* Counts / Statistics */}
      <section className="relative w-full">
        <Count />
      </section>

      {/* Testimonials */}
      <section className="relative w-full">
        <Testimonials />
      </section>
    </div>
  );
}
