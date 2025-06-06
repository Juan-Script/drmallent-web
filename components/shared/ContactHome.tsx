"use client"

import { Flex, Text } from '@chakra-ui/react'
import Form from './Form'
import { motion } from 'framer-motion'

// Definimos motion para Flex y Text
const MotionFlex = motion(Flex)
const MotionText = motion(Text)

export default function ContactHome() {
  return (
    <MotionFlex
      bgColor="white"
      px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
      justifyContent="center"
      direction="column"
      py={{ base: "50px", md: "100px" }}
      gap="10px"
      mx="auto"
      initial={{ opacity: 0 }} // Empieza con opacidad 0
      animate={{ opacity: 1 }}  // Aparece con opacidad 1
      transition={{ duration: 1 }} // La animación durará 1 segundo
      maxW="2000px"
    >
      <MotionText
        fontSize={{ base: "18px", md: "23px" }}
        textTransform="uppercase"
        mr="auto"
        initial={{ opacity: 0, x: -100 }} // Sale desde la izquierda
        animate={{ opacity: 1, x: 0 }}  // Llega a la posición original
        transition={{ duration: 1 }}  // Duración de la animación
        as={"h2"}
      >
        Solicite una consulta
      </MotionText>

      <MotionFlex
        gap={{ base: "30px", md: "60px" }}
        align="center"
        direction={{ base: "column", lg: "row" }}
        initial={{ opacity: 0 }}  // Inicia con opacidad 0
        animate={{ opacity: 1 }}   // Aumenta a opacidad 1
        transition={{ duration: 1.2 }} // Un poco más lenta
      >
        {/* Columna izquierda con el formulario */}
        <MotionFlex
          w={{ base: "100%", lg: "50%" }}
          direction="column"
          gap="30px"
          initial={{ opacity: 0, x: -100 }}  // Empieza desde la izquierda
          animate={{ opacity: 1, x: 0 }}     // Se mueve hacia el centro
          transition={{ duration: 1.2 }}  // Duración de la animación
        >
          <Text
            fontSize="12px"
          >
            Solicite una consulta y nos pondremos en contacto con usted
          </Text>

          {/* Animamos el formulario */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} // Inicia más pequeño y con baja opacidad
            animate={{ opacity: 1, scale: 1 }}   // Crece y se vuelve completamente visible
            transition={{ duration: 1.4 }}       // Animación suave
          >
            <Form />
          </motion.div>
        </MotionFlex>

        {/* Columna derecha con el texto */}
        <MotionFlex
          w={{ base: "100%", lg: "50%" }}
          initial={{ opacity: 0, x: 100 }}  // Sale desde la derecha
          animate={{ opacity: 1, x: 0 }}    // Se mueve hacia el centro
          transition={{ duration: 1.2 }}  // Duración de la animación
        >
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            mb={{ base: "40px", md: "80px" }}
          >
            En la Clínica Dr. Mallent solo queremos lo mejor para nuestros
            pacientes, por eso realizamos una consulta previa a cualquier
            tratamiento. Un diagnostico estético personalizado elaborado por
            un cirujano referente y reconocido en Cirugía Plástica y
            Reparadora.
          </Text>
        </MotionFlex>
      </MotionFlex>
    </MotionFlex>
  )
}
