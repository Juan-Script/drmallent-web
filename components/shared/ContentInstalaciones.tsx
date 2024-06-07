import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function ContentInstalaciones() {
  return (
    <Flex
      direction="column"
      px={{ xl: "200px", lg: "200px" }}
      py="100px"
      gap="70px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontSize="60px"
        >
          Innovación
        </Text>
        <Text
          fontSize="18px"
          color="#6B6B6B"
          maxW="700px"
        >
          Nuestra clínica se encuentra ubicada en el la conocida como «Casa de los Dragones», uno de los edificios más emblemáticos del centro histórico de Valencia. Construido en 1901, la decoración de su fachada es el elemento más destacado de la construcción y la que le ha otorgado gran relevancia en las construcciones arquitectónicas urbanísticas de la ciudad de Valencia.
        </Text>
      </Flex>

      <Flex
        direction="column"
        gap="30px"
      >
        <Flex
          gap="30px"
        >
          <Flex>
            <Image
              src="/imgInstalaciones1.png"
              alt='imgInstalaciones'
              width={446}
              height={600}
            />
          </Flex>

          <Flex>
            <Image
              src="/imgInstalaciones2.png"
              alt='imgInstalaciones'
              width={833}
              height={600}
            />
          </Flex>
        </Flex>

        <Flex
          gap="30px"
        >
          <Flex>
            <Image
              src="/imgInstalaciones3.png"
              alt='imgInstalaciones'
              width={833}
              height={600}
            />
          </Flex>

          <Flex>
            <Image
              src="/imgInstalaciones4.png"
              alt='imgInstalaciones'
              width={446}
              height={600}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
