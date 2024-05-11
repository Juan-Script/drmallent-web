import { Button, Flex, Text } from "@chakra-ui/react";

export default function ContactUs() {
  return (
    <Flex
        py="200px"
        px="300px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="50px"
    >
        <Text
            textAlign={"center"}
            color={"black"}
            fontSize="44px"
            fontWeight="400"
            lineHeight="60.44px"
            letterSpacing="0.021px"
            w="40%"
        >
            No dudes en contactar con nosotros
        </Text>

        <Button
            w="fit-content"
            h="fit-content"
            py="18px"
            px="120px"
            bg="black"
            color="purewhite"
            fontSize="15px"
            fontWeight="700"
            lineHeight="28px"
            letterSpacing="0.267px"
            rounded={"none"}
        >
            Más información
        </Button>
    </Flex>
  )
}
