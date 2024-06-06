import AccordionComponent from "@/components/shared/Accordion";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import { Flex } from "@chakra-ui/react";
import { especialidadData } from "@/data/especialidad";
import Navbar from "@/components/shared/Navbar";

export default function EspecialidadPage() {
    return (
        <Flex
            direction="column"
        >
            <Navbar />

            <Hero
                title="Plasma rico en plaquetas en Valencia"
            />

            <AccordionComponent data={especialidadData} />

            <Footer />
        </Flex>
    )
}
