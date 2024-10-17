import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function CarruselInstalaciones() {
  return (
    <Flex
      bgColor="black"
      alignItems={{ base: "center", md: "end" }}
      justifyContent={{ base: "center", md: "end" }}
      direction="column"
      px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
      py={{ base: "50px", md: "75px", lg: "100px" }}
      position="relative"
    >
      <Text
        fontSize={{ base: "16px", sm: "17px", md: "19px" }}
        color="#797979"
        mb={{ base: "15px", md: "20px" }}
        textAlign={{ base: "center", md: "right" }}
      >
        Para que te sientas como en <Text as="span" color="purewhite">casa</Text>
      </Text>

      <Flex justifyContent="center" width="100%">
        <Image
          src="/imgCarrusel.png"
          alt='imgCarrusel'
          width={1380}
          height={695}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Flex>

      <Text
        fontSize={{ base: "40px", sm: "50px", md: "60px", lg: "74px" }}
        fontWeight="bold"
        color="purewhite"
        position={{ base: "static", md: "absolute" }}
        left={{ md: "50px", lg: "100px" }}
        bottom={{ md: "50px", lg: "100px" }}
        mt={{ base: "20px", md: "0" }}
      >
        DRJM
      </Text>
    </Flex>
  )
}
