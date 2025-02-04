"use client"

import { Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Especialidad } from "@/types/especialidades";
import { useRef } from "react";

interface Props {
    especialidad: Especialidad;
    index: number;
}


export default function CardEspecialidad({ especialidad, index }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onClick={() => window.location.href = especialidad.slug}
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
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                cursor: 'pointer'
            }}
        >
            <Flex
                direction={{ base: "column", md: index % 2 !== 0 ? "row-reverse" : "row" }}
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
                        transform: index % 2 === 0 ? 'scaleX(-1)' : 'none'
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
