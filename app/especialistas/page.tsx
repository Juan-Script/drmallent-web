"use client"

import CarruselEquipo from "@/components/shared/CarrouselEquipo/CarruselEquipo";
import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Definimos motion components
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export default function page() {
    return (
        <MotionFlex
            direction="column"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.2 } },
            }}
        >
            <Navbar />

            {/* Animación para el Hero */}
            <Hero
                title="Equipo profesional clínica Dr.Mallent"
            />

            {/* Sección de texto con animaciones */}
            <MotionFlex
                direction={{ base: "column", md: "row" }}
                py={{ base: "50px", md: "75px", lg: "100px" }}
                px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
                w="full"
                justifyContent={{ base: "flex-start", md: "space-between" }}
                gap={{ base: "30px", md: "0" }}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
            >
                {/* Título con deslizamiento desde arriba */}
                <MotionText
                    color="pureblack"
                    fontSize={{ base: "24px", sm: "28px", md: "32px" }}
                    fontWeight="400"
                    w={{ base: "100%", md: "30%" }}
                    mb={{ base: "20px", md: "0" }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    UN EQUIPO EXPERTO
                </MotionText>

                {/* Texto principal con desvanecimiento */}
                <MotionFlex
                    direction="column"
                    gap="20px"
                    color="secondary_font"
                    fontSize={{ base: "15px", sm: "16px", md: "14px" }}
                    fontWeight="400"
                    textAlign="justify"
                    maxW={{ base: "100%", md: "65%", lg: "750px" }}
                    variants={{
                        hidden: { opacity: 0, y: 50 }, // Aparece desde abajo
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }}
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
                </MotionFlex>
            </MotionFlex>

            {/* Animación para el Carrusel del Equipo */}
            <CarruselEquipo />

            {/* Animaciones de ContactUs y Footer */}
            <MotionFlex
                initial="hidden"
                animate="visible"
                direction="column"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
                }}
            >
                <ContactUs />
                <Footer />
            </MotionFlex>
        </MotionFlex>
    );
}
