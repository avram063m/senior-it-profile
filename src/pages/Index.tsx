import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
