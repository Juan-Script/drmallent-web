"use client"

import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Especialidad } from "@/types/especialidades";

interface Props {
    especialidad: Especialidad;
    index: number;
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function CardEspecialidad({ especialidad, index }: Props) {
    return (
        <motion.div
            onClick={() => window.location.href = especialidad.slug}
            className="bg-white overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            style={{
                width: '100%',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
        >
            <Flex
                direction={{ base: "column", md: index === 1 ? "row-reverse" : "row" }}
                gap="6"
                height="100%"
            >
                <Image
                    src={especialidad.imagen}
                    alt={especialidad.titulo}
                    width={400}
                    height={300}
                    style={{
                        width: '400px',
                        height: '300px',
                        objectFit: 'cover',
                        transform: (index === 0 || index === 2) ? 'scaleX(-1)' : 'none'
                    }}
                />
                <Flex 
                    direction="column" 
                    justify="center" 
                    gap="4"
                    flex="1"
                    p="6"
                >
                    <Text
                        fontSize="32px"
                        fontWeight="700"
                    >
                        {especialidad.titulo}
                    </Text>
                    <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="gray.600"
                    >
                        {especialidad.descripcion}
                    </Text>
                </Flex>
            </Flex>
        </motion.div>
    );
}
