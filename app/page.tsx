import Testimonials from "@/section/avis-client";
import Contact from "@/section/contact";
import Footer from "@/section/Footer";
import Header from "@/section/Header";
import Hero from "@/section/Hero";
import Faq from "@/section/Question";
import Services from "@/section/Service";
import StatsSection from "@/section/stat";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/> 
      <Services />
      <Testimonials/>
      <StatsSection />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}