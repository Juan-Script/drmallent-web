"use client"

import React from 'react'
import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// Definimos el motion component
const MotionFlex = motion(Flex)

interface Especialidad {
    titulo: string;
    descripcion: string;
    imagen: string;
    slug: string;
}

export default function DestacadoEspecialidad() {
    const especialidadesCirugiaPlastica: Especialidad[] = [
        {
            titulo: "Reducción mamaria",
            descripcion: "Descubre nuestros tratamientos faciales personalizados para rejuvenecer y revitalizar tu piel de forma natural y efectiva.",
            imagen: "/img/narizxd.png",
            slug: "/especialidades/reduccion-mamaria"
        },
        {
            titulo: "Reconstrucción de mama",
            descripcion: "Tratamientos corporales diseñados para mejorar la apariencia de tu piel y contornear tu figura con las últimas tecnologías.",
            imagen: "/img/microcanulas.png",
            slug: "/especialidades/reconstruccion-mama"
        },
        {
            titulo: "Rinoplastia",
            descripcion: "Procedimientos médico-estéticos de última generación para resultados naturales y duraderos.",
            imagen: "/img/estiramiento_facial.png",
            slug: "/especialidades/rinoplastia"
        }
    ];

    const especialidadesMedicinaEstetica: Especialidad[] = [
        {
            titulo: "Rellenos",
            descripcion: "Tratamientos con rellenos dérmicos para restaurar volumen y mejorar los contornos faciales de manera natural.",
            imagen: "/img/narizxd.png",
            slug: "/especialidades/rellenos"
        },
        {
            titulo: "Injerto capilar",
            descripcion: "Soluciones avanzadas para la pérdida de cabello mediante técnicas de trasplante capilar modernas.",
            imagen: "/img/microcanulas.png",
            slug: "/especialidades/injerto-capilar"
        },
        {
            titulo: "Toxina botulínica",
            descripcion: "Tratamientos especializados para reducir arrugas y líneas de expresión de forma segura y efectiva.",
            imagen: "/img/estiramiento_facial.png",
            slug: "/especialidades/toxina-botulinica"
        }
    ];

    const pathname = window.location.pathname;
    const especialidades = pathname.includes('cirugia-plastica') 
        ? especialidadesCirugiaPlastica 
        : pathname.includes('medicina-estetica')
            ? especialidadesMedicinaEstetica
            : especialidadesCirugiaPlastica; // default fallback

    return (
        <MotionFlex
            px={{ base: "0px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
            direction="column"
            py="12"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.3 } },
            }}
            cursor="pointer"
        >
            <MotionFlex direction="column" gap="8">
                {especialidades.map((especialidad, index) => (
                    <motion.div
                        key={index}
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
                ))}
            </MotionFlex>
        </MotionFlex>
    )
}
