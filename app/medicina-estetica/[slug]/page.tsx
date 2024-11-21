import AccordionComponent from "@/components/shared/Accordion";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/shared/Navbar";
import { medicinaEsteticaData } from "@/data/especialidadesData/medicinaEsteticaData";

type Props = {
    params: {
        slug: string
    }
}

export default function EspecialidadPage({ params }: Props) {
    const { slug } = params;
    const tratamientoData = medicinaEsteticaData[slug as keyof typeof medicinaEsteticaData];

    return (
        <Flex
            direction="column"
        >
            <Navbar />

            <Hero
                title={tratamientoData?.titulo}
            />

            <AccordionComponent data={tratamientoData?.preguntas} />

            <Footer />
        </Flex>
    )
}
