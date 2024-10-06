
import AboutUs from "@/components/shared/AboutUs";
import ContactHome from "@/components/shared/ContactHome";
import Footer from "@/components/shared/Footer";
import Galeria from "@/components/shared/Galeria";
import HeroHome from "@/components/shared/HeroHome";
import Navbar from "@/components/shared/Navbar";
import Posts from "@/components/shared/Posts";
import SpecsHome from "@/components/shared/SpecsHome";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <AboutUs />
      <ContactHome />
      <Testimonials />
      <SpecsHome />
      <Galeria />
      <Posts />
      <Footer />
    </>
  );
}
