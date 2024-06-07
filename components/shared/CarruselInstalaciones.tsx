import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function CarruselInstalaciones() {
  return (
    <Flex
      bgColor="black"
      alignItems="end"
      justifyContent="end"
      direction="column"
      px="200px"
      py="100px"
    >
      <Text
        fontSize="19px"
        color="#797979"
        mb="20px"
      >
        Para que te sientas como en <Text as="span" color="purewhite">casa</Text>
      </Text>

      <Flex>
        <Image
          src="/imgCarrusel.png"
          alt='imgCarrusel'
          width={1380}
          height={695}
        />
      </Flex>

      <Text
        fontSize="74px"
        fontStyle="bold"
        color="purewhite"
        position="absolute"
        left="100px"
      >
        DRJM
      </Text>
    </Flex>
  )
}
