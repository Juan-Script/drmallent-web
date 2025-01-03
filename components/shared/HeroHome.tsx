"use client"

import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionFlex = motion(Flex)
const MotionText = motion(Text)

export default function HeroHome() {
    return (
        <Flex
            // bgImage={'url(/img/Despacho1.jpg)'}
            bgImage={'url(/img/Bg1.png)'}
            // bgImage={'url(/img/Bg2.png)'}
            // bgImage={'url(/img/Bg3.png)'}
            // bgImage={'url(/img/Bg4.jpg)'}
            bgSize="cover"
            bgPosition={{ base: "center", md: "left center" }}
            maxH={{ base: "500px", md: "600px", lg: "700px" }}
            w="full"
            h={{ base: "120vh", md: "150vh" }}
            pos="relative"
        >
            <MotionFlex
                textColor="black"
                direction="column"
                gap={{ base: "20px", md: "30px", lg: "40px" }}
                pos="absolute"
                top={{ base: "100px", sm: "150px", md: "200px" }}
                left={{ base: "60px", sm: "50px", md: "100px", lg: "300px", xl: "300px", '2xl': "500px", "3xl": "600px" }}
                maxW={{ base: "300px", sm: "350px", md: "400px", lg: "400px", xl: "500px", "2xl": "500px" }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <MotionText
                    fontSize={{ base: "38px", sm: "32px", md: "36px", lg: "60px" }}
                    fontWeight={700}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Cirugía estética plástica
                </MotionText>

                {/* <MotionText
                    fontSize={{ base: "18px", sm: "15px", md: "16px" }}
                    fontWeight={400}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Apuesto por una cirugía responsable, que no cree en el mercado de las apariencias sino en mejorar la belleza natural e intrínseca de cada individuo.
                </MotionText> */}
            </MotionFlex>
        </Flex>
    )
}
