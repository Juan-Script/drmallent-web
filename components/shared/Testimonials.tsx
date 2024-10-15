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
      px={{ xl: "300px", lg: "200px" }}
      py="100px"
      gap="40px"
    >
      {
        testimonios.map((testimonio, index) => (
          <Flex
            key={index}
            direction="column"
            gap="20px"
            w="300px"
          >
            <Text
              fontSize="14px"
              fontStyle="italic"
            >
              {testimonio.text}
            </Text>
            <Flex
              gap="20px"
              align="center"
            >
              <Text
                fontSize="12px"
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
