import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <Flex
      py={{ base: "100px", md: "150px", lg: "200px" }}
      px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={{ base: "30px", md: "40px", lg: "50px" }}
    >
      <Text
        textAlign="center"
        color="black"
        fontSize={{ base: "28px", md: "36px", lg: "44px" }}
        fontWeight="400"
        lineHeight={{ base: "38px", md: "50px", lg: "60.44px" }}
        letterSpacing="0.021px"
        w={{ base: "100%", md: "70%", lg: "60%", xl: "50%", "2xl": "40%" }}
      >
        No dudes en contactar con nosotros
      </Text>

      <Link
        href="/contacto"
        style={{ textDecoration: "none" }}
      >
        <Button
          w="fit-content"
          h="fit-content"
          py={{ base: "14px", md: "16px", lg: "18px" }}
          px={{ base: "60px", md: "90px", lg: "120px" }}
          bg="black"
          color="purewhite"
          fontSize={{ base: "14px", md: "14px", lg: "15px" }}
          fontWeight="700"
          lineHeight="28px"
          letterSpacing="0.267px"
          rounded="none"
        >
          Más información
        </Button>
      </Link>
    </Flex>
  )
}
