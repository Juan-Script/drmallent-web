import AccordionComponent from "@/components/shared/Accordion";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/shared/Navbar";
import { cirugiaPlasticaData } from "@/data/especialidadesData/cirugiaPlasticaData";
import CardEspecialidad from "@/components/shared/CardEspecialidad";
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

type Props = {
    params: {
        slug: string
    }
}

export default function EspecialidadPage({ params }: Props) {
    const { slug } = params;
    const tratamientoData = cirugiaPlasticaData[slug as keyof typeof cirugiaPlasticaData];

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

            {tratamientoData.especialidades && (
                <Flex
                    gap="20px"
                    direction="column"
                    px={{
                        base: "0px",
                        md: "50px",
                        lg: "100px",
                        xl: "200px"
                    }}
                    py="20px"
                    pb="100px"
                >
                    {tratamientoData.especialidades.map((especialidad, index) => (
                        <CardEspecialidad
                            key={index}
                            especialidad={especialidad}
                            index={index}
                        />
                    ))}
                </Flex>
            )}

            {tratamientoData.preguntas && (
                <AccordionComponent 
                    data={tratamientoData.preguntas}
                />
            )}

            <Footer />
        </Flex>
    )
}
