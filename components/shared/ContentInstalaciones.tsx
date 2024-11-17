import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function ContentInstalaciones() {
  return (
    <Flex
      direction="column"
      px={{ base: "30px", sm: "100px", md: "150px", lg: "200px", xl: "200px", "2xl": "300px" }}
      py={{ base: "50px", md: "75px", lg: "100px" }}
      gap={{ base: "40px", md: "50px", lg: "70px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        gap={{ base: "20px", md: "0" }}
      >
        <Text
          fontSize={{ base: "36px", sm: "48px", md: "60px" }}
          mb={{ base: "20px", md: "0" }}
        >
          Innovación
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          color="#6B6B6B"
          maxW={{ base: "100%", md: "60%", lg: "700px" }}
        >
          Nuestra clínica se encuentra ubicada en el la conocida como «Casa de los Dragones», uno de los edificios más emblemáticos del centro histórico de Valencia. Construido en 1901, la decoración de su fachada es el elemento más destacado de la construcción y la que le ha otorgado gran relevancia en las construcciones arquitectónicas urbanísticas de la ciudad de Valencia.
        </Text>
      </Flex>

      <Flex
        direction="column"
        gap={{ base: "20px", md: "30px" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "20px", md: "30px" }}
        >
          <Flex flex={1}>
            <Image
              src="/img/Instalaciones1.png"
              alt='imgInstalaciones'
              width={446}
              height={600}
              layout="responsive"
            />
          </Flex>

          <Flex flex={2}>
            <Image
              src="/img/ImgInstalaciones2.png"
              alt='imgInstalaciones'
              width={833}
              height={600}
              layout="responsive"
            />
          </Flex>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "20px", md: "30px" }}
        >
          <Flex flex={2}>
            <Image
              src="/img/ImgInstalaciones3.png"
              alt='imgInstalaciones'
              width={833}
              height={600}
              layout="responsive"
            />
          </Flex>

          <Flex flex={1}>
            <Image
              src="/img/ImgInstalaciones4.png"
              alt='imgInstalaciones'
              width={446}
              height={600}
              layout="responsive"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
