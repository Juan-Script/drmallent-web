import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Testimonials() {

  const testimonios = [
    {
      text: "Dos intervenciones con el Dr. Mallent y encantada con el resultado. Atención de 10, y el postoperatorio sin ningún dolor. El pecho esta acertado con la talla y muy natural, exactamente como lo quería…",
      person: "Estefanía",
    },
    {
      text: "Desde la primera consulta me transmitió profesionalidad, seguridad pero sobretodo una gran humanidad y cercanía.",
      person: "Carlos Fernández",
    },
    {
      text: "Estoy encantada con el Dr.Mallent. Desde la primera consulta me transmitió profesionalidad, seguridad pero sobretodo una gran humanidad y cercanía. ¡Mi complejo ha quedado resuelto y estoy feliz!",
      person: "Ana Martínez",
    }
  ]

  return (
    <Flex
      px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
      py={{ base: "50px", md: "100px" }}
      gap={{ base: "60px" }}
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "flex-start" }}
      bg="#F3F3F3"
    >
      {
        testimonios.map((testimonio, index) => (
          <Flex
            key={index}
            direction="column"
            gap="20px"
            w={{ base: "100%", md: "300px" }}
            maxW="400px"
            mx="auto"
          >
            <Text
              fontSize={{ base: "16px", md: "14px" }}
              fontStyle="italic"
            >
              {testimonio.text}
            </Text>
            <Flex
              gap="20px"
              align="center"
            >
              <Text
                fontSize={{ base: "14px", md: "12px" }}
              >
                {testimonio.person}
              </Text>
            </Flex>
          </Flex>
        ))
      }
    </Flex>
  )
}
