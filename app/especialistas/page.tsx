import CarruselEquipo from "@/components/shared/CarrouselEquipo/CarruselEquipo";
import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import { Flex, Text } from "@chakra-ui/react";

export default function page() {
    return (
        <Flex
            direction="column"
        >
            <Navbar />

            <Hero
                title="Equipo profesional clínica Dr.Mallent"
            />

            <Flex
                direction={{ base: "column", md: "row" }}
                py={{ base: "50px", md: "75px", lg: "100px" }}
                px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
                w="full"
                justifyContent={{ base: "flex-start", md: "space-between" }}
                gap={{ base: "30px", md: "0" }}
            >
                <Text
                    color="pureblack"
                    fontSize={{ base: "24px", sm: "28px", md: "32px" }}
                    fontWeight="400"
                    w={{ base: "100%", md: "30%" }}
                    mb={{ base: "20px", md: "0" }}
                >
                    UN EQUIPO EXPERTO
                </Text>

                <Flex
                    direction="column"
                    gap="20px"
                    color="secondary_font"
                    fontSize={{ base: "15px", sm: "16px", md: "17px" }}
                    fontWeight="400"
                    lineHeight="30px"
                    letterSpacing={"0.267px"}
                    textAlign="justify"
                    maxW={{ base: "100%", md: "65%", lg: "750px" }}
                >
                    <Text>
                        Clínica Dr. Mallent es ante todo un equipo humano gran trayectoria profesional y sólidos valores éticos, especializado en tratamientos estéticos de última generación.
                    </Text>

                    <Text>
                        El Dr. José Mallent y su equipo están comprometidos con la investigación de tratamientos innovadores y las técnicas más avanzadas para ofrecer a sus pacientes los mejores resultados, en total confianza.
                    </Text>

                    <Text>
                        El trato individualizado de cada paciente, así como su bienestar durante todo el tratamiento están al centro de todas las atenciones. Esta actitud proactiva del equipo permite ofrecer la máxima calidad asistencial a los pacientes de la Clínica.
                    </Text>
                </Flex>
            </Flex>

            <CarruselEquipo />

            <ContactUs />

            <Footer />
        </Flex>
    )
}
