import Footer from "@/components/shared/Footer";
import Form from "@/components/shared/Form";
import Navbar from "@/components/shared/Navbar";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Contacto() {
  return (
    <Flex
      direction="column"
    >
      <Navbar />
      
      <Flex
        pt={{ base: "100px", lg: "150px" }}
        direction="column"
        px={{ base: "0", lg: "318px" }}
      >
        <Image
          src="/mapa.png"
          alt="mapa"
          width={1139}
          height={532}
        />

        <Text
          as="h1"
          color="black"
          fontSize="40px"
          fontWeight="500"
          lineHeight="52.8px"
          letterSpacing="0.667px"
          mt="35px"
          mb="50px"
        >
          Contacta con nosotros
        </Text>

        <Flex
          mb="60px"
        >
          <Flex
            flex="1"
            direction="column"
          >
            <Text
              color="black"
              fontSize="11px"
              fontWeight="500"
              lineHeight="13.2px"
              letterSpacing={"0.667px"}
              textTransform={"uppercase"}
            >
              Solicitar visita
            </Text>

            <Box h="1px" w="75%" bg="#CCCCCF" />

            <Text
              color={"secondary_font"}
              fontSize={"12px"}
              fontWeight={"400"}
              lineHeight={"20px"}
              letterSpacing={"0.267px"}
              w="75%"
              mt="15px"
              mb="45px"
            >
              Pide una cita rellenando el siguiente formulario y nos pondremos en contacto contigo por teléfono, chat, correo electrónico u otra vía.
            </Text>

            <Form />
          </Flex>

          <Flex
            flex="1"
            direction="column"
            gap="10px"
            ml="175px"
          >
            <Text
              color="black"
              fontSize="11px"
              fontWeight="500"
              lineHeight="13.2px"
              letterSpacing={"0.667px"}
              textTransform={"uppercase"}
            >
              DRJM
            </Text>

            <Flex
              direction="column"
              gap="20px"
            >
              <Flex
                color="secondary_font"
                fontSize="12px"
                fontWeight="400"
                lineHeight="20px"
                letterSpacing={"0.267px"}
                direction="column"
              >
                <Text>
                  Dr. José Mallent
                </Text>

                <Text>
                  Especialista en Cirugía Plástica, Estética y Reparadora
                </Text>
              </Flex>

              <Flex
                color="secondary_font"
                fontSize="12px"
                fontWeight="400"
                lineHeight="20px"
                letterSpacing={"0.267px"}
                direction="column"
              >
                <Text>
                  Calle de Sorní, 4
                </Text>

                <Text>
                  46004 Valencia (Edificio de los Dragones)
                </Text>
              </Flex>

              <Text
                color="secondary_font"
                fontSize="12px"
                fontWeight="400"
                lineHeight="20px"
                letterSpacing={"0.267px"}
              >
                info@drmallent.com
              </Text>

              <Text
                color={"black"}
                fontSize="12px"
                fontWeight="400"
                lineHeight="20px"
                letterSpacing={"0.267px"}
              >
                +34 646 66 78 00
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}
