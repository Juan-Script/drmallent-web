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
        pt={{ base: "100px", sm: "120px", md: "130px", lg: "150px" }}
        direction="column"
        px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
      >
        <Image
          src="/mapa.png"
          alt="mapa"
          width={1139}
          height={532}
          style={{ width: '100%', height: 'auto' }}
        />

        <Text
          as="h1"
          color="black"
          fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "40px" }}
          fontWeight="500"
          lineHeight={{ base: "36.4px", sm: "41.6px", md: "46.8px", lg: "52.8px" }}
          letterSpacing="0.667px"
          mt={{ base: "25px", sm: "30px", md: "35px" }}
          mb={{ base: "30px", sm: "40px", md: "50px" }}
        >
          Contacta con nosotros
        </Text>

        <Flex
          mb={{ base: "40px", sm: "50px", md: "60px" }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex="1"
            direction="column"
            mb={{ base: "40px", md: "0" }}
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
            ml={{ base: "0", md: "50px", lg: "175px" }}
            mt={{ base: "40px", md: "0" }}
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
