import AboutUs from "@/components/shared/AboutUs";
import ContactHome from "@/components/shared/ContactHome";
import Footer from "@/components/shared/Footer";
import Galeria from "@/components/shared/Galeria";
import HeroHome from "@/components/shared/HeroHome";
import Navbar from "@/components/shared/Navbar";
import Posts from "@/components/shared/Posts";
import SpecsHome from "@/components/shared/SpecsHome";
import Testimonials from "@/components/shared/Testimonials";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const TITLE = "Clínica DRJM"
  const DESCRIPTION = 'Clínica DRJM - Centro médico especializado en cirugía plástica y medicina estética. Ofrecemos tratamientos personalizados con los más altos estándares de calidad y seguridad para nuestros pacientes.'
  return {
      title: TITLE,
      description: DESCRIPTION,
      metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
      alternates: {
          canonical: process.env.NEXT_PUBLIC_BASE_URL,
      },
      robots: {
          index: true,
          follow: true,
          googleBot: {
              index: true,
              follow: true,
          },
      },
  }
}

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
