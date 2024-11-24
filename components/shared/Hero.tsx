"use client"

import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
    title: string;
}

// Definimos motion para Flex y Text
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export const Hero = ({ title }: Props) => {
    return (
        <MotionFlex
            py={{ base: "100px", sm: "150px" }}
            px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
            direction="column"
            initial={{ opacity: 0 }}    // Empieza invisible
            animate={{ opacity: 1 }}    // Aumenta la opacidad
            transition={{ duration: 0.8 }} // La animación durará 0.8 segundos
        >
            <MotionText
                color="pureblack"
                fontWeight="700"
                fontSize={{ base: "40px", sm: "50px", md: "70px", lg: "90px" }}
                w={{ base: "90%", sm: "80%"}}
                lineHeight="100%"
                initial={{ opacity: 0, x: -100 }}  // Empieza desplazado hacia la izquierda
                animate={{ opacity: 1, x: 0 }}     // Llega al centro con opacidad total
                transition={{ duration: 1 }}       // Animación de 1 segundo
            >
                {title}
            </MotionText>
        </MotionFlex>
    );
};
