import AccordionComponent from "@/components/shared/Accordion";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/shared/Navbar";
import { medicinaEsteticaData } from "@/data/especialidadesData/medicinaEsteticaData";
import { notFound } from "next/navigation";
import { Tratamiento } from "@/types/especialidades";

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
