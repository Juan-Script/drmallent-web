"use client"

import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Definimos motion para Flex y Text
const MotionFlex = motion(Flex)
const MotionText = motion(Text)

export default function AboutUs() {
    return (
        <MotionFlex
            direction="column"
            gap="30px"
            px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
            py={{base: "50px", md: "100px"}}
            initial={{ opacity: 0 }} // Inicialmente invisible
            animate={{ opacity: 1 }}  // Animación completa
            transition={{ duration: 0.8 }} // Duración de la animación
            maxW="2000px"
            mx="auto"
        >
            {/* Animamos los textos de la sección de arriba */}
            <MotionFlex
                direction="column"
                gap="20px"
                initial={{ opacity: 0, x: -100 }} // Sale desde la izquierda
                animate={{ opacity: 1, x: 0 }}    // Termina centrado y visible
                transition={{ duration: 1 }}
            >
                <MotionFlex
                    direction="column"
                    gap="5px"
                >
                    <MotionText
                        fontSize="16px"
                        textColor="font_variant"
                    >
                        SOBRE NOSOTROS
                    </MotionText>

                    <MotionText
                        fontSize="40px"
                        textColor="black"
                        as={"h2"}
                    >
                        CLÍNICA DRJM – CIRUGÍA PLÁSTICA ESTÉTICA EN VALENCIA
                    </MotionText>
                </MotionFlex>

                <MotionText
                    fontSize="14px"
                    textColor="black"
                >
                    En nuestra clínica de Cirugía Plástica Estética, contamos con una larga trayectoria y un equipo de especialistas con amplia formación en todo tipo de tratamientos estéticos, tanto quirúrgicos como no quirúrgicos. Las excelentes opiniones de nuestros pacientes son nuestra mejor carta de presentación y nos ha posicionado como una de las clínicas de cirugía estética de referencia.
                </MotionText>
            </MotionFlex>

            {/* Reemplazamos la galería de imágenes con un diseño responsive */}
            <MotionFlex
                gap={{ base: "0", md: "20px" }}
                mx="auto"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                w="full"
            >
                {/* Carrusel para móvil */}
                <Flex
                    display={{ base: 'block', md: 'none' }}
                    w="full"
                >
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        arrows={false}
                        autoplay={true}
                    >
                        <Flex h="442px" w="full">
                            <Image
                                src={'/img/AboutUs1.jpg'}
                                alt='imgAboutUs'
                                height={442}
                                width={243}
                                objectFit="cover"
                                style={{ width: '100%' }}
                            />
                        </Flex>
                        <Flex h="442px" w="full">
                            <Image
                                src={'/img/AboutUs2.jpg'}
                                alt='imgAboutUs'
                                height={442}
                                width={243}
                                objectFit="cover"
                                style={{ width: '100%' }}
                            />
                        </Flex>
                        <Flex h="442px" w="full">
                            <Image
                                src={'/img/AboutUs3.jpg'}
                                alt='imgAboutUs'
                                height={442}
                                width={243}
                                objectFit="cover"
                                style={{ width: '100%' }}
                            />
                        </Flex>
                    </Slider>
                </Flex>

                {/* Vista de escritorio - mantener el diseño original */}
                <Flex
                    display={{ base: 'none', md: 'flex' }}
                    gap="20px"
                    w="full"
                >
                    <Flex
                        h="full"
                        w="full"
                        maxH="442px"
                        maxW="243px"
                    >
                        <Image
                            src={'/img/AboutUs1.jpg'}
                            alt='imgAboutUs'
                            height={442}
                            width={243}
                            objectFit="cover"
                        />
                    </Flex>

                    <Flex
                        h="full"
                        w="full"
                        maxH="442px"
                        maxW="243px"
                    >
                        <Image
                            src={'/img/AboutUs2.jpg'}
                            alt='imgAboutUs'
                            height={440}
                            width={240}
                            objectFit="cover"
                        />
                    </Flex>

                    <Flex
                        maxH="240px"
                        direction="column"
                    >
                        <Flex
                            h="243px"
                            w="243px"
                            display={{ md: "flex", base: "none" }}
                        >
                            <Image
                                src={'/img/AboutUs3.jpg'}
                                alt='imgAboutUs'
                                height={240}
                                width={240}
                                objectFit='cover'
                            />
                        </Flex>

                        {/* Animamos los números y el texto */}
                        <MotionFlex
                            mt="50px"
                            ml="30px"
                            gap="60px"
                            initial={{ opacity: 0 }} // Inicialmente invisible
                            animate={{ opacity: 1 }}  // Aparece con opacidad completa
                            transition={{ duration: 1, delay: 0.3 }} // Ligero retraso
                            display={{ md: "flex", base: "none" }}
                        >
                            <MotionFlex
                                direction="column"
                                maxW="163px"
                                initial={{ opacity: 0, y: -50 }} // Empieza desde arriba
                                animate={{ opacity: 1, y: 0 }}   // Llega a su lugar
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                <Text
                                    fontSize="40px"
                                    color="font_variant"
                                >
                                    2K+
                                </Text>

                                <Text
                                    fontSize="16px"
                                    letterSpacing={4}
                                >
                                    CIRUGÍAS CON ÉXITO
                                </Text>
                            </MotionFlex>

                            <MotionFlex
                                direction="column"
                                maxW="163px"
                                initial={{ opacity: 0, y: -50 }} // Empieza desde arriba
                                animate={{ opacity: 1, y: 0 }}   // Llega a su lugar
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <Text
                                    fontSize="40px"
                                    color="font_variant"
                                >
                                    8+
                                </Text>

                                <Text
                                    fontSize="16px"
                                    letterSpacing={4}
                                    whiteSpace="nowrap"
                                >
                                    TRABAJADORES
                                </Text>
                            </MotionFlex>

                            <MotionFlex
                                direction="column"
                                maxW="163px"
                                initial={{ opacity: 0, y: -50 }} // Empieza desde arriba
                                animate={{ opacity: 1, y: 0 }}   // Llega a su lugar
                                transition={{ duration: 1, delay: 1.2 }}
                            >
                                <Text
                                    fontSize="40px"
                                    color="font_variant"
                                >
                                    300+
                                </Text>

                                <Text
                                    fontSize="16px"
                                    letterSpacing={4}
                                >
                                    CLIENTES
                                </Text>
                            </MotionFlex>

                        </MotionFlex>
                    </Flex>

                </Flex>

            </MotionFlex>
        </MotionFlex>
    )
}
