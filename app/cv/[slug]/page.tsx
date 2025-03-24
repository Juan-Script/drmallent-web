import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Perfil from "@/components/shared/Perfil";
import { cvData, cvInt } from "@/data/cv";
import { Flex } from "@chakra-ui/react";
import { notFound } from "next/navigation";
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

export default function page({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const { slug } = params;

    const data = cvData?.find((cv: cvInt) => cv?.slug === slug);

    if (!data) return notFound();

    return (
        <Flex
            direction="column"
        >
            <Navbar />

            <Hero
                title="Equipo profesional clínica DRJM"
            />

            <Perfil profesional={data} />

            <ContactUs />

            <Footer />
        </Flex>
    )
}
