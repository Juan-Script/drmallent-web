import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Perfil from "@/components/shared/Perfil";
import { cvData, cvInt } from "@/data/cv";
import { Flex } from "@chakra-ui/react";
import { notFound } from "next/navigation";

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
