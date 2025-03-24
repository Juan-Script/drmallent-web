import AccordionComponent from "@/components/shared/Accordion";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/shared/Navbar";
import { medicinaEsteticaData } from "@/data/especialidadesData/medicinaEsteticaData";
import { notFound } from "next/navigation";
import { Tratamiento } from "@/types/especialidades";
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

type Props = {
    params: {
        slug: string
    }
}

export default function EspecialidadPage({ params }: Props) {
    const { slug } = params;
    const tratamientoData = medicinaEsteticaData[slug as keyof typeof medicinaEsteticaData];

    if (!tratamientoData) {
        notFound();
    }

    return (
        <Flex
            direction="column"
        >
            <Navbar />

            <Hero
                title={tratamientoData.titulo}
                subtitle={tratamientoData.subtitulo}
            />

            {tratamientoData.preguntas && (
                <AccordionComponent 
                    data={tratamientoData.preguntas}
                />
            )}

            <Footer />
        </Flex>
    )
}
