
import Advantage from "@/Ui/Advantage";
import Count from "@/Ui/Count";
import CoursesComponent from "@/Ui/CoursesComponent";
import Faq from "@/Ui/Faq";
import HeroSection from "@/Ui/HeroSection";
import StepProcess from "@/Ui/StepProcess";
import Testimonials from "@/Ui/Testimonials";


export default function Home() {
  return (
<div 
style={{
    // backgroundImage: `url('./heroBackground.avif')`,
    // backgroundSize: 'cover',      // makes image cover the div
    // backgroundPosition: 'center', // centers image
    // width: '100%',
    // height: '100vh'               // full viewport height
  }}
 className=" h-screen w-full"
>
      <HeroSection/>
      <CoursesComponent/>
      <Advantage/>
      <StepProcess/>
      <Faq/>
      <Count/>
      <Testimonials/>
      
</div>
  );
}
