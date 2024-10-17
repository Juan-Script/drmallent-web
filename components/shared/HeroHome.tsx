"use client"

import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

// Definimos el motion para Flex y Text
const MotionFlex = motion(Flex)
const MotionText = motion(Text)

export default function HeroHome() {
    return (
        <Flex
            bgImage={'url(/img/Despacho1.jpg)'}
            bgSize="cover"
            bgPosition={{ base: "center", md: "left center" }}
            maxH={{ base: "500px", md: "600px", lg: "700px" }}
            w="full"
            h={{ base: "70vh", md: "100vh" }}
            pos="relative"
        >
            <MotionFlex
                textColor="black"
                direction="column"
                gap={{ base: "20px", md: "30px", lg: "40px" }}
                pos="absolute"
                top={{ base: "100px", sm: "150px", md: "200px" }}
                right={{ base: "20px", sm: "50px", md: "100px", lg: "300px" }}
                maxW={{ base: "300px", sm: "350px", md: "400px" }}
                initial={{ opacity: 0, x: 100 }} // Posición inicial, sale de la derecha
                animate={{ opacity: 1, x: 0 }} // Animación a la posición final
                transition={{ duration: 1 }} // Duración de la animación
            >
                <MotionText
                    fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
                    fontWeight={700}
                    initial={{ opacity: 0, x: -100 }} // Empieza desde la izquierda
                    animate={{ opacity: 1, x: 0 }} // Llega al centro con opacidad completa
                    transition={{ duration: 1 }} // La misma duración que el contenedor
                >
                    Cirugía responsable
                </MotionText>

                <MotionText
                    fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                    fontWeight={400}
                    initial={{ opacity: 0, x: 100 }} // Empieza desde la derecha
                    animate={{ opacity: 1, x: 0 }} // Mismo efecto
                    transition={{ duration: 1, delay: 0.5 }} // Un poco de retraso para que aparezca después del título
                >
                    Apuesto por una cirugía responsable, que no cree en el mercado de las apariencias sino en mejorar la belleza natural e intrínseca de cada individuo.
                </MotionText>
            </MotionFlex>
        </Flex>
    )
}
