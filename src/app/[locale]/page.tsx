import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseMe from "@/components/WhyChooseMe";
import Expertise from "@/components/Expertise";
import Workshops from "@/components/Workshops";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseMe />
        <Expertise />
        <Workshops />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
